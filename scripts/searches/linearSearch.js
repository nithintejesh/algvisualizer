export async function performLinearSearch(data, searchValue, animateSearching, updateVisualization) {
    let animations = [];

    for (let i = 0; i < data.length; i++) {
        animations.push({ type: 'compare', indices: [i] });

        if (data[i] === searchValue) {
            animations.push({ type: 'found', indices: [i] });
            break;
        }
    }

    await animateSearching(animations);
}
