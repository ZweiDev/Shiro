export interface TIERData {
    meta: Meta;
    data: Scooter[];
}

export interface Scooter {
    id:                 string;
    state:              string;
    lastLocationUpdate: Date;
    lastStateChange:    Date;
    batteryLevel:       number;
    lat:                number;
    lng:                number;
    maxSpeed:           number;
    zoneId:             string;
    licencePlate:       string;
    vin:                string;
    code:               number;
    isRentable:         boolean;
    iotVendor:          string;
}

export interface Meta {
    rowCount:  number;
    pageCount: number;
}
