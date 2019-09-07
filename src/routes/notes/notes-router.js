const express = require('express');
const xss = require('xss');
const NotesService = require('./notes-service');

const jsonParser = express.json()

const notesRouter = express.Router();

notesRouter
    .route('/')
    .get((req, res, next) => {
        NotesService.getAllNotes(
            req.app.get('db')
        )
        .then(folders => {
            res.json(folders);
        })
        .catch(next);
    });


module.exports = notesRouter;