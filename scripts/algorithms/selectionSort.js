// Function to perform Selection Sort
export async function performSelectionSort(dataArray, updateVisualization, animateSorting) {
    let n = dataArray.length;
    let animations = [];

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            // Highlight the elements being compared
            animations.push({ type: 'compare', indices: [minIndex, j] });

            if (dataArray[j] < dataArray[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            // Swap the elements
            let temp = dataArray[minIndex];
            dataArray[minIndex] = dataArray[i];
            dataArray[i] = temp;

            animations.push({ type: 'swap', indices: [i, minIndex], newData: [...dataArray] });
        }
    }

    // Perform animations
    await animateSorting(animations);
}
