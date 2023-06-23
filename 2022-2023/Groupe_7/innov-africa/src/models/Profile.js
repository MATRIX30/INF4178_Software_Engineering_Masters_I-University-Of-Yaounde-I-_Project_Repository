import Privilege from "./Privilege";

class Profile {
  constructor(data) {
    this.id = data.id;
    this.ref = data.ref;
    this.privileges = data.privileges.map(
      (privilegeData) => new Privilege(privilegeData)
    );
    this.name = data.name;
  }
}
export default Profile;
