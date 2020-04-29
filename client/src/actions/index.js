import axios from 'axios';
import { FETCH_INGREDIENTS } from './types';

export const fetchIngredients = () => async dispatch => {
    const res = await axios.get(`/api/my-ingredients`);

    dispatch({ type: FETCH_INGREDIENTS, payload: res.data})
}