const client = require('../services/database');

module.exports = {
    async createUser(newUser) {
        /* check if the new user is already registered */
        const isUniqueChecking = await client.query(`SELECT * FROM "user" WHERE email= ${newUser.email}`);
        if (isUniqueChecking.rows.lenght !== 0) {
            return 'This user has already registered';
        }
        /* Insert into database new user */
        const result = await client.query(`
            INSERT INTO "user" (pseudo, email, password)
            VALUES ('${newUser.name}', '${newUser.email}', '${newUser.password}');
            `);

        return console.log(`User creation successfull${result}`);
    },

    async loginUser(user) {
        /* check if the user is already registered */
        const isUniqueChecking = await client.query(`SELECT * FROM "user" WHERE email= ${newUser.email}`);
        if (isUniqueChecking.rows.lenght !== 0) {
            return 'This user is not registered';
        }
        const result = await client.query(`
                SELECT * FROM "user" WHERE email= '${user.email}' AND password='${user.password}';
            `);
        return console.log(`User connection successfull${result}`);
    },

    async modifyUser(userModification) {

    },
};
