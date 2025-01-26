import { destroyCookie, setCookie } from 'nookies';

export async function createSession(token: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  setCookie(null, 'tureestoken', token, {
    maxAge: 7 * 24 * 60 * 60,
    path: '/',
    expires: expiresAt
  });
}



export async function deleteSession() {
  destroyCookie(undefined, 'tureestoken');
}
