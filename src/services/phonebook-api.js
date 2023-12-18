import axios from 'axios';

const phonebookInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  phonebookInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestUserSignUp = async formData => {
  const { data } = await phonebookInstance.post('/users/signup', formData);
  setToken(data.token);

  return data;
};

export const requestUserLogin = async formData => {
  const { data } = await phonebookInstance.post('/users/login', formData);
  setToken(data.token);

  return data;
};

export const requestUserLogout = async () => {
  const { data } = await phonebookInstance.post('/users/logout');

  return data;
};

export const refreshCurrentUser = async () => {
  const { data } = await phonebookInstance.get('/users/current');
  return data;
};

export const fetchContacts = async () => {
  const { data } = await phonebookInstance.get('/contacts');
  return data;
};

export const addContact = async newContact => {
  const { data } = await phonebookInstance.post('/contacts', newContact);
  return data;
};

export const deleteContact = async contactId => {
  const { data } = await phonebookInstance.delete(`/contacts/${contactId}`);
  return data;
};
