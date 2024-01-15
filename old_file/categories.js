// categories.js
var categories = {
    'Natural Landscapes': 'green',
    'Coast and Beaches': 'blue',
    'Cultural and Religion': 'red',
    'Lakes and Waterfalls': 'purple',
    'Wildlife and Safari': 'orange',
    'Historical Sites': 'yellow'
};

// Function to get category color
function getCategoryColor(category) {
    return categories[category] || 'gray'; // Default color for unknown category
}

// Export the necessary variables and functions
export { categories, getCategoryColor };
