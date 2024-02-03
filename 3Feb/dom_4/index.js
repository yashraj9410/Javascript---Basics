// Task to populate all the cites in the select options

// Sample array of  cities
const indianCities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai",
    "Kolkata", "Ahmedabad", "Pune", "Jaipur", "Surat"
];

// createElement
// two for loops 
// we will make 1 function and call it for any number of select field

function populateDropdown(selectId, cities){
    // fetched the element (parent)
    const dropdown = document.getElementById(selectId);

    // loop through each city and make a new option corresponding to it , append that to dropdown
    cities.forEach(city => {
        const option = document.createElement('option');
        // text , value , these are the attributes 
        option.value = city
        option.text = city

        // appendChild , add 
        dropdown.add(option);
    });
}

//call the function for the select fields
populateDropdown('fromSelect',indianCities);

populateDropdown('toSelect',indianCities);
