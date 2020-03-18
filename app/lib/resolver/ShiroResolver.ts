import axios from 'axios';
import {TIERData} from "../../model/tier/TIERData";
import CallABikeData from "../../model/callabike/CallABikeData";
import {APIKey} from "../../store/APIKey";
import {CircData} from "../../model/circ/CircData";

export default class ShiroResolver {

    getTIERData(lat: number, lon: number, radius: number): Promise<TIERData | null> {
        return axios.get(
            'https://platform.tier-services.io/vehicle',
            {
                headers: {
                    'X-Api-Key': 'bpEUTJEBTf74oGRWxaIcW7aeZMzDDODe1yBoSxi2'
                },
                params: {
                    'lat': lat,
                    'lng': lon,
                    'radius': radius
                }
            },
        ).then(res => {
            return res.data as TIERData;
        }).catch(err => {
            console.error(err);
            return null;
        })
    }

    getCallABikeData(lat: number, lon: number, radius: number): Promise<CallABikeData | null> {
        return axios.get(
            'https://api.deutschebahn.com/flinkster-api-ng/v1/bookingproposals',
            {
                headers: {
                    'Authorization': 'Bearer ' + APIKey.DB_SANDBOX
                },
                params: {
                    'lat': lat,
                    'lon': lon,
                    'radius': radius,
                    'providernetwork': 2
                }
            },
        ).then(res => {
            return res.data as CallABikeData;
        }).catch(err => {
            console.error(err);
            return null;
        })
    }

    getFlinksterData(lat: number, lon: number, radius: number): Promise<CallABikeData | null> {
        return axios.get(
            'https://api.deutschebahn.com/flinkster-api-ng/v1/bookingproposals',
            {
                headers: {
                    'Authorization': 'Bearer ' + APIKey.DB_SANDBOX
                },
                params: {
                    'lat': lat,
                    'lon': lon,
                    'radius': radius,
                    'providernetwork': 1
                }
            },
        ).then(res => {
            return res.data as CallABikeData;
        }).catch(err => {
            console.error(err);
            return null;
        })
    }

    getCircData(lat: number, lon: number, radius: number): Promise<CircData | null> {
        return axios.get(
            'https://api.goflash.com/api/Mobile/Scooters',
            {
                params: {
                    'userLatitude': lat,
                    'userLongitude': lon,
                    'latitude': lat,
                    'longitude': lon,
                    'latitudeDelta': 0.01,
                    'longitudeDelta': 0.01,
                    'lang': "de"
                }
            },
        ).then(res => {
            return res.data as CircData;
        }).catch(err => {
            console.error(err);
            return null;
        })
    }
}
