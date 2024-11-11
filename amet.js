function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Data fetched successfully', data);
            return 0; // Success code
        })
        .catch(error => {
            console.error('Fetch error:', error);
            return 1; // Error code
        });
}

fetchData('https://api.example.com/data')
    .then(code => {
        console.log("exited with code", code);
    });
