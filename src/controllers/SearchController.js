const Dev = require('../models/Dev');
const parseStringAsArray = require("../util/parseStringAsArray");

module.exports = {
    async index(request , response) {
        const {techs, latitude, longitude} = request.query;
        console.log("Request Query : ");
        console.log(request.query);
        const techsArray = parseStringAsArray(techs);

        console.log("Techs Array:");
        console.log(techsArray);
        const devs = await Dev.find({
            techs: {
                $in: techsArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [latitude, longitude]
                    },
                    $maxDistance: 10000, // Value in Kilometers
                }
            }
        });

        console.log("Devs Response: "+ devs);
        return response.json({ devs })
    }
};