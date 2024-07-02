// export async function quickSort(dataArray, left, right, updateVisualization, highlightElements) {
//     if (left < right) {
//         let partitionIndex = await partition(dataArray, left, right, updateVisualization, highlightElements);

//         await quickSort(dataArray, left, partitionIndex - 1, updateVisualization, highlightElements);
//         await quickSort(dataArray, partitionIndex + 1, right, updateVisualization, highlightElements);
//     }
// }

// async function partition(dataArray, left, right, updateVisualization, highlightElements) {
//     let pivot = dataArray[right];
//     let i = left - 1;
//     let animations = [];

//     for (let j = left; j < right; j++) {
//         animations.push({ type: 'compare', indices: [j, right] });

//         if (dataArray[j] <= pivot) {
//             i++;
//             let temp = dataArray[i];
//             dataArray[i] = dataArray[j];
//             dataArray[j] = temp;
//             animations.push({ type: 'swap', indices: [i, j], newData: [...dataArray] });
//         }
//     }

//     let temp = dataArray[i + 1];
//     dataArray[i + 1] = dataArray[right];
//     dataArray[right] = temp;
//     animations.push({ type: 'swap', indices: [i + 1, right], newData: [...dataArray] });

//     await animateSorting(animations, updateVisualization, highlightElements);
//     return i + 1;
// }



// export async function performQuickSort(data, left, right) {
//     if (left < right) {
//         let partitionIndex = await partition(data, left, right);

//         await performQuickSort(data, left, partitionIndex - 1);
//         await performQuickSort(data, partitionIndex + 1, right);
//     }
// }

// async function partition(data, left, right) {
//     let pivot = data[right];
//     let i = left - 1;
//     let animations = [];

//     for (let j = left; j < right; j++) {
//         // Comparing elements at index j and pivot (right)
//         animations.push({ type: 'compare', indices: [j, right] });

//         if (data[j] <= pivot) {
//             i++;
//             // Swap data[i] and data[j]
//             let temp = data[i];
//             data[i] = data[j];
//             data[j] = temp;
//             animations.push({ type: 'swap', indices: [i, j], newData: [...data] });
//         }
//     }

//     // Swap data[i+1] and data[right] (pivot)
//     let temp = data[i + 1];
//     data[i + 1] = data[right];
//     data[right] = temp;
//     animations.push({ type: 'swap', indices: [i + 1, right], newData: [...data] });

//     await animateSorting(animations);
//     return i + 1;
// }





// export async function performQuickSort(data, left, right, animateSorting) {
//     if (left < right) {
//         let partitionIndex = await partition(data, left, right);

//         await performQuickSort(data, left, partitionIndex - 1, animateSorting);
//         await performQuickSort(data, partitionIndex + 1, right, animateSorting);
//     }
// }

// async function partition(data, left, right) {
//     let pivot = data[right];
//     let i = left - 1;
//     let animations = [];

//     for (let j = left; j < right; j++) {
//         // Comparing elements at index j and pivot (right)
//         animations.push({ type: 'compare', indices: [j, right] });

//         if (data[j] <= pivot) {
//             i++;
//             // Swap data[i] and data[j]
//             let temp = data[i];
//             data[i] = data[j];
//             data[j] = temp;
//             animations.push({ type: 'swap', indices: [i, j], newData: [...data] });
//         }
//     }

//     // Swap data[i+1] and data[right] (pivot)
//     let temp = data[i + 1];
//     data[i + 1] = data[right];
//     data[right] = temp;
//     animations.push({ type: 'swap', indices: [i + 1, right], newData: [...data] });

//     return i + 1;
// }








// Quick Sort algorithm implementation

// Function to perform Quick Sort
export async function performQuickSort(dataArray, left, right, animateSorting, partition) {
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
