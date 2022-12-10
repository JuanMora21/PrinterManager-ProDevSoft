import { test } from '@japa/runner'
import TaskItem from '../../app/Models/TaskItem';

test.group('TaskItemsController', () => {
  test('show TaskItems', async ({ client }) => {
    // Write your test here
    const response = await client.get('/TaskItems/9')
    response.assertStatus(200)
    response.assertBodyContains([
      {
        "id": 9,
        "task_id": 2,
        "reservation_id": 2,
        "created_at": "2022-10-28T11:58:31.000-05:00",
        "updated_at": "2022-10-28T11:58:31.000-05:00"
      }
    ])
  })
  test('list TaskItems', async ({ client }) => {
    // Write your test here
    const response = await client.get('/TaskItems')
    response.assertStatus(200)
    response.assertBodyContains([
      {
        "id": 9,
        "task_id": 2,
        "reservation_id": 2,
        "created_at": "2022-10-28T11:58:31.000-05:00",
        "updated_at": "2022-10-28T11:58:31.000-05:00"
      }
    ])
  })
  //test create TaskItems
  test('create TaskItems', async ({ client }) => {
    // Write your test here
    const response = await client.post('/TaskItems').form(
      {
        "reservation_id":2,
        "task_id":5
      }
    );
    response.assertStatus(200)
  })/*
  //test update TaskItems
  test('update TaskItems', async ({ client }) => {
    // Write your test here
    let last_TaskItems = await TaskItems.query().orderBy('id', 'desc').first()
    console.log(last_TaskItems?.id)
    const response = await client.put('/TaskItems/1').form(
      {
        "name":"Jose Luis",
        "email":"JoseLuis@correo.com",
        "password":"qwerty123",
        "TaskItems_id":1
      }
    );
    response.assertStatus(200)
  })*/
  //test delete TaskItems
  test('delete TaskItems', async ({ client }) => {
    // Write your test here
    let last_TaskItems = await TaskItem.query().orderBy('id', 'desc').first()
    const response = await client.delete('/TaskItems/'+last_TaskItems?.id);
    response.assertStatus(200)
  })
})