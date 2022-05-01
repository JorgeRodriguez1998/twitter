const UserService = require('./../../app/services/UserService')


describe("Test for UserService", () => {

    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "JorgeRodriguez1998", "Jorge");
        expect(user.username).toBe("JorgeRodriguez1998");
        expect(user.name).toBe("Jorge");
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined();
    })

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "JOrgeRodriguez1998", "Jorge");
        const userInfoList = UserService.getInfo(user);
        expect(userInfoList[0]).toBe(1);
        expect(userInfoList[1]).toBe("JorgeRodriguez1998");
        expect(userInfoList[2]).toBe("Jorge");
        expect(userInfoList[3]).toBe("Sin bio");
    })
})


