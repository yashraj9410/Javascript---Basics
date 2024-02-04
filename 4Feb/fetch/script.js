// fetch method in js is used to fetch some data from a given api endpoint 
// api --> backend  holds some data
// Task -- fetch a new api and display the data 

async function fetchData() {
    try {
        // Using await to wait for the fetch operation to complete
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');  // it may take time 

        // Using await again to parse the response as JSON
        const data = await response.json();

        console.log(data)
        // Update the content of the HTML element with the fetched data
        // you will get the message cannot read undefined 
        document.getElementById('dataContainer').innerHTML = `
            <p>Title: ${data.title}</p>
            <p>Body: ${data.body}</p>        
        `;
    } catch (error) {
        // Handle errors if the fetch or any other async operation fails
        console.error(error);
    }
}

// Call the async function
fetchData();


// by default JS is synchronous in nature 
// eg your api is taking some time 