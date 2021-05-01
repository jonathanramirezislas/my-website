import Swal from 'sweetalert2';

import { types } from '../types/types';
import { fetchWithoutToken } from '../../helpers/fetch';


        /****       ADD NEW BIT         ****/

export const bitAddNew = ( bit ) => {
    return async( dispatch, getState ) => {
        try {
                                            //endpoint,parms/Method
            const resp = await fetchWithoutToken('addEndpoint', bit, 'POST');
            const body = await resp.json();
            if ( body.ok ) {
                bit.id = body.bit.id;
                dispatch( bitAddNew( bit ) );
            }
        } catch (error) {
            console.log(error);
        }
    }
}
const bitAddNew = (bit) => ({
    type: types.bitAddNew,
    payload: bit
});


            /** GET BITS**/

export const bitStartLoading = () => {
    return async(dispatch) => {

        try {
            
            const resp = await fetchWithoutToken( 'bitsEdnpoint' );
            const body = await resp.json();

     
            dispatch( bitsLoaded( bits ) );

        } catch (error) {
            console.log(error)
        }

    }
}

const bitsLoaded = (bits) => ({
    type: types.bitsLoaded,
    payload: bits
})

            /** UPDATE EVENT**/

export const bitStartUpdate = ( bit ) => {
    return async(dispatch) => {

        try {
            const resp = await fetchWithoutToken(`endpoint/${ bit.id }`, bit, 'PUT' );
            const body = await resp.json();

            if ( body.ok ) {
                dispatch( bitUpdated( bit ) );
            } else {
                Swal.fire('Error', body.msg, 'error');
            }


        } catch (error) {
            console.log(error)
        }

    }
}

const bitUpdated = ( bit ) => ({
    type: types.bitUpdated,
    payload: bit
});

            /** DELETE  EVENT**/

export const eventStartDelete = () => {
    return async ( dispatch, getState ) => {
        //GET event from store wich is active
        //const { id } = getState().calendar.activeEvent;

        try {
            const resp = await fetchWithoutToken(`events/${ id }`, {}, 'DELETE' );
            const body = await resp.json();

            if ( body.ok ) {
                dispatch( bitDeleted(id) );
            } else {
                Swal.fire('Error', body.msg, 'error');
            }


        } catch (error) {
            console.log(error)
        }

    }
}


const bitDeleted = (id) => ({
     type: types.bitDeleted,
     payload: id
    });
            



//CLEAN BYTE  
export const eventLogout =() => ({
     type: types.eventLogout 
    });