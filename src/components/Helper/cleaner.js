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
    return cleaned;
}

const findResidents = (individualPlanets) => {
    const unresolvedPlanets = individualPlanets.map((planet) => {
        return residentUrls(planet.residents)
            .then(residents => ({...planet, residents}))
    })
    return Promise.all(unresolvedPlanets)
}

const residentUrls = (urls) => {
    const unresolvedResidents = urls.map((url) => {
        return fetchAnything(url)
        .then(residents => (residents.name))
    })
    return Promise.all(unresolvedResidents)
}

const planetCleaner = (compiledData) => {
    let cleaned = compiledData.map((planet) => {
        return {
            name: planet.name,
            terrain: planet.terrain,
            population: planet.population,
            climate: planet.climate,
            residents: planet.residents,
            favorite: false
        }
    })
    return Promise.all(cleaned)
}

const vehicleCleaner = (vehicleInfo) => {
    console.log('in vehicle')
    let cleaned = vehicleInfo.map((vehicle) => {
        return {
            name: vehicle.name,
            model: vehicle.model,
            class: vehicle.vehicle_class,
            passengers: vehicle.passengers,
            favorite: false
        }
    })
    return Promise.all(cleaned)
}

export { peopleCleaner, findHomeworld, findSpecies, findResidents, planetCleaner, residentUrls, vehicleCleaner }