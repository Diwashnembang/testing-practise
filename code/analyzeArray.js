export const analyzeArray =(array=[])=>{
    const average = array.reduce((previous,current)=> previous+current)/array.length;
    const min = array.reduce((previous,current)=> (previous<current) ? previous : current);
    const max = array.reduce((previous,current)=> (previous>current) ? previous : current) ;
    const length=array.length;

    return {average, min,max ,length}
};




