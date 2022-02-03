import { Echo } from "../src/echo"

let echo: Echo

beforeAll(() => {
    echo = new Echo()
})

describe('It should echo class', () => {
    it('Should test receive the echo back from the echo method', () => {
        expect(echo.echo('Hello World')).toBe('Hello Who?')
    })
})