
module.exports = (sequelize, Sequelize)=>{
    const Note  = sequelize.define("note",{
        title:{
            type: Sequelize.STRING
        },
        descrpition:{
            type: Sequelize.STRING
        },
        published:{
            type: Sequelize.BOOLEAN
        }
    });
    return Note;
};