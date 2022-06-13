const userDatamapper = require('../dataMappers/userDataMapper');

module.exports = {
    async insertNewUser(request, response) {
        const newUser = request.body;
        const addUser = await userDatamapper.insertNewUser(newUser);
        return response.json(addUser);
    },

    async loginUser(request, response) {
        const user = request.body;
        const userLogin = await userDatamapper.loginUser(user);
        return response.json(userLogin);
    },

};
