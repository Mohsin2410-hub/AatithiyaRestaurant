export let token: string = localStorage.getItem("token") || ""
// export const url: string = "http://192.168.1.24:8066"
// export const url: string = "https://garimacmsbe.garimasystem.com"
// export const url: string = "http://192.168.1.4:8061"
export const url: string = "http://localhost:5245"
export let isLogin: boolean = false;
export let uName: string = "";
export let password: string = "";
export let user: string = "";

export const setToken = (tmp: string, uName?: string) => 
{
  token = tmp;
  localStorage.setItem("token", token);
  localStorage.setItem("userName", uName || "");
  console.log(tmp, uName);
}

export const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) return token;
  return null
}

export const setIsLogin = (bool: boolean) => {
  isLogin = bool
}

export const getLogin = () => {
  return isLogin;
}