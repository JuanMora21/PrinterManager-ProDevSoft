import { test } from '@japa/runner'
import Role from 'App/Models/Role'

test.group('RoleController', () => {
  test('show Role', async ({ client }) => {
    // Write your test here
    const response = await client.get('/Roles/1')
    response.assertStatus(200)
    response.assertBodyContains(
      {
        "id": 1,
        "name": "Admin",
        "created_at": "2022-09-16T17:36:46.000-05:00",
        "updated_at": "2022-09-16T17:36:46.000-05:00"
      }
    )
  })
  test('list Roles', async ({ client }) => {
    // Write your test here
    const response = await client.get('/Roles')
    response.assertStatus(200)
    response.assertBodyContains([
      {
        "id": 1,
        "name": "Admin",
        "created_at": "2022-09-16T17:36:46.000-05:00",
        "updated_at": "2022-09-16T17:36:46.000-05:00"
      },
      {
        "id": 2,
        "name": "User",
        "created_at": "2022-09-16T17:36:53.000-05:00",
        "updated_at": "2022-09-16T17:36:53.000-05:00"
      },
    ])
  })
  //test create Role
  test('create Role', async ({ client }) => {
    // Write your test here
    const response = await client.post('/Roles').form(
      {
        "name":"Prueba"
      }
    );
    response.assertStatus(200)
  })/*
  //test update Role
  test('update Role', async ({ client }) => {
    // Write your test here
    let last_Role = await Role.query().orderBy('id', 'desc').first()
    console.log(last_Role?.id)
    const response = await client.put('/Roles/1').form(
      {
        "name":"Jose Luis",
        "email":"JoseLuis@correo.com",
        "password":"qwerty123",
        "role_id":1
      }
    );
    response.assertStatus(200)
  })*/
  //test delete Role
  test('delete Role', async ({ client }) => {
    // Write your test here
    let last_Role = await Role.query().orderBy('id', 'desc').first()
    const response = await client.delete('/Roles/'+last_Role?.id);
    response.assertStatus(200)
  })
})