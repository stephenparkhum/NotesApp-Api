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
        .then(notes => {
            res.json(notes);
        })
        .catch(next);
    })
    .post(jsonParser, (req, res, next) => {
        const {
            title,
            content,
            modified,
            folder_id
        } = req.body;

        const newNote = {
            title,
            content, 
            modified,
            folder_id
        };

        for (const [key, value] of Object.entries(newNote)) {
            if (value == null) {
                return res.status(400).json({
                    error: {
                        message: `Missing '${key}' in request body`
                    }
                });
            }
        }

        NotesService.insertNote(
            req.app.get('db'),
            newNote
        )
        .then(note => {
            res
                .status(201)
                .json(note);
        })
        .catch(next);


    })

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
    })
    .delete((req, res, next) => {
        NotesService.deleteNote(
            req.app.get('db'),
            req.params.noteId
        )
        .then(() => {
            res.status(204).end();
        })
        .catch(next);
    });

module.exports = notesRouter;