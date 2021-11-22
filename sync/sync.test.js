const Lodash = require('./sync')

let _ = new Lodash()

describe('Lodash compact', () => {
    
    
    let array

    beforeEach(() => {
        array = [false, 42, 0, '', true, null, 'hello']
    })

    afterAll(() => {
         _ = new Lodash()  //для работы тута
    })

    test('should be defined', () => {
        expect(_.compact).toBeDefined() //должен быть defined
        expect(_.compact).not.toBeUndefined() //НЕ должент быть underfined
    })

    test('should working array be editable', () => {
        array.push(...['one', 'two'])
        expect(array).toContain('one')
        expect(array).toContain('two')
    })

    test('should remove falsy values from array', () => {
        
        const result = [42, true, 'hello']
        expect(_.compact(array)).toEqual(result) // должен равняться массиву result (без falsy значений), лучше со сложными объектами использовать equal
    })


    test('should not contain falsy values', () => {
        expect(_.compact(array)).not.toContain(false)   //не должен иметь 
        expect(_.compact(array)).not.toContain('')      //не должен иметь 
        expect(_.compact(array)).not.toContain(0)       //не должен иметь 
        expect(_.compact(array)).not.toContain(null)    //не должен иметь 
    })
})

describe('Lodash groupBy', () => {

    test('should be defined', () => {
        expect(_.groupBy).toBeDefined() //должен быть defined
        expect(_.groupBy).not.toBeUndefined() //НЕ должент быть underfined
    })

    test('should group array items by Math.floor', () => {

        const array = [2.2, 2.4, 4.2, 3.1]
        const result = {
            2: [2.2, 2.4],
            4: [4.2],
            3: [3.1]
        }

        expect(_.groupBy(array, Math.floor)).toEqual(result)
    })

    test('should group array items by length', () => {

        const array = ['one','two','three']
        const result = {
            5: ['three'],
            3: ['one','two']
        }

        expect(_.groupBy(array, 'length')).toEqual(result)
    })

    test('should NOT return array', () => {

        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
    })
})