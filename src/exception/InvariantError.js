/* eslint-disable linebreak-style */
/* eslint-disable space-before-blocks */
/* eslint-disable indent */
/* eslint-disable eol-last */
const ClientError = require('./ClientError');

class InvariantError extends ClientError{
    constructor(message){
        super(message);
        this.name = 'InvariantError';
    }
}

module.exports = InvariantError;