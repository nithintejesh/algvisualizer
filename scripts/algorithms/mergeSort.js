
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

// export function merge(data, left, mid, right, animations) {
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
//         // Compare both bars, highlight in red
//         animations.push({ type: 'compare', indices: [left + i, mid + 1 + j] });

//         if (leftArray[i] <= rightArray[j]) {
//             data[k] = leftArray[i];
//             animations.push({ type: 'swap', indices: [k], newData: [...data] });
//             i++;
//         } else {
//             data[k] = rightArray[j];
//             animations.push({ type: 'swap', indices: [k], newData: [...data] });
//             j++;
//         }
//         k++;
//     }

//     // Copy remaining elements from leftArray, if any
//     while (i < n1) {
//         data[k] = leftArray[i];
//         animations.push({ type: 'swap', indices: [k], newData: [...data] });
//         i++;
//         k++;
//     }

//     // Copy remaining elements from rightArray, if any
//     while (j < n2) {
//         data[k] = rightArray[j];
//         animations.push({ type: 'swap', indices: [k], newData: [...data] });
//         j++;
//         k++;
//     }
// }


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
        animations.push({ type: 'compare', indices: [left + i, mid + 1 + j] });

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

