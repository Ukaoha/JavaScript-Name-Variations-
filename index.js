let numofStrings = document.querySelector("#num_strings") ;

let lowerCase = document.querySelector("#lower_case") ;

let upperCase = document.querySelector("#upper_case") ;

let name = document.querySelector("#name_entry") ;

let lowerCaseCount = document.querySelector("#lower_case_count");

let upperCaseCount = document.querySelector("#upper_case_count");


function getNumberofStrings(name) {
    return name.length
}
function getLowerCase(name){
    return name.toLowerCase()
}
function getUpperCase(name) {
    return name.toUpperCase()
}

function getLowerCaseCount(name) {
    let lowerCaseCount = 0 ;
    for (let char of name ) {
        if(char.match(/[a-z]/)) {
            lowerCaseCount += 1 ;
        }
    }
    return lowerCaseCount
    
}


function getUpperCaseCount(name) {
    let upperCaseCount = 0 ;
    for (let char of name ) {
        if(char.match(/[A-Z]/)) {
            upperCaseCount += 1 ;
        }
    }
    return upperCaseCount
    
}

name.addEventListener("keyup" , () => { 
    numofStrings.textContent = getNumberofStrings(name.value) ;
    lowerCase.textContent = getLowerCase(name.value) ;
    upperCase.textContent = getUpperCase(name.value) ;
    lowerCaseCount.textContent = getLowerCaseCount(name.value);
    upperCaseCount.textContent = getUpperCaseCount(name.value)
}

)