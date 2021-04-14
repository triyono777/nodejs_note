const db = require("../models");
const Note = db.notes;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }

      const note = {
        title:req.body.title,
        description: req.body.description,
    };
    Note.create(note).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message:err.message|| 'ada masalah saat membuat note'
        });
    })
};


// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    let condition = title ? {title:{
        [Op.like]:`${title}`
    }}:null;

    Note.findAll({where:condition}).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message: err.message || 'Ada error saat get data'
        })
    })
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};
