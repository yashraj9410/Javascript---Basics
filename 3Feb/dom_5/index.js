// Task --> When a city is selected from the From options then it should be disabled in the TO option.

// Sample array of Indian cities
const indianCities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai",
    "Kolkata", "Ahmedabad", "Pune", "Jaipur", "Surat"
];

// Function to populate dropdown options
function populateDropdown(selectId, cities) {
    // Select the dropdown by its ID
    const dropdown = document.getElementById(selectId);

    // Add an initial "None" option
    const noneOption = new Option("Select City", "");
    dropdown.add(noneOption);

    // Loop through the array and create an option for each city
    cities.forEach(city => {
        const option = new Option(city, city);
        dropdown.add(option);
    });

    // Add event listener to disable the selected city in the other dropdown
    dropdown.addEventListener('change', function() {
        updateDisabledOptions(selectId, this.value);
    });
}

// Function to update disabled options in the other dropdown
function updateDisabledOptions(selectId, selectedCity) {
    // check if we are on from or To
    const otherSelectId = selectId === 'fromSelect' ? 'toSelect' : 'fromSelect';

    //fetch the corresponding dropdown
    const otherDropdown = document.getElementById(otherSelectId);

    for (let i = 0; i < otherDropdown.options.length; i++) {
        // fetch the complete option element 
        const option = otherDropdown.options[i];

        // now compare the value asociated with that option
        if (option.value === selectedCity) {
            option.disabled = true;
        } else {
            option.disabled = false;
        }
    }
}

// Call the function to populate "From" dropdown
populateDropdown("fromSelect", indianCities);

// Call the function to populate "To" dropdown
populateDropdown("toSelect", indianCities);
