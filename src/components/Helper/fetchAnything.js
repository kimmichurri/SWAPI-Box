const fetchAnything = (url) => {
    return fetch(url)
        .then(response => { 
                if(!response.ok) {
                    throw new Error('Response not okay')
                }
                return response.json()
            })
}

export { fetchAnything } 

//in whichever component you are calling this in, make sure you mock out this fetchAnything function so that you can assert this it was called