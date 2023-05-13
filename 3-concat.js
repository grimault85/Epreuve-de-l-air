function joinStrings(stringArray, separator) {
    if (!Array.isArray(stringArray)) {
        console.error('Error: Le premier argument doit être un tableau de chaînes de caractères.');
        return;
    }

    if (typeof separator !== 'string') {
        console.error('Error: Le deuxième argument doit être une chaîne de caractères.');
        return;
    }

    const joinedString = stringArray.join(separator);
    return joinedString;
}

console.log(joinStrings(process.argv.slice(2), process.argv[process.argv.length - 1])); 