import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = import.meta.env.VITE_SOME_KEY || 'http://localhost:3000';

export const getInvitations = async (page:number = 1): Promise<{info: any, data: any}> => {
  const token = Cookies.get('token');
  const response = await axios.get(`${API_URL}/invitations?page=${page}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteInvitation = async (id: number): Promise<void> => {
  const token = Cookies.get('token');
  await axios.delete(`${API_URL}/invitations/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}