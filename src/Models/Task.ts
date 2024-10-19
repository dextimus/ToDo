import { BaseModel } from "./BaseModel";

export class Task extends BaseModel {
  private userId: string;
  constructor(title: string, userID: string) {
    super(title);
    this.userId = userID;
  }
}
