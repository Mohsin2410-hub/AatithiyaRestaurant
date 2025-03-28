export let token: string = localStorage.getItem("token") || ""
export const url: string = "http://localhost:5042"
// export const url: string = "http://192.168.1.13:8081"
export let isLogin: boolean = false;
export let uName: string = "";
export let password: string = "";
export let user: string = "";

export const setToken = (tmp: string, uName?: string) => 
{
  token = tmp;
  localStorage.setItem("token", token);
  localStorage.setItem("userName", uName || "");
}

export const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) return token;
  return null
}

export const getLogin = () => {
  return isLogin;
}