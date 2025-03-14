import Cookies from 'js-cookie';
export const signIn = (access_token: string, refresh_token: string) => {
  Cookies.set('access_token', access_token);
  Cookies.set('refresh_token', refresh_token);
};

export const signOut = () => {
  Cookies.remove('access_token');
  Cookies.remove('refresh_token');
};

// uncomment this if you want to use jwt-decode
// export const getJWTPayload = ({
//   access_token = "",
// }: {
//   access_token: string | null;
// }) => {
//   return access_token ? jwt_decode(access_token) : null;
// };
