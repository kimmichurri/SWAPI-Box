import React from 'react';
import { fetchAnything } from './fetchAnything';

describe('fetchAnything', () => {
    let mockData;

    beforeEach(() => {
        mockData = {
            film: "A New Hope"
        }
    
        fetch = jest.fn().mockImplementation(() => Promise.resolve({
            ok: true,
            status: 200,
            json: () => Promise.resolve(mockData)
        }));
    })

it('fetch is called with correct url', () => {
    const mockUrl = 'www.starwars.com'
    fetchAnything(mockUrl);
    expect(fetch).toHaveBeenCalledWith(mockUrl);
});

it('fetch call returns expected data', () => {
    const mockUrl = 'www.starwars.com'
    fetchAnything(mockUrl)
        .then(data => {
            expect(data).toEqual(mockData);
        })
})

it('if response is not okay show error', () => {
    const mockUrl = 'www.starwars.com'
    fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
        ok: false
    }));
    fetchAnything(mockUrl)
        .catch(error => {
            expect(error.message).toBe('Response not okay')
        })
    });
});