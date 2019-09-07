const express = require('express');
const xss = require('xss')

const jsonParser = express.json()

const foldersRouter = express.Router();

foldersRouter
    .router('/')
    .get((req, res, next) => {
        console.log('All folders route is working!');
    });


module.exports = foldersRouter;