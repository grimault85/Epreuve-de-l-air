function removeAdjacentDuplicates(inputString) {
    if (typeof inputString !== "string") {
        console.error("Error: Vous devez saisir une chaîne de caractères.")
        return;
    }

    let result = ""
    for (let i = 0; i < inputString.length; i++) {
        const currentChar = inputString[i]
        if (currentChar !== result[result.length - 1]) {
            result += currentChar
        }
    }
    return result;
}

console.log(removeAdjacentDuplicates(process.argv[2]))