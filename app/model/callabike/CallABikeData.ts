export default interface CallABikeData {
    href:   string;
    offset: number;
    limit:  number;
    size:   number;
    items:  Item[];
    _links: Link[];
}

export interface Link {
    rel:  string;
    verb: string;
    href: string;
}

export interface Item {
    expand:       string;
    rentalObject: RentalObject;
    area:         Area;
    position:     Position;
    distance:     number;
    _links:       Link[];
}

export interface Area {
    href: string;
}

export interface Position {
    type:        string;
    coordinates: number[];
}

export interface RentalObject {
    href:       string;
    attributes: null;
}
