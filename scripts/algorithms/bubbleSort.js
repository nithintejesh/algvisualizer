// Function to perform Bubble Sort
export async function performBubbleSort(dataArray, updateVisualization, animateSorting) {
    let n = dataArray.length;
    let animations = [];

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // Comparing elements at index j and j+1
            animations.push({ type: 'compare', indices: [j, j + 1] });

            if (dataArray[j] > dataArray[j + 1]) {
                // Swapping elements
                let temp = dataArray[j];
                dataArray[j] = dataArray[j + 1];
                dataArray[j + 1] = temp;
                animations.push({ type: 'swap', indices: [j, j + 1], newData: [...dataArray] });
            }
        }
    }

    // Perform animations
    await animateSorting(animations);
}

