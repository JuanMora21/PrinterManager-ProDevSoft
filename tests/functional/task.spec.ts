import { test } from '@japa/runner'
import Task from '../../app/Models/Task';

test.group('TasksController', () => {
  test('show Tasks', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    const response = await client.get('/Tasks/2').bearerToken(login.response._body.token.token)
    response.assertStatus(200)
    response.assertBodyContains([
      {
          "id": 2,
          "name": "Task1",
          "duration_hours": 2.3,
          "priority": "Important",
          "archive_id": 2,
          "created_at": "2022-09-16T17:53:21.000-05:00",
          "updated_at": "2022-09-16T17:53:21.000-05:00"
      }
    ])
  })
  test('list Tasks', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    const response = await client.get('/Tasks').bearerToken(login.response._body.token.token)
    response.assertStatus(200)
    response.assertBodyContains([
      {
        "id": 2,
        "name": "Task1",
        "duration_hours": 2.3,
        "priority": "Important",
        "archive_id": 2,
        "created_at": "2022-09-16T17:53:21.000-05:00",
        "updated_at": "2022-09-16T17:53:21.000-05:00"
      },
    ])
  })
  //test create Tasks
  test('create Tasks', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    const response = await client.post('/Tasks').form(
      {
        "name":"Prueba",
        "durationHours":2.3,
        "priority":"Important",
        "archive_id":2
      }
    ).bearerToken(login.response._body.token.token)
    response.assertStatus(200)
  })/*
  //test update Tasks
  test('update Tasks', async ({ client }) => {
    // Write your test here
    let last_Tasks = await Tasks.query().orderBy('id', 'desc').first()
    console.log(last_Tasks?.id)
    const response = await client.put('/Tasks/1').form(
      {
        "name":"Jose Luis",
        "email":"JoseLuis@correo.com",
        "password":"qwerty123",
        "Tasks_id":1
      }
    );
    response.assertStatus(200)
  })*/
  //test delete Tasks
  test('delete Tasks', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    let last_Tasks = await Task.query().orderBy('id', 'desc').first()
    const response = await client.delete('/Tasks/'+last_Tasks?.id).bearerToken(login.response._body.token.token)
    response.assertStatus(200)
  })
})