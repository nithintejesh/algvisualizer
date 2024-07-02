// js/searches/binarySearch.js

// Binary Search algorithm with animation
export async function performBinarySearch(data, searchValue, animateSearching, updateVisualization) {
    let animations = [];
    let left = 0;
    let right = data.length - 1;

    data.sort((a, b) => a - b); // Ensure the array is sorted for binary search
    updateVisualization(data); // Update the visualization with the sorted array

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        animations.push({ type: 'compare', indices: [mid] });

        if (data[mid] === searchValue) {
            animations.push({ type: 'found', indices: [mid] });
            break;
        } else if (data[mid] < searchValue) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    await animateSearching(animations);
}
