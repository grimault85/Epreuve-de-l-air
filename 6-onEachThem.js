function operateList(list) {
    if (!list || !list.length) {
        console.error('Error: Veuillez fournir une liste valide.')
        return
    }

    const operation = list.pop()
    if (!operation.match(/^[+\-]\d+$/)) {
        console.error('Error: La dernière opération doit être une chaîne de la forme "+n" ou "-n".')
        return
    }

    const operator = operation.charAt(0)
    const operand = parseInt(operation.slice(1))

    const result = list.map(Number).map(function (number) {
        return operator === '+' ? number + operand : number - operand
    })

    return result
}

console.log(operateList(process.argv.slice(2)))