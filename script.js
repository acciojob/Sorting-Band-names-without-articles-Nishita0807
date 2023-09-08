//your code here
// Define the array of band names
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Function to remove articles and return a cleaned name
function removeArticles(name) {
    return name.replace(/^(a|an|the)\s+/i, '');
}

// Remove articles and sort the array
touristSpots = touristSpots.map(removeArticles).sort();

// Function to generate the HTML list
function generateBandList() {
    const ul = document.getElementById('band');
    
    // Clear any existing list items
    ul.innerHTML = '';
    
    // Create and append list items
    touristSpots.forEach(function (spot) {
        const li = document.createElement('li');
        li.textContent = spot;
        ul.appendChild(li);
    });
}

// Call the function to generate the HTML list
generateBandList();

