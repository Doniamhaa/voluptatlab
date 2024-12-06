async function fetchData(url, request, parameter) {
    try {
        let original_response = await fetch(new Request(url, request), parameter);
        // Handle response
        console.log('Response status:', original_response.status);
        // Further processing of the response
        return original_response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
}
