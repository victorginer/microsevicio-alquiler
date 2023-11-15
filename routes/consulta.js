var express = require('express');
var router = express.Router();

var dbCon = require('../db/mysql');


/* GET info. */
router.get('/estudiantes', function(req, res, next) {
    var objMysql = dbCon.ConexionMysql;
    

    var row = objMysql.consulta('SELECT CARNET, NOMBRE, APELLIDO FROM labo.tb_estudiante');

  
    res.render('estudiantes', { filas: row });
});

module.exports = router;
