const UserService = require('./../../app/services/UserService')


describe("Test for UserService", () => {

    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "JorgeRodrigez1998", "Jorge");
        expect(user.username).toBe("JorgeRodriguez1998");
        expect(user.name).toBe("Jorge");
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined();
    })
})