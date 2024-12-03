import { Elysia } from 'elysia'

const app = new Elysia().get('/', () => 'Assets Service is running').listen(3007)

console.log(`📦 Assets Service is running at ${app.server?.hostname}:${app.server?.port}`)
