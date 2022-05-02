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
        const user = UserService.create(1, "JorgeRodriguez1998", "Jorge");
        const userInfoList = UserService.getInfo(user);
        expect(userInfoList[0]).toBe(1);
        expect(userInfoList[1]).toBe("JorgeRodriguez1998");
        expect(userInfoList[2]).toBe("Jorge");
        expect(userInfoList[3]).toBe("Sin bio");
    })

    test("3. Update username", () => {
        const user = UserService.create(1, "JorgeRodriguez1998", "Jorge");
        UserService.updateUserUsername(user, "jorgel");
        expect(user.username).toBe("jorgel");
    })

    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "JorgeRodriguez1", "Jorge");
        const user2 = UserService.create(1, "JorgeRodriguez2", "Jorge");
        const user3 = UserService.create(1, "JorgeRodriguez3", "Jorge");
        const usernames = UserService.getAllUsernames([user1, user2, user3]);
        expect(usernames).toContain("JorgeRodriguez1");
        expect(usernames).toContain("JorgeRodriguez2");
        expect(usernames).toContain("JorgeRodriguez3");
    })


})


