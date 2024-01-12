import axios, { AxiosPromise } from 'axios';

import type { ServiceRequestData } from '../types/service-request-data.type';

export const http = axios.create({
  baseURL: 'https://hooks.slack.com/services',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const Post = async (
  url: string,
  data: ServiceRequestData,
): AxiosPromise<string> => await http.post(url, data);
