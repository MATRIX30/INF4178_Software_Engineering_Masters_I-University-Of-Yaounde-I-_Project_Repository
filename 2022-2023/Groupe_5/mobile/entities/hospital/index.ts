type HospitalData = {
  id: string;
  name: string;
  notice: string;
  address: string;
  distance: number;
  type: "public" | "private";
  photo: any;
  latitude: number;
  longitude: number;
  city: string;
  cost: number;
};

export default class Hospital {
  private _id: string;
  private _name: string;
  private _notice: string;
  private _address: string;
  private _distance: number;
  private _type: "public" | "private";
  private _images: any[];
  private _latitude: number;
  private _longitude: number;
  private _city: string;
  private _cost: number;

  constructor(data: HospitalData) {
    this._id = data.id;
    this._name = data.name;
    this._notice = data.notice;
    this._address = data.city;
    this._distance = data.distance;
    this._type = data.type;
    this._images = [data.photo];
    this._latitude = data.latitude;
    this._longitude = data.longitude;
    this._city = data.city;
    this._cost = data.cost;
  }

  // Getters

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get notice(): string {
    return this._notice;
  }

  get address(): string {
    return this._address;
  }

  get distance(): number {
    return this._distance;
  }

  get type(): "public" | "private" {
    return this._type;
  }

  get images(): any[] {
    return this._images;
  }

  get latitude(): number {
    return this._latitude;
  }

  get longitude(): number {
    return this._longitude;
  }

  get city(): string {
    return this._city;
  }

  get cost(): number {
    return this._cost;
  }
}
