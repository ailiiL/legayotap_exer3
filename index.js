function validatePassword(p1,p2){
    
    let atleast1Num = false;
    let atleast1Up = false;
    let atleast1Low = false;
    let isValidated = false;

    if (p1 !== p2){
        return false;
    }

    if (p2.length < 8){
        return false;
    }

    for(let i=0; i < p2.length; i++){
        for(let j=0; j<10; j++){
            if(p2[i] == j){
                atleast1Num = true;
                break;
            }
        }

        if (atleast1Num){
            break;
        }
    }

    if(atleast1Num){
        for(let i=0; i<p2.length; i++){
            isNumber = false;
            for(let j=0; j<10; j++){
                if(p2[i] == j){
                    isNumber = true;
                    break;
                }
            }
        
            if(isNumber){
                continue
            }

            if(p2[i] == p2[i].toUpperCase()){
                atleast1Up = true;
                break;
            }
        }
    }

    if(atleast1Up){
        for(let i=0; i<p2.length; i++){
            isNumber = false;
            for(let j=0; j<10; j++){
                if(p2[i] == j){
                    isNumber = true;
                    break;
                }
            }
        
            if(isNumber){
                continue
            }

            if(p2[i] == p2[i].toLowerCase()){
                atleast1Low = true;
                break;
            }
        }
    }

    if(atleast1Low){
        isValidated = true;
    }

    return isValidated;
}

console.log(validatePassword('helloworld', 'hello'))     // returns false
console.log(validatePassword('hello', 'hello'))    	  // returns false
console.log(validatePassword('hello1234', 'hello1234'))  // returns false
console.log(validatePassword('Hello1234', 'Hello1234'))  // returns true
console.log(validatePassword('HELLO1234', 'HELLO1234'))  // returns false


function reversePassword(p){
    let reversedP ="";
    
    for(let i=p.length - 1; i>=0; i--){
        reversedP = reversedP + p[i];
    }
    return reversedP;
}

console.log(reversePassword('hello'));

function storePassword(name, p1, p2){
    if (validatePassword(p1,p2)){
        p1 = reversePassword(p1)
    }
    const object = {
        name: name,
        newpassword: p1
    }
    return object
}


console.log(storePassword("John", "Pass1234", "Pass1234"));
console.log(storePassword("John", "Pass123", "Pass12345"));
