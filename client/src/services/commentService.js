import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const create = async (gameId, username, text) => {
    const newComment = await request.post(baseUrl, {
        gameId,
        username, 
        text,
    });

    return newComment;
}
