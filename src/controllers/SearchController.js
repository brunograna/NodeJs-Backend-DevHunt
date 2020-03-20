const Dev = require('../models/Dev');
const parseStringAsArray = require("../util/parseStringAsArray");

module.exports = {
    async index(request , response) {
        const {techs, latitude, longitude} = request.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000, // Value in Kilometers
                }
            }
        });

        console.log(techsArray);
        return response.json({ devs })
    }
};