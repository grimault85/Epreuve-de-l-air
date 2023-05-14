function insertSorted(list, newElement) {
    if (!Array.isArray(list) || isNaN(newElement)) {
        console.error('Error: Les arguments doivent être un tableau et un nombre.')
        process.exit(1)
    }

    const index = list.findIndex(function (element) {
        return element > newElement
    });

    if (index === -1) {
        return list.concat(newElement)
    } else {
        return [...list.slice(0, index), newElement, ...list.slice(index)]
    }
}

const list = process.argv.slice(2, -1).map(Number)
const newElement = Number(process.argv[process.argv.length - 1])

console.log(insertSorted(list, newElement))