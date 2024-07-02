// Function to perform Counting Sort
export async function performCountingSort(dataArray, updateVisualization, animateSorting) {
    let animations = [];
    let n = dataArray.length;

    // Find the maximum value in the array
    let max = Math.max(...dataArray);

    // Initialize count array with zeros
    let count = new Array(max + 1).fill(0);

    // Store the count of each element
    for (let i = 0; i < n; i++) {
        count[dataArray[i]]++;
    }

    // Modify the count array to store the actual position of the elements
    for (let i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    let output = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
        let value = dataArray[i];
        let index = count[value] - 1;
        output[index] = value;
        animations.push({ type: 'swap', indices: [i, index], newData: [...output] });
        count[value]--;
    }

    // Copy the sorted elements back to the original array
    for (let i = 0; i < n; i++) {
        dataArray[i] = output[i];
        animations.push({ type: 'swap', indices: [i, i], newData: [...dataArray] });
    }

    // Perform animations
    await animateSorting(animations);
}
