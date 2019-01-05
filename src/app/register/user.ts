export interface Roles {
    reqUser: boolean;
    volunteer?: boolean;
    admin?:  boolean;
  }
  
  export class User {
    uid: string;
    email:    string;
    username: string;
    password : string;
    roles:    Roles;
  
    constructor(authData) {
      this.email    = authData.email
      this.roles    = { reqUser: true }
    }
  }