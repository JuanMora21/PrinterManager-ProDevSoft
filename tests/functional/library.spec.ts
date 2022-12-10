import { test } from '@japa/runner'
import Library from '../../app/Models/Library';

test.group('LibrariesController', () => {
  test('show Libraries', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    const response = await client.get('/Libraries/1').bearerToken(login.response._body.token.token)
    response.assertStatus(200)
    response.assertBodyContains([
      {
        "id": 1,
        "user_id": 1,
        "created_at": "2022-09-16T17:51:37.000-05:00",
        "updated_at": "2022-09-16T17:51:37.000-05:00"
      }
    ])
  })
  test('list Libraries', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    const response = await client.get('/Libraries').bearerToken(login.response._body.token.token)
    response.assertStatus(200)
    response.assertBodyContains([
      {
        "id": 1,
        "user_id": 1,
        "created_at": "2022-09-16T17:51:37.000-05:00",
        "updated_at": "2022-09-16T17:51:37.000-05:00"
      },
      {
        "id": 2,
        "user_id": 2,
        "created_at": "2022-09-16T17:51:41.000-05:00",
        "updated_at": "2022-09-16T17:51:41.000-05:00"
      },
    ])
  })
  //test create Libraries
  test('create Libraries', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    const response = await client.post('/Libraries').form(
      {
        "user_id":1
      }
    ).bearerToken(login.response._body.token.token)
    response.assertStatus(200)
  })/*
  //test update Libraries
  test('update Libraries', async ({ client }) => {
    // Write your test here
    let last_Libraries = await Libraries.query().orderBy('id', 'desc').first()
    console.log(last_Libraries?.id)
    const response = await client.put('/Libraries/1').form(
      {
        "name":"Jose Luis",
        "email":"JoseLuis@correo.com",
        "password":"qwerty123",
        "Libraries_id":1
      }
    );
    response.assertStatus(200)
  })*/
  //test delete Libraries
  test('delete Libraries', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    let last_Libraries = await Library.query().orderBy('id', 'desc').first()
    const response = await client.delete('/Libraries/'+last_Libraries?.id).bearerToken(login.response._body.token.token)
    response.assertStatus(200)
  })
})