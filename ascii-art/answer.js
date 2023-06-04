/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const widthOfLetter = parseInt(readline());
const heigthOfLetter = parseInt(readline());
const textToPrint = readline();
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ?";
let ascii = [];
for (let i = 0; i < heigthOfLetter; i++) {
    const ROW = readline();
    ascii.push(ROW)
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

function findIndexOfLetter(letter = "") {
    let indexOfLetter = alphabet.indexOf(letter.toUpperCase());
    if (indexOfLetter === -1) {
        const lastIndexOfAlphabet = alphabet.length - 1;
        return lastIndexOfAlphabet * widthOfLetter
    }
    return indexOfLetter * widthOfLetter
}

function findLettersIndexes() {
    const lettersIndexes = []
    for (let i = 0; i < textToPrint.length; i++) {
        const letter = textToPrint[i];
        lettersIndexes.push(findIndexOfLetter(letter));
    }
    return lettersIndexes
}

function makeAsciiLetter(letterIndex = 0, asciiRow = "") {
    let letter = ""
    for (let i = letterIndex; i < (letterIndex + widthOfLetter); i++) {
        letter += asciiRow[i];
    }
    return letter
}

function makeWordRow(indexOfLetters = [], asciiRow = "") {
    let row = ""
    indexOfLetters.forEach(letterIndex => {
        row += makeAsciiLetter(letterIndex, asciiRow)
    })
    return row
}

function makeWord(indexOfLetters = []) {
    const rows = []
    for (let i = 0; i < heigthOfLetter; i++) {
        const asciiRow = ascii[i]
        rows.push(makeWordRow(indexOfLetters, asciiRow))
    }
    return rows
}

function printWord(wordToPrint = []) {
    wordToPrint.forEach(row => {
        console.log(row);
    })
}

function main() {
    const indexOfLetters = findLettersIndexes();
    const wordToPrint = makeWord(indexOfLetters)
    printWord(wordToPrint)
}

main()
