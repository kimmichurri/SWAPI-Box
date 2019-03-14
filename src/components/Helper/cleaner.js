const peopleCleaner = (compiledData) => {
    console.log('compiled data', compiledData)
    let cleaned = compiledData.map((person) => {
        console.log('person', person)
        return {
            name: person.name,
            homeworld: person.homeworld,
            species: person.species,
            population: person.population
        }
    })
    console.log('cleaned', cleaned)
    return cleaned;
}

export { peopleCleaner }