const client = require('../services/database');

module.exports = {
    async createUser(newUser) {
        try {
            /* check if the new user is already registered */
            const isUniqueChecking = await client.query(`SELECT * FROM "user" WHERE email= '${newUser.email}';`);
            if (isUniqueChecking.rows.length !== 0) {
                return 'This user has already registered';
            }
            /* Insert into database new user */
                await client.query(`
                    INSERT INTO "user" (pseudo, email, password)
                    VALUES ('${newUser.pseudo}', '${newUser.email}', '${newUser.password}');
                `);
                const result = await client.query(`SELECT * FROM "user" WHERE email= '${newUser.email}';`);

    
            return result.rows[0];

        } catch (error){
            return error;
        };
    },

    /* Get profile user informations or allow connection to the app */
    async loginUser(user) {
        try {
            /* check if the user is already registered */
            const isUniqueChecking = await client.query(`SELECT * FROM "user" WHERE email= '${user.email}';`);
            if (isUniqueChecking.rows.length === 0) {
                return 'This user is not registered';
            } else {
                const result = await client.query(`
                        SELECT * FROM "user" WHERE email= '${user.email}' AND password='${user.password}';
                    `);
                    console.log('User connection successfull');
                    console.log(result.rows);
    
                return result.rows[0];
            }
        } catch (error) {
            return error;
        };
    },

    async deleteUser(user) {
        try {
            await client.query(`
            DELETE FROM "user"
            WHERE email='${user.email}';
            `);
            return 'User successfully deleted';
        } catch (error) {
            return error;
        };
    },

    /* Modify one value in table user */
    async modifyUser(userModification) {
        try {
            await client.query(`
                UPDATE "user"
                SET "${Object.keys(userModification)[0]}"='${Object.values(userModification)[0]}'
                WHERE email='${userModification.email}';
            `);
        return 'User successfully modified' ;
            
        } catch (error) {
            return error;
        }        
    },
};
