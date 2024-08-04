import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';

const router = useRouter();

const API_URL = import.meta.env.VITE_SOME_KEY || 'http://localhost:3000';

export const register = async (payload: {names: string, lastnames: string, email: string, password: string, house_number: number}): Promise<{token: string}> => {
  const { data } = await axios.post(`${API_URL}/signup`, payload);
  
  Cookies.set('token', data.token, { expires: 1 });

  return data;
}

export const login = async (payload: {email: string, password: string}): Promise<{token: string}> => {
  const { data } = await axios.post(`${API_URL}/token`, payload);

  Cookies.set('token', data.token, { expires: 1 });

  return data;
}

export const recover = async (payload: {email: string}): Promise<{message: string}> => {
  const { data } = await axios.post(`${API_URL}/recover`, payload);

  return data;
}

export const handleTokenExpired = (): void => {
  Cookies.remove('token');
  router.push('/login');
}