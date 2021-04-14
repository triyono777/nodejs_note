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
        [Op.like]:`%${title}%`
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
  const id = req.params.id;

  Note.findByPk(id).then(data=>{
      res.send(data);
  }).catch(err=>{
      res.status(500).send({
          message:'gagal menerima note with id= '+id
      });
  });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Note.update(req.body,{
      where:{id:id}
  }).then(num=>{
      if (num==1){
          res.send({
              message:'Note berhasil diupdate'
          });
      }else{
          res.send({
              message:`tidak dapat update note dengan id=${id} . note tidak ditemukan`
          })
      }
  }).catch(err=>{
      res.send({
          message: 'error update note with id='+id
      });
  });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Note.destroy({
        where:{id:id}
    }).then(num=>{
        if(num ==1){
            res.send({
                message: 'note berhasil di hapus'
            });
        }else{
            res.send({
                message: 'note tidak bisa dihapus, note not found'
            });
        }
    }).catch(err=>{
        res.status(500).send({
            message:'tidak bisa delete note with id='+id
        });
    });
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Note.destroy({
      where:{},
      truncate: false
  }).then(nums=>{
      res.send({message: `${nums} note berhasil didelete`})
  }).catch(err=>{
      res.status(500).send({
          message: err.message || 'terdapat error saat hapus semua note'
      })
  })
};

