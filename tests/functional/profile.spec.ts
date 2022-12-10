import { test } from '@japa/runner'
import Profile from '../../app/Models/Profile';
test.group('ProfileController', () => {
  test('show Profile', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    const response = await client.get('/Profiles/1').bearerToken(login.response._body.token.token)
    response.assertStatus(200)
    response.assertBodyContains([
        {
            "id": 1,
            "user_id": 1,
            "phone": "12345678",
            "facebook_url": "www.facebook.com",
            "instagram_url": "www.instagram.com",
            "created_at": "2022-09-16T17:38:29.000-05:00",
            "updated_at": "2022-09-16T17:38:29.000-05:00"
        }
    ])
  })
  test('list Profiles', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    const response = await client.get('/Profiles').bearerToken(login.response._body.token.token)
    response.assertStatus(200)
    response.assertBodyContains([
      {
        "id": 1,
        "user_id": 1,
        "phone": "12345678",
        "facebook_url": "www.facebook.com",
        "instagram_url": "www.instagram.com",
        "created_at": "2022-09-16T17:38:29.000-05:00",
        "updated_at": "2022-09-16T17:38:29.000-05:00"
      },
      {
        "id": 2,
        "user_id": 1,
        "phone": "12345678",
        "facebook_url": "www.facebook.com",
        "instagram_url": "www.instagram.com",
        "created_at": "2022-09-16T17:38:31.000-05:00",
        "updated_at": "2022-10-28T12:57:23.000-05:00"
      }
    ])
  })
  //test create Profile
  test('create Profile', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    const response = await client.post('/Profiles').form(
        {
            "phone":"12345678",
            "facebook_url":"www.facebook.com",
            "instagram_url":"www.instagram.com",
            "user_id":41
        }
    ).bearerToken(login.response._body.token.token)
    response.assertStatus(200)
  })/*
  //test update Profile
  test('update Profile', async ({ client }) => {
    // Write your test here
    let last_profile = await Profile.query().orderBy('id', 'desc').first()
    console.log(last_profile?.id)
    const response = await client.put('/Profiles/4').form(
        {
            "phone":"12345678",
            "facebook_url":"www.facebook.com",
            "instagram_url":"www.instagram.com",
            "user_id":2
        }
    );
    response.assertStatus(200)
  })*/
  //test delete Profile
  test('delete Profile', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    let last_profile = await Profile.query().orderBy('id', 'desc').first()
    const response = await client.delete('/Profiles/'+last_profile?.id).bearerToken(login.response._body.token.token)
    response.assertStatus(200)
  })
})
