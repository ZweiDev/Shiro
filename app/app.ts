import express from 'express';
import ShiroResolver from "./lib/resolver/ShiroResolver";
import Shiro from "./model/shiro/Shiro";
import ShiroCreator from "./lib/creator/ShiroCreator";

const server: express.Application = express();

const shiroResolver: ShiroResolver = new ShiroResolver();
const shiroCreator: ShiroCreator = new ShiroCreator();

// Define Port
const PORT = process.env.PORT || '8175';

server.get("/shiro/tier.shiro", async function (req, res, next) {
    let lat     = req.query['lat'];
    let lon     = req.query['lon'];
    let radius  = req.query['radius'];

    if (radius == undefined) radius = 10000;

    let data = await shiroResolver.getTIERData(lat, lon, radius);

    if (data == null) {
        res.send("Request failed.");
    } else {
        let finishedData: Shiro = shiroCreator.createShiroOfTIER(data);

        if (finishedData == null) {
            res.send("Shiro parsing failed.");
        } else {
            res.send(finishedData);
        }
    }
});

server.get("/shiro/callabike.shiro", async function (req, res, next) {
    let lat     = req.query['lat'];
    let lon     = req.query['lon'];
    let radius  = req.query['radius'];

    if (radius == undefined) radius = 10000;

    let data = await shiroResolver.getCallABikeData(lat, lon, radius);

    if (data == null) {
        res.send("Request failed.");
    } else {
        let finishedData: Shiro = shiroCreator.createShiroOfCallABike(data);

        if (finishedData == null) {
            res.send("Shiro parsing failed.");
        } else {
            res.send(finishedData);
        }
    }
});

server.get("/shiro/flinkster.shiro", async function (req, res, next) {
    let lat     = req.query['lat'];
    let lon     = req.query['lon'];
    let radius  = req.query['radius'];

    if (radius == undefined) radius = 10000;

    let data = await shiroResolver.getFlinksterData(lat, lon, radius);

    if (data == null) {
        res.send("Request failed.");
    } else {
        let finishedData: Shiro = shiroCreator.createShiroOfFlinkster(data);

        if (finishedData == null) {
            res.send("Shiro parsing failed.");
        } else {
            res.send(finishedData);
        }
    }
});

server.get("/shiro/circ.shiro", async function (req, res, next) {
    let lat     = req.query['lat'];
    let lon     = req.query['lon'];
    let radius  = req.query['radius'];

    if (radius == undefined) radius = 10000;

    let data = await shiroResolver.getCircData(lat, lon, radius);

    if (data == null) {
        res.send("Request failed.");
    } else {
        let finishedData: Shiro = shiroCreator.createShiroOfCirc(data);

        if (finishedData == null) {
            res.send("Shiro parsing failed.");
        } else {
            res.send(finishedData);
        }
    }
});

server.listen(PORT, function() {
    console.log('Shiro listening on port ' + PORT.toString());
});
