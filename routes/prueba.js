var GeoJSON = require('geojson');
var logger = require("../utils/logger");
const Router = require('express-promise-router');
var pool = require("../db");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const router = new Router();
module.exports = router;

router.get('/totales', async (req, res) => {
//    if (typeof req.query.dist !== 'undefined' && req.query.dist.length > 0) {
//        
//    } else {
//    }
//    var time = await pool.query("$1", [propiedad]);
    var time = await pool.query("SELECT * FROM imp.web_ddi_ref_distrito");
    res.jsonp(time.rows);
    ;
});

router.post('/total', jsonParser, async (req, res)=> {
    query2 = "";
    consulta = "";
    var prom = [];
    var categ = [];
    var total = [];
    if (typeof req.body.inicio !== 'undefined') {
    } else {
        return res.status(500).send('ERRROOOOOOOR');
    }
    
    query2=  query2.concat(consulta).concat(" group by 1 order by 1;");
    var sum = await pool.query(query2);
    logger.debug(sum.rows);
    for (i = 0; i < result.rows.length; i++) {
        if (i === (result.rows.length - 1)) {
            prom.push({'dataLabels': {'enabled': true, 'align': 'left', 'style': { 'fontWeight': 'bold' },'x': 3, 'verticalAlign': 'middle', 'overflow': true,'crop': false},'y':(Math.floor(sum.rows[0]['cantidad']))});
        } else {
            prom.push(Math.floor(sum.rows[0]['cantidad']));
        }
    }
    return res.jsonp({"categories": categ, "datos": [{'name': 'Total',dataLabels: {enabled: true}, 'data': total}, {'name': 'Promedio', 'data': prom}]});
});
