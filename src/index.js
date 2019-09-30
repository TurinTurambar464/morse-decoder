const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
   
    let arr = Array.from(expr);
    let subArr = []; 
    let letterSize = 10; 

    for(let i = 0; i < arr.length/letterSize; i++) {
        subArr[i] = arr.slice(i*letterSize, i*letterSize + letterSize);
    }

    let interimArr = []; 
    
    for(let i = 0; i < subArr.length; i++) {  
        let bitArr = [];  
        for(let j = 0; j < subArr[i].length/2; j++) {                      
            bitArr[j] = subArr[i].slice(j*2, j*2 + 2);
        }
        interimArr[i] = bitArr;
    }             

    for(let i = 0; i < interimArr.length; i++) {
        for(let j = 0; j < interimArr[i].length; j++) {
            interimArr[i][j] = interimArr[i][j].join('');
            if(interimArr[i][j] == '10') {
                interimArr[i][j] = '.'; 
            } 
            if(interimArr[i][j] == '11') {
                interimArr[i][j] = '-';
            }
            if(interimArr[i][j] == '00') {
                delete interimArr[i][j];
            }
        }
    }

    for(let i = 0; i < interimArr.length; i++) {
        interimArr[i] = interimArr[i].join('');
        if(interimArr[i] == '**********') {
            interimArr[i] = ' ';
        }
    }
   
    for(let i = 0; i < interimArr.length; i++) {        
        for (let [key, value] of Object.entries(MORSE_TABLE)) {
            if(interimArr[i] == key) {
                interimArr[i] = value;
            }
        }
    }
   
    return interimArr.join('');    
}

module.exports = {
    decode
}