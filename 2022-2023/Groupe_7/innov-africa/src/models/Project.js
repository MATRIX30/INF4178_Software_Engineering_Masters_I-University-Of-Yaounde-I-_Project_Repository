class Project {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.category = data.category;
    this.image = data.image;
    this.date_created = data.date_created;
    this.date_updated = data.date_updated;
    this.student = data.student;
  }
}
export default Project;
