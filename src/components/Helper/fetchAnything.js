const fetchAnything = (url) => {
    console.log('in fetch') 
    const fetchCall = fetch(url)
        .then(response => response.json())
        .catch(error => error.message)
        return fetchCall
}

export { fetchAnything } 