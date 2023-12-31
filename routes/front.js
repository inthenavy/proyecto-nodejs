const express = require('express');
const router = express.Router();

const {
    indexGET,
    comoComprarGET,
    contactoGET, 
    contactoPOST,
    detalleProductoGET,
    sobreNosotrosGET,
} = require('../controllers/front.js')



router.get('/', indexGET)

router.get('/como-comprar', comoComprarGET)

router.get('/contacto', contactoGET)
router.post('/contacto', contactoPOST)

router.get('/detalle-producto', detalleProductoGET)

router.get('/sobre-nosotros', sobreNosotrosGET)

module.exports = router