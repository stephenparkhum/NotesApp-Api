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

notesRouter
    .route('/:noteId')
    .all((req, res, next) => {
        NotesService.getById(
            req.app.get('db'),
            req.params.noteId
        )
        .then(note => {
            if (!note) {
                return res.status(404).json({
                    error: {
                        message: `Note doesn't exist!`
                    }
                });
            }
            res.note = note;
            next();
        })
        .catch(next);
    })
    .get((req, res, next) => {
        res.json(res.note);
    });

module.exports = notesRouter;