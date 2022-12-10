import { test } from '@japa/runner'
import PermissionsRole from 'App/Models/PermissionsRole'

test.group('PermissionsRolesController', () => {
  test('show PermissionsRoles', async ({ client }) => {
    // Write your test here
    const response = await client.get('/PermissionsRoles/1')
    response.assertStatus(200)
    response.assertBodyContains(
      {
        "id": 1,
        "role_id": 1,
        "permission_id": 1,
        "created_at": "2022-09-16T17:37:40.000-05:00",
        "updated_at": "2022-09-16T17:37:40.000-05:00"
      }
    )
  })
  test('list PermissionsRoles', async ({ client }) => {
    // Write your test here
    const response = await client.get('/PermissionsRoles')
    response.assertStatus(200)
    response.assertBodyContains([
      {
        "id": 1,
        "role_id": 1,
        "permission_id": 1,
        "created_at": "2022-09-16T17:37:40.000-05:00",
        "updated_at": "2022-09-16T17:37:40.000-05:00"
      },
      {
        "id": 2,
        "role_id": 1,
        "permission_id": 2,
        "created_at": "2022-09-16T17:37:43.000-05:00",
        "updated_at": "2022-09-16T17:37:43.000-05:00"
      },
    ])
  })
  //test create PermissionsRoles
  test('create PermissionsRoles', async ({ client }) => {
    // Write your test here
    const response = await client.post('/PermissionsRoles').form(
      {
        "role_id":2,
        "permission_id":1
      }
    );
    response.assertStatus(200)
  })/*
  //test update PermissionsRoles
  test('update PermissionsRoles', async ({ client }) => {
    // Write your test here
    let last_PermissionsRoles = await PermissionsRoles.query().orderBy('id', 'desc').first()
    console.log(last_PermissionsRoles?.id)
    const response = await client.put('/PermissionsRoles/1').form(
      {
        "name":"Jose Luis",
        "email":"JoseLuis@correo.com",
        "password":"qwerty123",
        "PermissionsRoles_id":1
      }
    );
    response.assertStatus(200)
  })*/
  //test delete PermissionsRoles
  test('delete PermissionsRoles', async ({ client }) => {
    // Write your test here
    let last_PermissionsRoles = await PermissionsRole.query().orderBy('id', 'desc').first()
    const response = await client.delete('/PermissionsRoles/'+last_PermissionsRoles?.id);
    response.assertStatus(200)
  })
})