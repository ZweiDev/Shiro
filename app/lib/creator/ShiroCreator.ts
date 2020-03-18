import {TIERData} from "../../model/tier/TIERData";
import Shiro, {Details, Location, Vehicle, VehicleType} from "../../model/shiro/Shiro";
import CallABikeData from "../../model/callabike/CallABikeData";
import {CircData} from "../../model/circ/CircData";

export default class ShiroCreator {

    public createShiroOfTIER(tier: TIERData): Shiro {
        let vehicles: Vehicle[] = [];

        tier.data.forEach(function (scooter) {
            let location: Location = {
                latitude: scooter.lat,
                longitude: scooter.lng
            };

            let details: Details = {
                operator: 'TIER Mobility',
                id: scooter.id,
                juice: scooter.batteryLevel,
                type: VehicleType.ESCOOTER
            };

            vehicles.push({
                location: location,
                details: details
            });
        });

        return {
            serverResponseTime: Date.now(),
            vehicles: vehicles
        }
    }

    public createShiroOfCallABike(callABike: CallABikeData): Shiro {
        let vehicles: Vehicle[] = [];

        callABike.items.forEach(function (bike) {
            let location: Location = {
                latitude: bike.position.coordinates[1],
                longitude: bike.position.coordinates[0]
            };

            let details: Details = {
                operator: 'DB Flinkster Call-a-Bike',
                id: bike.area.href.replace('http://api.deutschebahn.com/v1/areas/', ''),
                juice: null,
                type: VehicleType.BIKE
            };

            vehicles.push({
                location: location,
                details: details
            });
        });

        return {
            serverResponseTime: Date.now(),
            vehicles: vehicles
        }
    }

    public createShiroOfFlinkster(callABike: CallABikeData): Shiro {
        let vehicles: Vehicle[] = [];

        callABike.items.forEach(function (bike) {
            let location: Location = {
                latitude: bike.position.coordinates[1],
                longitude: bike.position.coordinates[0]
            };

            let details: Details = {
                operator: 'DB Flinkster Cars',
                id: bike.area.href.replace('http://api.deutschebahn.com/v1/areas/', ''),
                juice: null,
                type: VehicleType.CAR
            };

            vehicles.push({
                location: location,
                details: details
            });
        });

        return {
            serverResponseTime: Date.now(),
            vehicles: vehicles
        }
    }

    public createShiroOfCirc(circ: CircData): Shiro {
        let vehicles: Vehicle[] = [];

        circ.Data.Scooters.forEach(function (scooter) {
            let location: Location = {
                latitude: scooter.location.latitude,
                longitude: scooter.location.longitude
            };

            let details: Details = {
                operator: 'Circ Scooter',
                id: scooter.idScooter.toString(),
                juice: scooter.PowerPercentInt,
                type: VehicleType.ESCOOTER
            };

            vehicles.push({
                location: location,
                details: details
            });
        });

        return {
            serverResponseTime: Date.now(),
            vehicles: vehicles
        }
    }
}
