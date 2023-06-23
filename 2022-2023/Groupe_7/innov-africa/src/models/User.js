import { API_URL } from "data/my_data";
import Profile from "./Profile";

class User {
  constructor(data) {
    this.id = data.id;
    this.username = data.username;
    this.password = data.password;
    this.phone = data.phone;
    this.firstName = data.first_name;
    this.lastName = data.last_name;
    this.gender = data.gender;
    this.address = data.address;
    this.photo = data.photo === null ? null : API_URL + data.photo;
    this.isStaff = data.is_staff;
    this.isSuperuser = data.is_superuser;
    this.profile = new Profile(data.profile);
    this.bio = data.bio;
    this.level = data.level;
  }
}
export default User;
