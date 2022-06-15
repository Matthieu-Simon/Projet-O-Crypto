const levelDataMapper = require('../dataMappers/levelDataMapper');

module.exports = {
    async getLevel(request, response) {
        const chooseLevelName = request.body;
        const getLevel = await levelDataMapper.getLevel(chooseLevelName);
        console.log(getLevel);
        return response.json(getLevel);
    },
};
