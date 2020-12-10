'use strict';
const Express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const buildSchema = require('graphql').buildSchema;
const Fs = require('fs')
const Path = require('path');
const DB = require('./db');

const query = function (sql, params = []) {
    return new Promise((resolve, reject) => {
        DB.get(sql, params, (err, row) => {
            if(err) return reject(err);
            return resolve(row);
        });
    });
}

const rootValue = {
    post({ id }) {
        return query('SELECT * FROM POSTS WHERE id = ' + id);
    }
};

const app = Express();

app.use(graphqlHTTP({
    schema: buildSchema(Fs.readFileSync(Path.join(__dirname, 'schema.gql')).toString()),
    rootValue,
    graphiql: true,
}));

app.listen(8080, () => {
    console.log('App listening on port 8080');
});

