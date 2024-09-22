import axios from 'axios';

const BASE_URL = 'https://api.github.com';

const githubApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_KEY}`,
  },
});

export const getUser = (username) => {
  return githubApi.get(`/users/${username}`);
};
