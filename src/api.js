import axios from 'axios';
import dotenv from 'dotenv';

import { base_url } from './constants';

dotenv.config();

const key = process.env.REACT_APP_TOKEN;

export const getMatches = (status) => {
  axios({
    url: `${base_url}competitions/EC/matches?status=${status}`,
    method: 'get',
    headers: {
      'X-Auth-Token': key,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        //HERE WE CAN MANAGE STATE
        console.log(response.data.matches);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
