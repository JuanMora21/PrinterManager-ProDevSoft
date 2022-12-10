import { test } from '@japa/runner'
import Permission from '../../app/Models/Permission';

test.group('PermissionsController', () => {
  test('show Permissions', async ({ client }) => {
    // Write your test here
    const response = await client.get('/Permissions/1')
    response.assertStatus(200)
    response.assertBodyContains(
      {
        "id": 1,
        "url": "/Libraries",
        "method": "GET",
        "created_at": "2022-09-16T17:37:14.000-05:00",
        "updated_at": "2022-10-28T13:16:53.000-05:00"
      }
    )
  })
  test('list Permissions', async ({ client }) => {
    // Write your test here
    const response = await client.get('/Permissions')
    response.assertStatus(200)
    response.assertBodyContains([
      {
        "id": 1,
        "url": "/Libraries",
        "method": "GET",
        "created_at": "2022-09-16T17:37:14.000-05:00",
        "updated_at": "2022-10-28T13:16:53.000-05:00"
      },
      {
        "id": 2,
        "url": "/Users",
        "method": "GET",
        "created_at": "2022-09-16T17:37:19.000-05:00",
        "updated_at": "2022-10-28T13:17:12.000-05:00"
      },
    ])
  })
  //test create Permissions
  test('create Permissions', async ({ client }) => {
    // Write your test here
    const response = await client.post('/Permissions').form(
      {
        "url":"/Prueba",
        "method":"GET"
      }
    );
    response.assertStatus(200)
  })/*
  //test update Permissions
  test('update Permissions', async ({ client }) => {
    // Write your test here
    let last_Permissions = await Permissions.query().orderBy('id', 'desc').first()
    console.log(last_Permissions?.id)
    const response = await client.put('/Permissions/1').form(
      {
        "name":"Jose Luis",
        "email":"JoseLuis@correo.com",
        "password":"qwerty123",
        "Permissions_id":1
      }
    );
    response.assertStatus(200)
  })*/
  //test delete Permissions
  test('delete Permissions', async ({ client }) => {
    // Write your test here
    let last_Permissions = await Permission.query().orderBy('id', 'desc').first()
    const response = await client.delete('/Permissions/'+last_Permissions?.id);
    response.assertStatus(200)
  })
})