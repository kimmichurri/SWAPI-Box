import { peopleCleaner } from './cleaner';

export default class ApiCalls {
    constructor() {

    }
    findPeople = () => {
        return fetch('https://swapi.co/api/people')
            .then(response => response.json())
            .then(data => this.fetchPeople(data.results))
            .then(uniquePeople => this.findSpecies(uniquePeople))
            .then(giantObject => peopleCleaner(giantObject))
    }
    
    fetchPeople = (individualPeople) => {
        const unresolvedPeople = individualPeople.map((person) => {
            return fetch(person.homeworld)
                .then(response => response.json())
                .then(homeworld => ({...person, homeworld: homeworld.name, population: homeworld.population}))
        })
        return Promise.all(unresolvedPeople);
    }

    findSpecies = (uniquePeople) => {
        const unresolvedSpecies= uniquePeople.map((person) => {
            return fetch(person.species)
                .then(response => response.json())
                .then(species => ({...person, species: species.name}))
        })
        return Promise.all(unresolvedSpecies);
    }
}
