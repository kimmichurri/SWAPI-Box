import { fetchAnything } from './fetchAnything';

const peopleCleaner = (compiledData) => {
    console.log('compiled data', compiledData)
    let cleaned = compiledData.map((person) => {
        console.log('person', person)
        return {
            name: person.name,
            homeworld: person.homeworld,
            species: person.species,
            population: person.population,
            language: person.language,
            favorite: false
        }
    })
    console.log('cleaned', cleaned)
    return cleaned;
}

const findHomeworld = (individualPeople) => {
    const unresolvedPeople = individualPeople.map((person) => {
        return fetchAnything(person.homeworld)
            .then(homeworld => ({...person, homeworld: homeworld.name, population: homeworld.population}))
    })
    return Promise.all(unresolvedPeople);
}

const findSpecies = (individualPeople) => {
    const unresolvedSpecies= individualPeople.map((person) => {
        return fetchAnything(person.species)
            .then(species => ({...person, species: species.name, language: species.language}))
    })
    return Promise.all(unresolvedSpecies);
}

export { peopleCleaner, findHomeworld, findSpecies }