export default class HospitalType {
    private _id: string
    private _label: string 
    private _createdAt: Date
    private _updatedAt: Date

    constructor(
        id: string,
        label: string,
        createdAt: Date,
        updatedAt: Date
    ){
        this._id = id;
        this._label = label;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
    }

    // Getters
    get id(){
        return this._id; 
    }

    get label(){
        return this._label;
    }

    get createdAt(){
        return this._createdAt;
    }

    get updatedAt(){
        return this._updatedAt;
    }
}
