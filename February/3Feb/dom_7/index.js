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
    const noneOption = new Option("None", "");
    dropdown.add(noneOption);

    // Loop through the array and create an option for each city
    cities.forEach(city => {
        const option = new Option(city, city);
        dropdown.add(option);
    });

    // Add event listener to handle the selection and styling
    dropdown.addEventListener('change', function() {
        handleSelectionStyling(this);
        updateDisabledOptions(selectId, this.value);
        // Check if both dropdowns have a selected value
    const fromSelect = document.getElementById('fromSelect');
    const toSelect = document.getElementById('toSelect');

    if (fromSelect.value !== '' && toSelect.value !== '') {
        displaySelectedValues();
    }
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
function handleSelectionStyling(dropdown) {
    const selectedOption = dropdown.options[dropdown.selectedIndex];

    // Remove any previous styling
    dropdown.style.backgroundColor = '';

    // Add styling to the selected option
    if (selectedOption.value !== "") {
        dropdown.style.backgroundColor = '#F79494'; // Light blue background color
    }
}

// Function to display selected values
function displaySelectedValues() {
    const fromSelect = document.getElementById('fromSelect');
    const toSelect = document.getElementById('toSelect');
    const selectedValuesParagraph = document.getElementById('selectedValues');

    const fromValue = fromSelect.options[fromSelect.selectedIndex].value;  //fromSelect.selectedIndex will provide the current index of options
    const toValue = toSelect.options[toSelect.selectedIndex].value;

    selectedValuesParagraph.textContent = `Selected values: From - ${fromValue}, To - ${toValue}`;
}

// Call the function to populate "From" dropdown
populateDropdown("fromSelect", indianCities);

// Call the function to populate "To" dropdown
populateDropdown("toSelect", indianCities);
