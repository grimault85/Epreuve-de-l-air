function filterList(list, substring) {
    if (!Array.isArray(list) || typeof substring !== 'string') {
        console.error('Error: Les arguments doivent être un tableau et une chaîne de caractères.')
        return
    }

    const filteredList = list.filter(function (item) {
        return !item.includes(substring)
    })

    return filteredList
}

console.log(filterList(process.argv.slice(2), process.argv[process.argv.length - 1]))