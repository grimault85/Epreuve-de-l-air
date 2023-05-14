function sortedFusion(array1, array2) {
    let i = 0;
    let j = 0;
    const merged = [];
    while (i < array1.length && j < array2.length) {
        if (array1[i] <= array2[j]) {
            merged.push(array1[i]);
            i++;
        } else {
            merged.push(array2[j]);
            j++;
        }
    }
    merged.push(...array1.slice(i));
    merged.push(...array2.slice(j));
    return merged;
}

const args = process.argv.slice(2);
if (!args.includes("fusion")) {
    console.error("Error: 'fusion' argument not found.");
    process.exit(1);
}
const array1 = args.slice(0, args.indexOf("fusion")).map(Number);
const array2 = args.slice(args.indexOf("fusion") + 1).map(Number);
console.log(sortedFusion(array1, array2));