import { test } from '@japa/runner'
import Category from '../../app/Models/Category';

test.group('CategoriesController', () => {
  test('show Categories', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    const response = await client.get('/Categories/2').bearerToken(login.response._body.token.token)
    response.assertStatus(200)
    response.assertBodyContains([
      {
        "id": 2,
        "name": "Action",
        "library_id": 3,
        "created_at": "2022-09-16T17:51:53.000-05:00",
        "updated_at": "2022-09-16T17:51:53.000-05:00"
      }
    ])
  })
  test('list Categories', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    const response = await client.get('/Categories').bearerToken(login.response._body.token.token)
    response.assertStatus(200)
    response.assertBodyContains([
      {
        "id": 1,
        "name": "Action",
        "library_id": 1,
        "created_at": "2022-09-16T17:51:49.000-05:00",
        "updated_at": "2022-09-16T17:51:49.000-05:00"
      },
      {
        "id": 2,
        "name": "Action",
        "library_id": 3,
        "created_at": "2022-09-16T17:51:53.000-05:00",
        "updated_at": "2022-09-16T17:51:53.000-05:00"
      },
    ])
  })
  //test create Categories
  test('create Categories', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    const response = await client.post('/Categories').form(
      {
        "name":"Prueba",
        "library_id":2
      }
    ).bearerToken(login.response._body.token.token)
    response.assertStatus(200)
  })/*
  //test update Categories
  test('update Categories', async ({ client }) => {
    // Write your test here
    let last_Categories = await Categories.query().orderBy('id', 'desc').first()
    console.log(last_Categories?.id)
    const response = await client.put('/Categories/1').form(
      {
        "name":"Jose Luis",
        "email":"JoseLuis@correo.com",
        "password":"qwerty123",
        "Categories_id":1
      }
    );
    response.assertStatus(200)
  })*/
  //test delete Categories
  test('delete Categories', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    let last_Categories = await Category.query().orderBy('id', 'desc').first()
    const response = await client.delete('/Categories/'+last_Categories?.id).bearerToken(login.response._body.token.token)
    response.assertStatus(200)
  })
})