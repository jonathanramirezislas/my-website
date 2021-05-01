import { types } from '../types/types';

const initialState = {
    bytes: [],
   
}


export const bytesReducer = ( state = initialState, action ) => {

    switch (action.type) {
        
        case  types.bitAddNew:
            return {
                ...state,
                bytes: [ action.payload, ...state.bit ]
            }

        case types.bitsLoad:
            return {
                ...state,
                bytes: [ ...action.payload ]
            }
    
            
        case types.bitUpdated:
            return {
                ...state,
                bytes: state.bytes.map( bit => 
                    bit.id === action.payload.id 
                        ? action.payload
                        : bit 
                )
            }

        case types.bitDelete:
            return {
                ...state,
                bytes: state.bytes.filter( bit => bit.id !== action.payload )
            } 

        case types.eventLogout:
            return {
                ...state,
                bytes: []
            }

        default:
            return state
    }


}