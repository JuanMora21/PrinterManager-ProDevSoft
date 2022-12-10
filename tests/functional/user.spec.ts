import { test } from '@japa/runner'
import User from 'App/Models/User'

test.group('UserController', () => {
  test('show user', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    const response = await client.get('/Users/1').bearerToken(login.response._body.token.token)
    response.assertStatus(200)
    response.assertBodyContains([
      {
        "id": 1,
        "name": "Juan",
        "email": "Car@correo.com",
        "password": "$argon2id$v=19$t=3,m=4096,p=1$skNl6xvcvMXWoHdA9SMrxw$BTPAFSI+zkgg7/KChZ+dfPmI06lFxO+QCeQmxEdb4qI",
        "role_id": 1,
        "created_at": "2022-09-16T17:38:08.000-05:00",
        "updated_at": "2022-10-28T00:16:14.000-05:00",
        "role": {
            "id": 1,
            "name": "Admin",
            "created_at": "2022-09-16T17:36:46.000-05:00",
            "updated_at": "2022-09-16T17:36:46.000-05:00"
        },
        "profile": {
            "id": 1,
            "user_id": 1,
            "phone": "12345678",
            "facebook_url": "www.facebook.com",
            "instagram_url": "www.instagram.com",
            "created_at": "2022-09-16T17:38:29.000-05:00",
            "updated_at": "2022-09-16T17:38:29.000-05:00"
        }
      }
    ])
  })
  test('list Users', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    const response = await client.get('/Users').bearerToken(login.response._body.token.token)
    response.assertStatus(200)
    response.assertBodyContains([
      {
        "id": 1,
        "name": "Juan",
        "email": "Car@correo.com",
        "password": "$argon2id$v=19$t=3,m=4096,p=1$skNl6xvcvMXWoHdA9SMrxw$BTPAFSI+zkgg7/KChZ+dfPmI06lFxO+QCeQmxEdb4qI",
        "role_id": 1,
        "created_at": "2022-09-16T17:38:08.000-05:00",
        "updated_at": "2022-10-28T00:16:14.000-05:00",
        "role": {
            "id": 1,
            "name": "Admin",
            "created_at": "2022-09-16T17:36:46.000-05:00",
            "updated_at": "2022-09-16T17:36:46.000-05:00"
        },
        "profile": {
            "id": 1,
            "user_id": 1,
            "phone": "12345678",
            "facebook_url": "www.facebook.com",
            "instagram_url": "www.instagram.com",
            "created_at": "2022-09-16T17:38:29.000-05:00",
            "updated_at": "2022-09-16T17:38:29.000-05:00"
        }
      },
      {
        "id": 2,
        "name": "Lili",
        "email": "Car@correo.com",
        "password": "$argon2id$v=19$t=3,m=4096,p=1$5XoAdyXn1NO7V424MILvrg$arl1WqXhwslOLFNRgaruM2ufzqNkIloUBOs5VvWPaMc",
        "role_id": 2,
        "created_at": "2022-09-16T17:38:16.000-05:00",
        "updated_at": "2022-09-16T17:38:16.000-05:00",
        "role": {
            "id": 2,
            "name": "User",
            "created_at": "2022-09-16T17:36:53.000-05:00",
            "updated_at": "2022-09-16T17:36:53.000-05:00"
        },
        "profile": null
      },
    ])
  })
  //test create user
  test('create user', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    const response = await client.post('/Users').form(
      {
        "name": "Juan",
        "email": "asdasd@asd.com",
        "password": "12345678",
        "role_id": 1,
      }
    ).bearerToken(login.response._body.token.token)
    response.assertStatus(200)
  })/*
  //test update user
  test('update user', async ({ client }) => {
    // Write your test here
    let last_user = await User.query().orderBy('id', 'desc').first()
    console.log(last_user?.id)
    const response = await client.put('/Users/1').form(
      {
        "name":"Jose Luis",
        "email":"JoseLuis@correo.com",
        "password":"qwerty123",
        "role_id":1
      }
    );
    response.assertStatus(200)
  })*/
  //test delete user
  test('delete user', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    let last_user = await User.query().orderBy('id', 'desc').first()
    const response = await client.delete('/Users/'+last_user?.id).bearerToken(login.response._body.token.token)
    response.assertStatus(200)
  })
})