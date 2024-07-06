let reset = false;

export async function performQuickSort(dataArray, left, right, animateSorting, partition) {
    if (reset) return; // Stop sorting if reset is triggered
    if (left < right) {
        let partitionIndex = await partition(dataArray, left, right, animateSorting);

        await performQuickSort(dataArray, left, partitionIndex - 1, animateSorting, partition);
        await performQuickSort(dataArray, partitionIndex + 1, right, animateSorting, partition);
    }
}

// Function to partition array for Quick Sort
export async function partition(dataArray, left, right, animateSorting) {
    let pivot = dataArray[right];
    let i = left - 1;
    let animations = [];

    for (let j = left; j < right; j++) {
        if (reset) return; // Stop partition if reset is triggered

        // Comparing elements at index j and pivot (right)
        animations.push({ type: 'compare', indices: [j, right] });

        if (dataArray[j] <= pivot) {
            i++;
            // Swap dataArray[i] and dataArray[j]
            let temp = dataArray[i];
            dataArray[i] = dataArray[j];
            dataArray[j] = temp;
            animations.push({ type: 'swap', indices: [i, j], newData: [...dataArray] });
        }
    }

    // Swap dataArray[i+1] and dataArray[right] (pivot)
    let temp = dataArray[i + 1];
    dataArray[i + 1] = dataArray[right];
    dataArray[right] = temp;
    animations.push({ type: 'swap', indices: [i + 1, right], newData: [...dataArray] });

    await animateSorting(animations);
    return i + 1;
}

// Function to reset the quick sort
export function resetQuickSort(value) {
    reset = value;
}
