const fetchAnything = async (url) => {
    try {
        const response = await fetch(url)
        return response.json()
    } catch (error) {
        throw new Error('There was a problem retrieving the data')
    }
}

export { fetchAnything }
