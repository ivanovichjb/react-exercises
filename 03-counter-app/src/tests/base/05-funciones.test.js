import {  getUser,getUsuarioActivo  } from '../../base/05-funciones'

describe('Prueba de funciones', () => {
    
    test('should return object getUser' , () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user =  getUser ();

        expect( user).toEqual( userTest);
        
    })
    
    test('should return object etUsuarioActivo' , () => {

        const nombre = 'Ivan';

        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        const user =  getUsuarioActivo (nombre);

        expect( user).toEqual( userTest);
        
    })
    
})
