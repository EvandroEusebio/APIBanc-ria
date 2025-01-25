import Cookies, {CookieSetOptions} from "universal-cookie";

const cookies = new Cookies();

const cookieOptions: CookieSetOptions = {
  path: "/",
  //secure: true, // apenas em conexões HTTPS
  //httpOnly: true, // não acessível via JavaScript
  sameSite: "strict", // restrito a solicitações do mesmo site
  // Define um tempo de expiração, por exemplo, em 1 hora
  expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
};

export const setCookie = (name: string, value: string) => {
  cookies.set(name, value, cookieOptions);
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};


export const deleteCookie = (name: string) => {
  cookies.remove(name, cookieOptions);
};
