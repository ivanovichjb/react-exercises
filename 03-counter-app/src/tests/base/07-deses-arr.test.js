import { retornaArreglo } from "../../base//07-deses-arr";

describe('Pruebas de destructuracion de arr', () => {
    
    test('debe retirnar string y un number', () => {
         const [stringTest, numberTest] = retornaArreglo();

         expect(typeof stringTest).toBe("string");
         expect(stringTest).toBe("ABC");

         expect(typeof numberTest).toBe("number");
         expect(numberTest).toBe(123);

        })
    
})
