import { request } from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/games'

export const getAll = async () => {
    const result = await request('GET', baseUrl);

    return Object.values(result);
};

export const create = async (gameData) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(gameData)
    });

    const result = await response.json();

    return result;
};


