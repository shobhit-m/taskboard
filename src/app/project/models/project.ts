export class Project {
  id: number;
  name: string;
  description: string;
  // memberCount: number;
  // createdBy: string;
  // createdAt: Date;
  // updatedBy: string;
  // updateAt: Date;

  constructor(id, name, description){
    this.id = id;
    this.name = name;
    this.description = description;
  }
}
