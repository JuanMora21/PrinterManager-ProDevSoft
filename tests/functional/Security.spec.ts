/*import { test } from '@japa/runner'
//import user
import User from 'App/Models/User'

// user template
const test_user = {
  username: 'test_user',
  email: 'test@yopmail.com',
  password: 'password'
}

//test de security
test.group('Security', () => {
    test('login', async ({ client }) => {
        // Write your test here
        const response = await client.post('/login').send()
        response.assertStatus(200)
        response.assertBodyContains({
            "message": "Login successful",

        })
    })
    test('logout', async ({ client }) => {
        // Write your test here
        const response = await client.get('/logout')
        response.assertStatus(200)
        response.assertBodyContains({
            "message": "Logout successful",
        
        })
    })
    test('register', async ({ client }) => {
        // Write your test here
        const response = await client.post('/register').send()
        response.assertStatus(200)
        response.assertBodyContains({
            "message": "User created successfully",

        })
    })
    test('forgot password', async ({ client }) => {
        // Write your test here
        const response = await client.post('/forgot-password').send()
        response.assertStatus(200)
        response.assertBodyContains({
            "message": "Password reset link sent to your email",

        })
    })
    test('reset password', async ({ client }) => {
        // Write your test here
        const response = await client.post('/reset-password').send()
        response.assertStatus(200)
        response.assertBodyContains({
            "message": "Password reset successful",

        })
    })
    test('refresh token', async ({ client }) => {
        // Write your test here
        const response = await client.post('/refresh-token').send()
        response.assertStatus(200)
        response.assertBodyContains({
            "message": "Token refreshed successfully",

        })
    })
})
*/