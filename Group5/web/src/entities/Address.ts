export default class Address {
    private _latitude: number;
    private _longitude: number;
    private _street: string;
    private _city: string;
    private _postalCode: string;
    private _country: string;

    constructor(
        latitude?: number,
        longitude?: number,
        street?: string,
        city?: string,
        postalCode?: string,
        country?: string
    ){
        this._latitude = latitude ?? 0;
        this._longitude = longitude ?? 0;
        this._street = street ?? "";
        this._city = city ?? "";
        this._postalCode = postalCode ?? "";
        this._country =  country ?? "";
    }

    // Getters
    
    get latitude(){
        return this._latitude; 
    }
    
    get longitude(){
        return this._longitude; 
    }
    
    get postalCode(){
        return this._postalCode; 
    }
    
    get street(){
        return this._street; 
    }
    
    get city(){
        return this._city; 
    }
    
    get country(){
        return this._country; 
    }

    // Setters
    
    public set Latitude(newLatitude: number){
        this._latitude = newLatitude; 
    }
    
    public set Longitude(newLongitude: number){
        this._latitude = newLongitude; 
    }
    
    public set PostalCode(newPostalCode: string){
        this._postalCode = newPostalCode; 
    }
    
    public set Street(newStreet: string){
        this._street = newStreet; 
    }
    
    public set City(newCity: string){
        this._city = newCity; 
    }
}