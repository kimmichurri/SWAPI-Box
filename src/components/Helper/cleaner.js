import { fetchAnything } from './fetchAnything';

const findHomeworld = async(individualPeople) => {
    const unresolvedPeople = individualPeople.map(async(person) => {
        const allHomeworldInfo = await fetchAnything(person.homeworld)
        const filteredHomeworldInfo = {...person, homeworld: allHomeworldInfo.name, population: allHomeworldInfo.population}
        return filteredHomeworldInfo
    })
    return Promise.all(unresolvedPeople)
}

const findSpecies = async(individualPeople) => {
    const unresolvedPeople = individualPeople.map(async(person) => {
        const speciesInfo = await fetchAnything(person.species)
        const filteredSpeciesInfo = {...person, species: speciesInfo.name, language: speciesInfo.language}
        return filteredSpeciesInfo
    })
    return Promise.all(unresolvedPeople)
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

const findResidents = async(planets) => {
    const unresolvedResidents = planets.map(async(planet) => {
        const residentNames = await residentUrls(planet.residents)
        const compiled = {...planet, residentNames}
        return compiled
    })
    return Promise.all(unresolvedResidents)
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
            residents: planet.residentNames,
            favorite: false
        }
    })
    return cleaned
}

const vehicleCleaner = (vehicleInfo) => {
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