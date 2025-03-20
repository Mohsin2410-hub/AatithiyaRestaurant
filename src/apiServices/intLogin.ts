interface res {
    isSuccess: boolean;
    status: number;
    message: string;
  }
  
  interface data {
    id: number;
    username: string;
    permissionVersion: number;
    token: string;
  }
  
  export interface Login {
    res: res;
    data: data;
  }  