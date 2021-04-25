import { getHeroeById } from '../../base/08-imp-exp';
import  heroes from '../../data/heroes';

describe('Prueba para funciones Heros', () => {

    test('should return hero by id', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( item => item.id === id);

        expect(heroe).toEqual(heroeData);

    });

    test('should return undefined by id did not exist ', () => {
        
        const id = 15;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( item => item.id === id);

        expect(heroeData).toBe( undefined);

    })

    
})
