const fetchAnything = async (url) => {
    try {
        const response = await fetch(url)
        return response.json()
    } catch (error) {
        // this.props.errorStatus('There was a problem retrieving the data')
        throw new Error('There was a problem retrieving the data')
    }
}

export { fetchAnything }
