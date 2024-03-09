async function fetchData() {
    try {
        // Using await to wait for the fetch operation to complete
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        // Using await again to parse the response as JSON
        const data = await response.json();

        // Now you can work with the data after the fetch is complete
        console.log(data);
    } catch (error) {
        // Handle errors if the fetch or any other async operation fails
        console.error(error);
    }
}

// Call the async function
fetchData();

// Code here continues executing, not blocked by the fetch operation
console.log('This code is not blocked by the async fetch operation.');
