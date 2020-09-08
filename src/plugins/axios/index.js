import axios from 'axios';
import interceptors from './interceptors';

const instance = axios.create({
  baseURL: 'base/db.json',
});

interceptors(instance);

export default instance;
