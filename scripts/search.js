

import { performLinearSearch } from './searches/linearSearch.js';
import { performBinarySearch } from './searches/binarySearch.js';

let dataArray = []; // Global variable to store data array
let animationSpeed = 500; // Initial animation speed (milliseconds)

// D3.js setup for visualization
const svg = d3.select('#visualization')
    .attr('width', '100%')
    .attr('height', '100%');
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
const sideMargin = 20; // Side margin for left and right

// Function to update visualization based on data
function updateVisualization(data) {
    const containerWidth = document.querySelector('.svg-container').offsetWidth;
    const containerHeight = document.querySelector('.svg-container').offsetHeight;

    const barWidth = Math.min((containerWidth - 2 * sideMargin) / data.length, 50); // Dynamic bar width
    const maxDataValue = Math.max(...data);
    const barHeightFactor = (containerHeight - margin.top - margin.bottom) / maxDataValue; // Adjusted for top and bottom margin

    // Calculate total width occupied by bars
    const totalBarWidth = data.length * barWidth;

    // Calculate starting position to center bars if less than container width
    let startX = Math.max((containerWidth - totalBarWidth) / 2, sideMargin);

    // Remove existing bars
    svg.selectAll('rect').remove();

    // Create new bars
    svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', (d, i) => {
            if (totalBarWidth + 2 * sideMargin < containerWidth) {
                // Center bars when less than container width
                return startX + i * barWidth;
            } else {
                // Start from the beginning as bars exceed container width
                return sideMargin + i * barWidth;
            }
        })
        .attr('y', d => containerHeight - margin.bottom - d * barHeightFactor) // Adjusted for bottom margin and scaling
        .attr('width', barWidth - 1)
        .attr('height', d => d * barHeightFactor)
        .attr('fill', 'steelblue');
}

// Function to perform searching animation based on selected algorithm
async function performSearch(algorithm, searchValue) {
    switch (algorithm) {
        case 'linearSearch':
            await performLinearSearch(dataArray, searchValue, animateSearching, updateVisualization);
            break;
        case 'binarySearch':
            await performBinarySearch(dataArray, searchValue, animateSearching, updateVisualization);
            break;
        default:
            console.error('Unsupported algorithm:', algorithm);
            return;
    }
}

// Function to animate searching process
async function animateSearching(animations) {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    for (let i = 0; i < animations.length; i++) {
        const { type, indices, newData } = animations[i];

        switch (type) {
            case 'compare':
                highlightElements(indices, 'compare');
                break;
            case 'found':
                highlightElements(indices, 'found');
                break;
            default:
                console.error('Unknown animation type:', type);
        }

        await delay(animationSpeed);
    }

    // Reset all bars to steelblue after searching completion
    svg.selectAll('rect')
        .attr('fill', 'steelblue');
}

// Function to highlight elements during animation
function highlightElements(indices, type) {
    svg.selectAll('rect')
        .attr('fill', (d, i) => {
            if (indices.includes(i)) {
                return type === 'compare' ? 'red' : 'green';
            }
            return 'steelblue';
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
    let searchValue = parseInt(document.getElementById('search-value').value, 10);
    performSearch(algorithm, searchValue);
});

document.getElementById('reset-btn').addEventListener('click', () => {
    // Reset data and visualization
    updateVisualization([]);
    dataArray = [];
});

document.getElementById('speed').addEventListener('input', () => {
    // Adjust animation speed based on range input value
    animationSpeed = 1100 - parseInt(document.getElementById('speed').value);
});

// Add event listener for window resize
window.addEventListener('resize', handleResize);




