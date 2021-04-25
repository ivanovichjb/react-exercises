import {getSaludo} from '../../base/02-template-string';


describe(' Test 02-template-string.js', () => {
  
    test(' getSaludo must be return hola fernando ', () => {

        const nombre = "Fernando";

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre + '!');
        
    })

    test(' getSaludo must be return hola Carlos ', () => {

        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos!');
        
    })
    
})
