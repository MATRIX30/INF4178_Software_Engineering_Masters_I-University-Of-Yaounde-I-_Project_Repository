import Address from "./Address";

export default class Hospital{
    private _id: string;
    private _name: string;
    // private _distance: number;
    private _type: string; 
    private _images: string[];
    private _notice : number;
    private _phoneNumber: string;
    private _cost: number;
    private _website: string;
    // Address
    private _address: Address;

    constructor(
        id: string,
        name: string,
        type: string,
        images: string[],
        // distance: number,
        notice: number,
        phoneNumber: string,
        cost: number,
        website: string,
        address: Address,
    ){
        this._id = id;
        this._name = name;
        this._type = type;
        this._images = images;
        // this._distance = distance;
        this._notice = notice ?? 0;
        this._phoneNumber = phoneNumber ?? "";
        this._cost = cost;
        this._website = website ?? ""; 
        this._address = address;
    }

    // Getters
    get id(){
        return this._id; 
    }

    get name(){
        return this._name;
    }

    get address(){
        return this._address;
    }

    // get distance(){
    //     return this._distance;
    // }

    get type(){
        return this._type;
    }

    get images(){
        return this._images;
    }

    get notice(){
        return this._notice;
    }

    get phoneNumber(){
        return this._phoneNumber;
    }

    get website(){
        return this._website;
    }

    get cost(){
        return this._cost;
    }
    
    // Setters
    
    public set Id(newId : string) {
        this._id = newId;
    }
    
    public set Name(newName : string) {
        this._name = newName;
    }

    public set Type(newType : string) {
        this._type = newType;
    }
    
    public set Notice(newNotice : number) {
        this._notice = newNotice;
    }
    
    public set Images(newImages : string[]) {
        this._images = newImages;
    }

    public set PhoneNumber(newPhoneNumber : string) {
        this._phoneNumber = newPhoneNumber;
    }

    public set Website(newWebsite : string) {
        this._website = newWebsite;
    }
    
    public set Cost(newCost : number) {
        this._cost = newCost;
    }
    
    public set Address(newAddress : Address) {
        this._address = newAddress;
    }
}
