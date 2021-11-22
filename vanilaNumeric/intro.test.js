const {sum, nativeNull} = require('./intro')

describe('SUM FUNCTION', ()=>{

    test('should return sum of two values', ()=> {
        expect(sum(1,3)).toBe(4)
        expect(sum(1,3)).toEqual(4)
    })
    
    test('should return value correctly comparing to other values', ()=> {
        expect(sum(2,3)).toBeGreaterThan(4) //больше чем 4
        expect(sum(2,3)).toBeGreaterThanOrEqual(5)  //больше или равно 4
        expect(sum(2,3)).toBeLessThan(6)  //меньше чем 6
        expect(sum(2,3)).toBeGreaterThanOrEqual(5)  //меньше или равно 5 
    })
    
    test('should sum 2 values correctly', ()=>{
        expect(sum(0.3, 0.7)).toBeCloseTo(1)    //для проверки дробных значений
    })

})


describe('NATIVE NULL FUNCTION', ()=>{

    test('should return false value null', ()=>{
        expect(nativeNull()).toBe(null) //первый вариант проверки, лучше использовать следующий матчер
        expect(nativeNull()).toBeNull() //проверяем на Null
        expect(nativeNull()).toBeFalsy() //underfined, null, 0, '' falsy values (не срабатывают на if'ах)
        expect(nativeNull()).toBeDefined()  //определенное значение
        expect(nativeNull()).not.toBeTruthy() //обратно toBeFalsy
        expect(nativeNull()).not.toBeUndefined() //НЕ должен быть underfined
    })
})
