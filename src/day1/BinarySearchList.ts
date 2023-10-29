export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    do {
        const m = Math.floor(lo + (hi - lo) / 2);

        const v = haystack[m];

        if (v === needle) {
            return true;
        } else if (v > needle) {
            hi = m;
        } else {
            lo = m + 1;
        }
    } while (lo < hi);

    return false;
}

//or we can code also this type
function binarySearch(arr: number[], target: number) {
    let startIdx = 0;
    let endIdx = arr.length - 1;

    while (startIdx <= endIdx) {
        const middleIdx = Math.floor((startIdx + endIdx) / 2);

        if (arr[middleIdx] === target) return middleIdx; // Target found
        if (arr[middleIdx] < target)
            startIdx = middleIdx + 1; // Adjust the search range to the right
        else endIdx = middleIdx - 1; // Adjust the search range to the left
    }

    return -1; // Target not found
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const targetElement = 13;

const result = binarySearch(
    [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420],
    69420,
);

console.log({ result });
