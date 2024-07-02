export async function performInsertionSort(dataArray, updateVisualization, animateSorting) {
    let n = dataArray.length;
    let animations = [];

    for (let i = 1; i < n; i++) {
        let key = dataArray[i];
        let j = i - 1;

        animations.push({ type: 'compare', indices: [i, j] }); // Highlight the key element being compared

        while (j >= 0 && dataArray[j] > key) {
            // Perform swap visually
            dataArray[j + 1] = dataArray[j];
            animations.push({ type: 'swap', indices: [j, j + 1], newData: [...dataArray] });
            j--;

            if (j >= 0) {
                animations.push({ type: 'compare', indices: [i, j] }); // Highlight the next element being compared
            }
        }

        // Place the key element in its correct position
        dataArray[j + 1] = key;
        animations.push({ type: 'swap', indices: [j + 1, j + 1], newData: [...dataArray] });
    }

    // Perform animations
    await animateSorting(animations);
}

