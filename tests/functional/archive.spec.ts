import { test } from '@japa/runner'
import Archive from '../../app/Models/Archive';

test.group('ArchivesController', () => {
  test('show Archives', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    const response = await client.get('/Archives/2').bearerToken(login.response._body.token.token)
    response.assertStatus(200)
    response.assertBodyContains([
      {
        "id": 2,
        "name": "Robot1",
        "format": ".stl",
        "visibility": "Public",
        "category_id": 2,
        "created_at": "2022-09-16T17:52:18.000-05:00",
        "updated_at": "2022-09-16T17:52:18.000-05:00"
      }
    ])
  })
  test('list Archives', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    const response = await client.get('/Archives').bearerToken(login.response._body.token.token)
    response.assertStatus(200)
    response.assertBodyContains([
      {
        "id": 2,
        "name": "Robot1",
        "format": ".stl",
        "visibility": "Public",
        "category_id": 2,
        "created_at": "2022-09-16T17:52:18.000-05:00",
        "updated_at": "2022-09-16T17:52:18.000-05:00"
      },
      {
        "id": 3,
        "name": "Human",
        "format": ".stl",
        "visibility": "Public",
        "category_id": 1,
        "created_at": "2022-09-16T17:52:33.000-05:00",
        "updated_at": "2022-09-16T17:52:33.000-05:00"
      }
    ])
  })
  //test create Archives
  test('create Archives', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    const response = await client.post('/Archives').form(
      {
        "name":"Prueba",
        "format":".stl",
        "visibility":"Public",
        "category_id":2
      }
    ).bearerToken(login.response._body.token.token)
    response.assertStatus(200)
  })/*
  //test update Archives
  test('update Archives', async ({ client }) => {
    // Write your test here
    let last_Archives = await Archives.query().orderBy('id', 'desc').first()
    console.log(last_Archives?.id)
    const response = await client.put('/Archives/1').form(
      {
        "name":"Jose Luis",
        "email":"JoseLuis@correo.com",
        "password":"qwerty123",
        "Archives_id":1
      }
    );
    response.assertStatus(200)
  })*/
  //test delete Archives
  test('delete Archives', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    let last_Archives = await Archive.query().orderBy('id', 'desc').first()
    const response = await client.delete('/Archives/'+last_Archives?.id).bearerToken(login.response._body.token.token)
    response.assertStatus(200)
  })
})