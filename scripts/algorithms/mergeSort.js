// export async function performMergeSort(data) {
//     let animations = [];
//     await mergeSort(data, 0, data.length - 1, animations);
//     await animateSorting(animations);
// }

// async function mergeSort(data, left, right, animations) {
//     if (left >= right) return;

//     let mid = Math.floor((left + right) / 2);

//     await mergeSort(data, left, mid, animations);
//     await mergeSort(data, mid + 1, right, animations);

//     await merge(data, left, mid, right, animations);
// }

// async function merge(data, left, mid, right, animations) {
//     let n1 = mid - left + 1;
//     let n2 = right - mid;

//     let leftArray = new Array(n1);
//     let rightArray = new Array(n2);

//     for (let i = 0; i < n1; i++) {
//         leftArray[i] = data[left + i];
//     }
//     for (let j = 0; j < n2; j++) {
//         rightArray[j] = data[mid + 1 + j];
//     }

//     let i = 0, j = 0, k = left;

//     while (i < n1 && j < n2) {
//         // Comparing elements at index left + i and mid + 1 + j
//         animations.push({ type: 'compare', indices: [left + i, mid + 1 + j] });

//         if (leftArray[i] <= rightArray[j]) {
//             data[k] = leftArray[i];
//             i++;
//         } else {
//             data[k] = rightArray[j];
//             j++;
//         }
//         animations.push({ type: 'swap', indices: [k], newData: [...data] });
//         k++;
//     }

//     while (i < n1) {
//         data[k] = leftArray[i];
//         animations.push({ type: 'swap', indices: [k], newData: [...data] });
//         i++;
//         k++;
//     }

//     while (j < n2) {
//         data[k] = rightArray[j];
//         animations.push({ type: 'swap', indices: [k], newData: [...data] });
//         j++;
//         k++;
//     }
// }






// export async function performMergeSort(data, animateSorting) {
//     let animations = [];
//     await mergeSort(data, 0, data.length - 1, animations);
//     await animateSorting(animations);
// }

// async function mergeSort(data, left, right, animations) {
//     if (left >= right) return;

//     let mid = Math.floor((left + right) / 2);

//     await mergeSort(data, left, mid, animations);
//     await mergeSort(data, mid + 1, right, animations);

//     await merge(data, left, mid, right, animations);
// }

// async function merge(data, left, mid, right, animations) {
//     let n1 = mid - left + 1;
//     let n2 = right - mid;

//     let leftArray = new Array(n1);
//     let rightArray = new Array(n2);

//     for (let i = 0; i < n1; i++) {
//         leftArray[i] = data[left + i];
//     }
//     for (let j = 0; j < n2; j++) {
//         rightArray[j] = data[mid + 1 + j];
//     }

//     let i = 0, j = 0, k = left;

//     while (i < n1 && j < n2) {
//         // Comparing elements at index left + i and mid + 1 + j
//         animations.push({ type: 'compare', indices: [left + i, mid + 1 + j] });

//         if (leftArray[i] <= rightArray[j]) {
//             data[k] = leftArray[i];
//             i++;
//         } else {
//             data[k] = rightArray[j];
//             j++;
//         }
//         animations.push({ type: 'swap', indices: [k], newData: [...data] });
//         k++;
//     }

//     while (i < n1) {
//         data[k] = leftArray[i];
//         animations.push({ type: 'swap', indices: [k], newData: [...data] });
//         i++;
//         k++;
//     }

//     while (j < n2) {
//         data[k] = rightArray[j];
//         animations.push({ type: 'swap', indices: [k], newData: [...data] });
//         j++;
//         k++;
//     }
// }









// // Merge Sort algorithm implementation

// // Function to perform Merge Sort
// export async function performMergeSort(dataArray, merge, animateSorting) {
//     let animations = [];
//     await merge(dataArray, 0, dataArray.length - 1, animations);
//     await animateSorting(animations);
// }

// // Function to merge two subarrays for Merge Sort
// export async function merge(dataArray, left, right, animations) {
//     if (left >= right) return;

//     let mid = Math.floor((left + right) / 2);

//     await merge(dataArray, left, mid, animations);
//     await merge(dataArray, mid + 1, right, animations);

//     await mergeArrays(dataArray, left, mid, right, animations);
// }

// // Function to merge two arrays for Merge Sort
// async function mergeArrays(dataArray, left, mid, right, animations) {
//     let n1 = mid - left + 1;
//     let n2 = right - mid;

//     let leftArray = new Array(n1);
//     let rightArray = new Array(n2);

//     for (let i = 0; i < n1; i++) {
//         leftArray[i] = dataArray[left + i];
//     }
//     for (let j = 0; j < n2; j++) {
//         rightArray[j] = dataArray[mid + 1 + j];
//     }

//     let i = 0, j = 0, k = left;

//     while (i < n1 && j < n2) {
//         // Comparing elements at index left + i and mid + 1 + j
//         animations.push({ type: 'compare', indices: [left + i, mid + 1 + j] });

//         if (leftArray[i] <= rightArray[j]) {
//             dataArray[k] = leftArray[i];
//             i++;
//         } else {
//             dataArray[k] = rightArray[j];
//             j++;
//         }
//         animations.push({ type: 'swap', indices: [k], newData: [...dataArray] });
//         k++;
//     }

//     while (i < n1) {
//         dataArray[k] = leftArray[i];
//         animations.push({ type: 'swap', indices: [k], newData: [...dataArray] });
//         i++;
//         k++;
//     }

//     while (j < n2) {
//         dataArray[k] = rightArray[j];
//         animations.push({ type: 'swap', indices: [k], newData: [...dataArray] });
//         j++;
//         k++;
//     }
// }











// mergeSort.js

export async function performMergeSort(data, merge, animateSorting) {
    let animations = [];
    await mergeSort(data, 0, data.length - 1, animations);
    await animateSorting(animations);
}

async function mergeSort(data, left, right, animations) {
    if (left >= right) return;

    let mid = Math.floor((left + right) / 2);

    await mergeSort(data, left, mid, animations);
    await mergeSort(data, mid + 1, right, animations);

    await merge(data, left, mid, right, animations);
}

export function merge(data, left, mid, right, animations) {
    let n1 = mid - left + 1;
    let n2 = right - mid;

    let leftArray = new Array(n1);
    let rightArray = new Array(n2);

    for (let i = 0; i < n1; i++) {
        leftArray[i] = data[left + i];
    }
    for (let j = 0; j < n2; j++) {
        rightArray[j] = data[mid + 1 + j];
    }

    let i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
        if (leftArray[i] <= rightArray[j]) {
            data[k] = leftArray[i];
            animations.push({ type: 'swap', indices: [k], newData: [...data] });
            i++;
        } else {
            data[k] = rightArray[j];
            animations.push({ type: 'swap', indices: [k], newData: [...data] });
            j++;
        }
        k++;
    }

    while (i < n1) {
        data[k] = leftArray[i];
        animations.push({ type: 'swap', indices: [k], newData: [...data] });
        i++;
        k++;
    }

    while (j < n2) {
        data[k] = rightArray[j];
        animations.push({ type: 'swap', indices: [k], newData: [...data] });
        j++;
        k++;
    }
}
