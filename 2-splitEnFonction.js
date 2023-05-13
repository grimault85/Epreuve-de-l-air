function splitString(inputString, separator) {
    if (typeof inputString !== 'string') {
        console.error('Error: Vous devez saisir une chaîne de caractère.')
        return;
    }

    if (typeof separator !== 'string') {
        console.error('Error: Le séparateur doit être une chaîne de caractère.')
        return;
    }

    const regexSeparator = new RegExp(separator, 'g')
    const splitArray = inputString.trim().split(regexSeparator)
    return splitArray;
}

console.log(splitString(process.argv[2], process.argv[3]))
