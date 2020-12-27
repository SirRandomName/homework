export enum AuthStore {
  MAIL = 'mail'
}

export interface IUserState {
  userName: string;
  isLogedIn: boolean;
}

//  Property 'userName' is private in type 'UserState' but not in type 'IUserState'.
//  export class UserState implements IUserState {
export class UserState {
  private userName: string = '';
  private isLogedIn = false;

  constructor(userName?: string) {
    this.setUserState(userName);
  }

  setUserState(userName: string | null = ''): void {
    this.userName = userName ?? '';
    this.isLogedIn = this.userName.length > 0 ? true : false;
  }

  getUserState(): IUserState {
    return {
      userName: this.userName,
      isLogedIn: this.isLogedIn
    };
  }
}
