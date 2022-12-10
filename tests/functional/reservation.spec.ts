import { test } from '@japa/runner'
import Reservation from '../../app/Models/Reservation';

test.group('ReservationsController', () => {
  test('show Reservations', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    const response = await client.get('/Reservations/2').bearerToken(login.response._body.token.token)
    response.assertStatus(200)
    response.assertBodyContains([
      {
        "id": 2,
        "user_id": 1,
        "printer_id": 1,
        "name": "Rev1",
        "start_date": "2021-09-20T05:00:00.000Z",
        "end_date": "2021-09-20T05:00:00.000Z",
        "start_time": "2038-01-19T08:14:08.000Z",
        "end_time": "2038-01-19T08:14:08.000Z",
        "created_at": "2022-09-16T17:38:58.000-05:00",
        "updated_at": "2022-09-16T17:38:58.000-05:00",
        "user": {
            "id": 1,
            "name": "Juan",
            "email": "Car@correo.com",
            "password": "$argon2id$v=19$t=3,m=4096,p=1$skNl6xvcvMXWoHdA9SMrxw$BTPAFSI+zkgg7/KChZ+dfPmI06lFxO+QCeQmxEdb4qI",
            "role_id": 1,
            "created_at": "2022-09-16T17:38:08.000-05:00",
            "updated_at": "2022-10-28T00:16:14.000-05:00"
        },
        "printer": {
            "id": 1,
            "name": "3dfra",
            "model": "Prusa2",
            "type": "Resin",
            "beed_height": 20,
            "beed_width": 40,
            "created_at": "2022-09-16T17:38:43.000-05:00",
            "updated_at": "2022-09-16T17:38:43.000-05:00"
        }
      }
    ])
  })
  test('list Reservations', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    const response = await client.get('/Reservations').bearerToken(login.response._body.token.token)
    response.assertStatus(200)
    response.assertBodyContains([
      {
        "id": 2,
        "user_id": 1,
        "printer_id": 1,
        "name": "Rev1",
        "start_date": "2021-09-20T05:00:00.000Z",
        "end_date": "2021-09-20T05:00:00.000Z",
        "start_time": "2038-01-19T08:14:08.000Z",
        "end_time": "2038-01-19T08:14:08.000Z",
        "created_at": "2022-09-16T17:38:58.000-05:00",
        "updated_at": "2022-09-16T17:38:58.000-05:00",
        "user": {
            "id": 1,
            "name": "Juan",
            "email": "Car@correo.com",
            "password": "$argon2id$v=19$t=3,m=4096,p=1$skNl6xvcvMXWoHdA9SMrxw$BTPAFSI+zkgg7/KChZ+dfPmI06lFxO+QCeQmxEdb4qI",
            "role_id": 1,
            "created_at": "2022-09-16T17:38:08.000-05:00",
            "updated_at": "2022-10-28T00:16:14.000-05:00"
        },
        "printer": {
            "id": 1,
            "name": "3dfra",
            "model": "Prusa2",
            "type": "Resin",
            "beed_height": 20,
            "beed_width": 40,
            "created_at": "2022-09-16T17:38:43.000-05:00",
            "updated_at": "2022-09-16T17:38:43.000-05:00"
        }
      }
    ])
  })
  //test create Reservations
  test('create Reservations', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    const response = await client.post('/Reservations').form(
      {
        "name":"Prueba",
        "start_date":"2021-09-20",
        "start_time":"2038-01-19 03:14:07.999999",
        "end_date":"2021-09-20",
        "end_time":"2038-01-19 03:14:07.999999",
        "user_id":1,
        "printer_id":1
      }
    ).bearerToken(login.response._body.token.token)
    response.assertStatus(200)
  })/*
  //test update Reservations
  test('update Reservations', async ({ client }) => {
    // Write your test here
    let last_Reservations = await Reservations.query().orderBy('id', 'desc').first()
    console.log(last_Reservations?.id)
    const response = await client.put('/Reservations/1').form(
      {
        "name":"Jose Luis",
        "email":"JoseLuis@correo.com",
        "password":"qwerty123",
        "Reservations_id":1
      }
    );
    response.assertStatus(200)
  })*/
  //test delete Reservations
  test('delete Reservations', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    let last_Reservations = await Reservation.query().orderBy('id', 'desc').first()
    const response = await client.delete('/Reservations/'+last_Reservations?.id).bearerToken(login.response._body.token.token)
    response.assertStatus(200)
  })
})