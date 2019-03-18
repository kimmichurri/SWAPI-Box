const fetchAnything = async (url) => { 
    try {
        const response = await fetch(url)
        return response.json()
    } catch (error) {
        throw new Error('Response not okay')
    }        
}

export { fetchAnything } 

//in whichever component you are calling this in, make sure you mock out this fetchAnything function so that you can assert this it was called