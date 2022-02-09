export const caesarcipher= (string,shift)=>{
    let newAsciiCode;
    const asciiCode=getAsciiCode(string);
    newAsciiCode= shiftAsciiCode(asciiCode,shift);
    return  convertIntoString(newAsciiCode);
}

function getAsciiCode(string){
    const words=string.split("");
    const asciiCode=[];
    words.forEach(word => {
        asciiCode.push(word.charCodeAt(0))
    });

    return asciiCode;
}

function shiftAsciiCode(asciiCode=[],shift){
    return asciiCode.map(code=> {
        if(String.fromCharCode(code) === " ") return code;
        // ! wrap from z to a
        if(String.fromCharCode(code) === "z") return 97+ (shift-1);
        if(String.fromCharCode(code) === "Z") return  65 +(shift -1);
        return code  + shift
    });
}

function convertIntoString(asciiCode =[]){
    let string='';
    asciiCode.forEach(code=>{
        string=string+String.fromCharCode(code);

    })
    return string;
}