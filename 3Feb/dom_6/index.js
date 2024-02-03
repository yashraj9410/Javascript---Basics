// Task -- > Add some styling , add a background colour to the selected option 
// Task --> make four divs , add a button in each div , on button click change the backgroung colour 

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
    // const noneOption = document.createElement('option');
    // noneOption.value = "";
    // noneOption.text = "None";
    // dropdown.appendChild(noneOption);
    
    const noneOption = new Option("None", "");  // two parameters textContent and value
    dropdown.add(noneOption);

    // Loop through the array and create an option for each city
    cities.forEach(city => {
        const option = new Option(city, city);
        dropdown.add(option);
    });

    // Add event listener to handle the selection and styling
    dropdown.addEventListener('change', function() {
        handleSelectionStyling(this);  // this is holding the current option
        updateDisabledOptions(selectId, this.value);  // sending only the value asociated with the option
    });

    // Initial styling
    handleSelectionStyling(dropdown);
}

// Function to update disabled options in the other dropdown
function updateDisabledOptions(selectId, selectedCity) {
    const otherSelectId = selectId === 'fromSelect' ? 'toSelect' : 'fromSelect';
    const otherDropdown = document.getElementById(otherSelectId);

    for (let i = 0; i < otherDropdown.options.length; i++) {
        const option = otherDropdown.options[i];
        if (option.value === selectedCity) {
            option.disabled = true;
        } else {
            option.disabled = false;
        }
    }
}

// Function to handle styling of the selected option
function handleSelectionStyling(dropdown) {   // dropdown  == current option
    const selectedOption = dropdown.options[dropdown.selectedIndex];

    // Remove any previous styling
    dropdown.style.backgroundColor = '';

    // Add styling to the selected option
    if (selectedOption.value !== "") {
        dropdown.style.backgroundColor = '#F79494'; // Light blue background color
        // you can get any color code on google
    }
}

// Call the function to populate "From" dropdown
populateDropdown("fromSelect", indianCities);

// Call the function to populate "To" dropdown
populateDropdown("toSelect", indianCities);
