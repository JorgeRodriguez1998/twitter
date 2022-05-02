const User = require('../../app/models/User');
const UserView = require('../../app/views/UserView');

describe("Tests for UserView", () => {

    test("Return and eror object when try to create a new user with an null payload", () => {
        const payload = null;
        const result = UserView.createUser(payload);
        // https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/payload no existe/);
    })
})
