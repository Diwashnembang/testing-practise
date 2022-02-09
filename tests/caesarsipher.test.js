import { caesarcipher } from "../code/caesarciphper";

test("shift 1 with space",()=>{
    expect(caesarcipher("abc abc",1)).toBe("bcd bcd");
})

test("shift 1",()=>{
    expect(caesarcipher("abc",1)).toBe("bcd");
})

test("shift 5",()=>{
    expect(caesarcipher("abc",5)).toBe("fgh");
})


test("wrap z with shift 1",()=>{
    expect(caesarcipher("z",1)).toBe("a");
})

test("wrap z with shift 5",()=>{
    expect(caesarcipher("z",5)).toBe("e");
})

test("wrap Z(capital z) with shift 5",()=>{
    expect(caesarcipher("Z",5)).toBe("E");
})


test("full string test with shift 1",()=>{
    expect(caesarcipher("defend the east wall of the castle",1)).toBe("efgfoe uif fbtu xbmm pg uif dbtumf");
})


