const express = require('express');
const xss = require('xss')

const jsonParser = express.json()

const notesRouter = express.Router();

notesRouter
    .router('/')
    .get((req, res, next) => {
        console.log('All notes route is working!');
    });


module.exports = foldersRouter;