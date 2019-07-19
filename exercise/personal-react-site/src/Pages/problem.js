 
 //return true if the character between equal characters return true
 // "&*^" true
 // "h&i"false
 
const findAsterisk = (str) => {
    const arr = str.split ('')
    for (i = 0; i < arr.length; i++){
        if ((arr.length) === "*"){
            return true
        } else{
            false
        }
        
    }
    
}