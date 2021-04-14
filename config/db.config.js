module.exports = {
    HOST: 'localhost',
    USER:'root',
    PASSWORD: 'Triyono7',
    DB:'notesdb',
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
};