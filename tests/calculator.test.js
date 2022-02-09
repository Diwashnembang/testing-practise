import { calculator as c} from "../code/calculator";

const calculator = new c;

test ("sum",()=>{
    expect(calculator.add(4,1)).toBe(5)

})

test ("sum",()=>{
    expect(calculator.add(4,4)).toBe(8)
    
})

test ("substract",()=>{
    expect(calculator.substract(0,1)).toBe(-1)
})
test ("substract",()=>{
    expect(calculator.substract(1,1)).toBe(0)
})
test ("multiply",()=>{
    expect(calculator.multiply(1,9)).toBe(9)
})
test ("multiply",()=>{
    expect(calculator.multiply(9,9)).toBe(81)
    
})
test ("divide",()=>{
    expect(calculator.divide(9,9)).toBe(1)
    
})
test ("divide",()=>{
    expect(calculator.divide(10,5)).toBe(2)
    
})