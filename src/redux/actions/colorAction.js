import { types } from '../types/types';


const colorUpdated = ( color ) => ({
    type: types.colorUpdated,
    payload: color
});
