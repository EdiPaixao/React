const Dev = require('../models/Dev');
const parseStringAsArray = require('../util/parseStringAsArray');

module.exports = {
    async index(request, response){
        // busca dos devs num raio 10km
        // busca por tecnologias
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);

        //objetos dentro do find são filtros
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },                   
            },
        });

        return response.json({devs})
    }
}