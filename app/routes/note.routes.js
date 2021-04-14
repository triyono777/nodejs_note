module.exports = app =>{
    const note = require('../controllers/note.controller');
let router = require('express').Router();
router.post('/',note.create);
router.get('/',note.findAll);
router.get('/:id',note.findOne);
router.put('/:id',note.update);
router.delete('/:id',note.delete);
router.delete('/',note.delete);
app.use('/api/notes',router);

};