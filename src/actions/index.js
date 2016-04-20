import axios from 'axios';
import { GET_PEOPLE, GET_PERSON } from 'constants';

export function getPeople() {
  const request = axios.get('http://swapi.co/api/people/');

  return {
    type: GET_PEOPLE,
    payload: request
  };
}

export function getPerson(id) {
  const request = axios.get(`http://swapi.co/api/people/${id}`);
  return {
    type: GET_PERSON,
    payload: request
  };
}
