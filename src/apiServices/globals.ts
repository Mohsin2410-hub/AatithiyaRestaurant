import { signal, WritableSignal } from "@angular/core";

export let token: WritableSignal<string> = signal(localStorage.getItem("token") || "")
export const url: string = "http://localhost:5042"
// export const url: string = "http://192.168.1.13:8081"
// export const url: string = "http://192.168.251.154:8081"
// export const url: string = "http://172.20.10.4:8081"
export let isLogin: boolean = false;
export let uName: string = "";
export let password: string = "";
export let user: string = "";

export const setToken = (tmp: string, uName?: string) => 
{
  
  localStorage.setItem("token", tmp);
  token.set(localStorage.getItem("token") || "");
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

export function setLatestImage(data: any, title: string): string {
  const filtered = data.filter((img: any) => img.imgTitle === title);
  if (filtered.length === 0) return ""; // fallback

  const latest = filtered.reduce((a: any, b: any) => (a.id > b.id ? a : b));
  return `${url}/Banquet_img/${latest.imgUrl}`;
}