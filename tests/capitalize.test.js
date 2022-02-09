import { capitalize} from "../code/capitalize";

test("is it Hello",()=>{
    expect(capitalize('hello')).toBe('Hello');
})

test("is it Hi",()=>{
    expect(capitalize('hIII')).toBe('Hiii');
})


