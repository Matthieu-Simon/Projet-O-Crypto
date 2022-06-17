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

        if (userLogin.loggedIn == true) {
            request.session.user = userLogin.userData

            console.log(request.session.user)
            // return response.send({userData:userLogin.userData});
            return response.send({user:userLogin.userData})
        } else {
            console.log(userLogin.userData)
            return response.send({test:'test'});
        };
    },

    async deleteUser(request, response) {
        const user = request.body;
        const userDeleting = await userDatamapper.deleteUser(user);
        return response.json(userDeleting);
    },

    async updateUser (request, response) {
        const userModification = request.body;
        const userUpdating = await userDatamapper.modifyUser(userModification);
        return response.json(userUpdating);
    }
    
};