function getUniqueValue(list) {
    if (!Array.isArray(list)) {
        console.error('Error: Le premier argument doit être un tableau.')
        return
    }

    const countMap = new Map()
    for (let i = 0; i < list.length; i++) {
        const value = list[i]
        const count = countMap.get(value) || 0
        countMap.set(value, count + 1)
    }

    for (let [value, count] of countMap) {
        if (count === 1) {
            return value
        }
    }

    console.error('Error: La liste ne contient aucune valeur unique.')
    return;
}

console.log(getUniqueValue(process.argv.slice(2)))