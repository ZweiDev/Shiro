export interface CircData {
    Result:       string;
    ResponseText: null;
    Data:         Data;
}

export interface Data {
    TermsConditions:    TermsConditions;
    Scooters:           Scooter[];
    City:               City;
    Stripe:             Stripe;
    OpsFilternScooters: number;
    PreRideURL:         string;
}

export interface City {
    idCity:                      string;
    RideablePolygon:             string;
    LatitudeCityCenter:          number;
    LongitudeCityCenter:         number;
    RedPolygonSizeKm:            number;
    cityOverlayRedColor:         string;
    cityOverlayRedBorderColor:   string;
    cityOverlayGreenColor:       string;
    cityOverlayGreenBorderColor: string;
    SpecialAreas:                any[];
}

export interface Scooter {
    idScooter:                    number;
    idCity:                       string;
    ScooterCode:                  string;
    idScooterState:               string;
    LatLng:                       LatLng;
    Distance:                     number;
    PowerPercent:                 string;
    RemainderRange:               string;
    PowerPercentInt:              number;
    ScooterModel:                 string;
    IsBookable:                   boolean;
    IsTootable:                   boolean;
    StreetInfo:                   string;
    StreetInfo2:                  string;
    txtRentalPrice:               string;
    BookingDurationMinutes:       number;
    ShowRoute:                    boolean;
    Distance_txt:                 string;
    Locked:                       boolean;
    location:                     Location;
    GoogleMapsMode:               string;
    GoogleMapsEstimatedTimeRatio: number;
    CostEstimationEnabled:        boolean;
    CityName:                     string;
    ScooterStatus:                string;
    GSMCoverage:                  number;
    SatelliteNumber:              number;
    GPSStatus_txt:                string;
    GPSStatus_sort:               string;
    GPSStatus_int:                number;
    IOTStatus_txt:                string;
    IOTStatus_sort:               string;
    IOTStatus_int:                number;
    txt_Code:                     string;
    sort_Code:                    string;
    txt_Model:                    string;
    sort_Model:                   string;
    txt_Location:                 string;
    sort_Location:                number;
    txt_Power:                    string;
    sort_Power:                   number;
    txt_GSM:                      string;
    sort_GSM:                     string;
    txt_GPS:                      string;
    sort_GPS:                     string;
    txt_Status:                   string;
    sort_Status:                  string;
}

export interface LatLng {
    _geometry: Geometry;
    _isNull:   boolean;
    _srid:     number;
}

export interface Geometry {
    m_points:                 MPoint[];
    m_zValues:                null;
    m_mValues:                null;
    m_figures:                MFigure[];
    m_shapes:                 MShape[];
    m_fValid:                 boolean;
    m_extendedUserProperties: string;
}

export interface MFigure {
    pointOffset:     number;
    figureAttribute: string;
}

export interface MPoint {
    x: number;
    y: number;
}

export interface MShape {
    figureOffset: number;
    parentOffset: number;
    type:         string;
}

export interface Location {
    latitude:  number;
    longitude: number;
}

export interface Stripe {
    UserAddedPayment: boolean;
    StripeApiKey:     null;
    AndroidPayMode:   null;
}

export interface TermsConditions {
    AcceptedTermsConditions: boolean;
    UrlPrivacy:              string;
    UrlTerms:                string;
}
