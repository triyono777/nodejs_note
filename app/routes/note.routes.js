module.exports = app =>{
    const note = require('../controllers/note.controller');
let router = require('express').Router();
router.post('/',note.create);
app.use('/api/notes',router);

};