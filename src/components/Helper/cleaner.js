import { fetchAnything } from './fetchAnything';

const findHomeworld = (individualPeople) => {
    const unresolvedPeople = individualPeople.map((person) => {
        return fetchAnything(person.homeworld)
            .then(homeworld => ({...person, homeworld: homeworld.name, population: homeworld.population}))
    })
    return Promise.all(unresolvedPeople);
}

const findSpecies = (individualPeople) => {
    const unresolvedSpecies = individualPeople.map((person) => {
        return fetchAnything(person.species)
            .then(species => ({...person, species: species.name, language: species.language}))
    })
    return Promise.all(unresolvedSpecies);
}

const peopleCleaner = (compiledData) => {
    console.log('compiled data', compiledData)
    let cleaned = compiledData.map((person) => {
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

const findResidents = (individualPlanets) => {
    console.log('findResidents')
    const unresolvedPlanets = individualPlanets.map((planet) => {
        return fetchAnything(planet.residents)
            .then(residents => ({...planet, residents: residents.name}))
    })
    console.log(Promise.all(unresolvedPlanets))
    return Promise.all(unresolvedPlanets)
}

const planetCleaner = (compiledData) => {
    console.log('planetCleaner', compiledData)
    let cleaned = compiledData.map((planet) => {
        console.log('planet')
        return {
            name: planet.name,
            terrain: planet.terrain,
            population: planet.population,
            climate: planet.climate,
            residents: planet.residents,
            favorite: false
        }
    })
    console.log('clean planet', cleaned)
    return Promise.all(cleaned)
}

export { peopleCleaner, findHomeworld, findSpecies, findResidents, planetCleaner }