const client = require('../services/database');

module.exports = {
    async createUser (newUser) {
        /*check if the new user is already registered*/
        const isUniqueChecking = await client.query(`SELECT * FROM "user" WHERE email= ${newUser.email}`);
        if (isUniqueChecking.rows.lenght !== 0) {
            return 'This user has already registered'
        } else {
            /*Insert into database new user*/
            const result = await client.query(`
            INSERT INTO "user" (pseudo, email, password)
            VALUES ('${newUser.name}', '${newUser.email}', '${newUser.password}');
            `);
    
            return console.log('User creation successfull') + result;
        };
    },

    /*Get profile user informations or allow connection to the app*/
    async loginUser (user) {
        /*check if the user is already registered*/
        const isUniqueChecking = await client.query(`SELECT * FROM "user" WHERE email= ${newUser.email}`);
        if (isUniqueChecking.rows.lenght == 0) {
            return 'This user is not registered'
        } else {
            const result = await client.query(`
                SELECT * FROM "user" WHERE email= '${user.email}' AND password='${user.password}';
            `);
            return console.log('User connection successfull') + result;
        };
    },

    async deleteUser (user) {
        const result = await client.query(`
        DELETE FROM "user"
        WHERE email='${user.email}';
        `)
        return console.log('User successfully deleted') + result;
    },

    /*Modify one value in table user*/
    async modifyUser (userModification) {
        const parsedUser = JSON.parse(userModification);

        const result = await client.query(`
        UPDATE "user"
        SET "${Object.keys(parsedUser)[0]}"='${Object.value(parsedUser)[0]}'
        WHERE email='${userModification.email}';
        `);

        return console.log('User successfully modified') + result;
    },
};