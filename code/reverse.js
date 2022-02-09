 export const reverse = ( string )=>{
    let reversedString="";
    string.split("").forEach(word => {
        reversedString= word + reversedString;
    });
    return reversedString;
}
