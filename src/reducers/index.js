import { GET_PEOPLE, GET_PERSON } from 'constants';

const INITIAL_STATE = {
  all: [],
  selected: null
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type){
    case GET_PEOPLE:
    return {
      ...state,
      all: action.payload.data.results
    }
    case GET_PERSON:
    return {
      ...state,
      selected: action.payload.data
    }
  }
}