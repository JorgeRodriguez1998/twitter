const User = require('./../../app/models/User');

describe('Unit Tests for User class', () => {

    test('Create an User object', () => {
        //Calling the code that we are going to use in the app
        const user = new User(1, "JorgeRodriguez1998", "Jorge", "Bio", "dateCreated",
            "lastUpdated");

        //Here you validate the output.
        //This is a comparison that will set the value on the left
        //equal to the value on the right (expected value)
        expect(user.id).toBe(1);
        expect(user.username).toBe("JorgeRodriguez1998");
        expect(user.name).toBe("Jorge");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).toBe("dateCreated");
        expect(user.lastUpdated).toBe("lastUpdated");
    })
})