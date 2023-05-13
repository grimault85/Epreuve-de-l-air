function splitString(inputString) {
    if (typeof inputString !== 'string') {
        console.error('Error: Vous devez saisir une chaîne de caractère.')
        return;
    }

    const separator = /[ \t\n]+/
    const splitArray = inputString.trim().split(separator)
    return splitArray
}

console.log(splitString(process.argv[2]))