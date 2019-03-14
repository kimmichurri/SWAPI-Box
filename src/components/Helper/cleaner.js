const peopleCleaner = (giantObj) => {
    let cleaned = giantObj.map((person) => {
        console.log(person)
        return {
            name: person.name,
            homeworld: person.homeworld,
            species: person.species,
            population: person.population
        }
    })
    console.log(cleaned)
    return cleaned;
}

export { peopleCleaner }