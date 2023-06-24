export default class User{
    private _id: string;
    private _name: string;
    private _avatar: string;
    private _email: string; 

    constructor(
        id: string,
        name: string,
        avatar: string,
        email: string,
    ){
        this._id = id;
        this._name = name;
        this._avatar = avatar;
        this._email = email;
    }

    // Getters
    get id(){
        return this._id; 
    }

    get name(){
        return this._name;
    }

    get email(){
        return this._email;
    }

    get avatar(){
        return this._avatar;
    }
    
    // Setters
    
    public set Id(newId : string) {
        this._id = newId;
    }
    
    public set Name(newName : string) {
        this._name = newName;
    }

    public set Avatar(newAvatar : string) {
        this._avatar = newAvatar;
    }
    
    public set Email(newEmail : string) {
        this._email = newEmail;
    }
}