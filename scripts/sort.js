import { performBubbleSort } from './algorithms/bubbleSort.js';
import { performQuickSort, partition } from './algorithms/quickSort.js';
import { resetQuickSort } from './algorithms/quickSort.js';
import { performMergeSort } from './algorithms/mergeSort.js';
import { merge } from './algorithms/mergeSort.js';
import { performSelectionSort } from './algorithms/selectionSort.js';
import { performInsertionSort } from './algorithms/insertionSort.js';
import { performCountingSort } from './algorithms/countingSort.js';

let dataArray = [];
let animationSpeed = 500; // Initial animation speed (milliseconds)
let reset = false;

// D3.js setup for visualization
const svg = d3.select('#visualization')
    .attr('width', '100%')
    .attr('height', '100%');
const margin = { top: 20, right: 20, bottom: 30, left: 40 };
const sideMargin = 20; // Side margin for left and right

function updateVisualization(data) {
    const containerWidth = document.querySelector('.svg-container').offsetWidth;
    const containerHeight = document.querySelector('.svg-container').offsetHeight;

    const barWidth = Math.min((containerWidth - 2 * sideMargin) / data.length, 50); // Dynamic bar width
    const maxDataValue = Math.max(...data);
    const barHeightFactor = (containerHeight - margin.top - margin.bottom) / maxDataValue; // Adjusted for top and bottom margin

    // Calculate total width occupied by bars including side margins
    const totalBarWidth = data.length * barWidth;

    // Calculate starting position to include side margins
    let startX = Math.max((containerWidth - totalBarWidth) / 2, sideMargin);

    // Remove existing bars and text
    svg.selectAll('rect').remove();
    svg.selectAll('text').remove();

    // Create new bars
    svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', (d, i) => {
            if (totalBarWidth + 2 * sideMargin < containerWidth) {
                // Center bars when less than container width including side margins
                return startX + i * barWidth;
            } else {
                // Start from the beginning as bars exceed container width including side margins
                return sideMargin + i * barWidth;
            }
        })
        .attr('y', d => containerHeight - margin.bottom - d * barHeightFactor) // Adjusted for bottom margin and scaling
        .attr('width', barWidth - 1)
        .attr('height', d => d * barHeightFactor)
        .attr('fill', 'steelblue');

    // Create new text labels
    svg.selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .text(d => d)
        .attr('x', (d, i) => {
            if (totalBarWidth + 2 * sideMargin < containerWidth) {
                // Center text when less than container width including side margins
                return startX + i * barWidth + (barWidth - 1) / 2;
            } else {
                // Start from the beginning as bars exceed container width including side margins
                return sideMargin + i * barWidth + (barWidth - 1) / 2;
            }
        })
        .attr('y', d => containerHeight - margin.bottom - d * barHeightFactor - 5) // Adjusted for bottom margin and scaling
        .style('text-anchor', 'middle')
        .style('fill', 'black')
        .style('font-size', `${Math.min((containerWidth - 2 * sideMargin) / data.length / 3, 12)}px`)
        .style('font-family', "Arial, Helvetica, sans-serif");
}

// Function to perform sorting animation based on selected algorithm
async function performSort(algorithm) {
    reset = false; // Reset the reset state before starting a new sort

    switch (algorithm) {
        case 'bubbleSort':
            await performBubbleSort(dataArray, updateVisualization, animateSorting);
            break;
        case 'quickSort':
            await performQuickSort(dataArray, 0, dataArray.length - 1, animateSorting, partition);
            break;
        case 'mergeSort':
            await performMergeSort(dataArray, merge, animateSorting);
            break;
        case 'selectionSort':
            await performSelectionSort(dataArray, updateVisualization, animateSorting);
            break;
        case 'insertionSort':
            await performInsertionSort(dataArray, updateVisualization, animateSorting);
            break;
        case 'countingSort':
            await performCountingSort(dataArray, updateVisualization, animateSorting);
            break;
        default:
            console.error('Unsupported algorithm:', algorithm);
            return;
    }
}

// Function to animate sorting process
async function animateSorting(animations) {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    for (let i = 0; i < animations.length; i++) {
        if (reset) {
            break; // Stop animation if reset is triggered
        }

        const { type, indices, newData } = animations[i];

        switch (type) {
            case 'compare':
                highlightElements(indices, 'compare');
                break;
            case 'swap':
                dataArray = newData;
                updateVisualization(dataArray);
                highlightElements(indices, 'swap');
                break;
            default:
                console.error('Unknown animation type:', type);
        }

        await delay(animationSpeed);
    }

    // Reset all bars to steelblue after sorting completion
    svg.selectAll('rect')
        .attr('fill', 'steelblue');
}

// Function to highlight elements during animation
function highlightElements(indices, type) {
    svg.selectAll('rect')
        .attr('fill', (d, i) => {
            return indices.includes(i) ? (type === 'compare' ? 'red' : 'green') : 'steelblue';
        });
}

// Function to handle window resize
function handleResize() {
    if (dataArray.length > 0) {
        updateVisualization(dataArray);
    }
}

// Event listeners
document.getElementById('visualize-btn').addEventListener('click', () => {
    let input = document.getElementById('array-input').value.trim();
    dataArray = input.split(' ').map(Number);
    updateVisualization(dataArray);
});

document.getElementById('start-btn').addEventListener('click', () => {
    let algorithm = document.getElementById('algorithm').value;
    
    if(algorithm === "quickSort"){
        reset = false;
        console.log(reset);
        resetQuickSort(reset); 
    }
    performSort(algorithm);
});

document.getElementById('reset-btn').addEventListener('click', () => {
    reset = true;
    resetQuickSort(reset);
    updateVisualization([]);
    dataArray = [];
});

document.getElementById('speed').addEventListener('input', () => {
    animationSpeed = 1100 - parseInt(document.getElementById('speed').value);
});

window.addEventListener('resize', handleResize);

