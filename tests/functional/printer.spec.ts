import { test } from '@japa/runner'
import Printer from '../../app/Models/Printer';

test.group('PrintersController', () => {
  test('show Printers', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    const response = await client.get('/Printers/2').bearerToken(login.response._body.token.token)
    response.assertStatus(200)
    response.assertBodyContains([
      {
        "id": 2,
        "name": "3dADS",
        "model": "Prusa2",
        "type": "Resin",
        "beed_height": 20,
        "beed_width": 40,
        "created_at": "2022-09-16T17:38:48.000-05:00",
        "updated_at": "2022-09-16T17:38:48.000-05:00"
      }
    ])
  })
  test('list Printers', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    const response = await client.get('/Printers').bearerToken(login.response._body.token.token)
    response.assertStatus(200)
    response.assertBodyContains([
      {
        "id": 1,
        "name": "3dfra",
        "model": "Prusa2",
        "type": "Resin",
        "beed_height": 20,
        "beed_width": 40,
        "created_at": "2022-09-16T17:38:43.000-05:00",
        "updated_at": "2022-09-16T17:38:43.000-05:00"
      },
      {
        "id": 2,
        "name": "3dADS",
        "model": "Prusa2",
        "type": "Resin",
        "beed_height": 20,
        "beed_width": 40,
        "created_at": "2022-09-16T17:38:48.000-05:00",
        "updated_at": "2022-09-16T17:38:48.000-05:00"
      },
    ])
  })
  //test create Printers
  test('create Printers', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    const response = await client.post('/Printers').form(
      {
        "name":"Prueba",
        "model":"Prueba",
        "type":"Resin",
        "beed_height":220,
        "beed_width":400,
      }
    ).bearerToken(login.response._body.token.token)
    response.assertStatus(200)
  })
/*
  //test update Printers
  test('update Printers', async ({ client }) => {
    // Write your test here
    let last_Printers = await Printers.query().orderBy('id', 'desc').first()
    console.log(last_Printers?.id)
    const response = await client.put('/Printers/1').form(
      {
        "name":"Jose Luis",
        "email":"JoseLuis@correo.com",
        "password":"qwerty123",
        "Printers_id":1
      }
    );
    response.assertStatus(200)
  })
*/
  //test delete Printers
  test('delete Printers', async ({ client }) => {
    // Write your test here
    const login = await client.post('/login').json(
      {
        "email": "m.juanmanuel.a@gmail.com",
        "password": "mora"
      }
    )
    let last_Printers = await Printer.query().orderBy('id', 'desc').first()
    const response = await client.delete('/Printers/'+last_Printers?.id).bearerToken(login.response._body.token.token)
    response.assertStatus(200)
  })
})