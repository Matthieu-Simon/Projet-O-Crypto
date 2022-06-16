const userDatamapper = require('../dataMappers/userDataMapper');

module.exports = {
    async insertNewUser(request, response) {
        const newUser = request.body;
        const addUser = await userDatamapper.createUser(newUser);
        return response.json(addUser);
    },

    async loginUser(request, response) {
        const user = request.body;
        const userLogin = await userDatamapper.loginUser(user);
        return response.json(userLogin);
    },

    async deleteUser(request, response) {
        const user = request.body;
        const userDeleting = await userDatamapper.deleteUser(user);
        return response.json(userDeleting);
    },

    async updateUser(request, response) {
        const userModification = request.body;
        const userUpdating = await userDatamapper.modifyUser(userModification);
        return response.json(userUpdating);
    },

};
