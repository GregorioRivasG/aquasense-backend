//Rutas de las peceras

const express = require('express');
const router = express.Router();
const {
  createTank,
  getTanks,
  getTankById,
  updateTank,
  deleteTank
} = require('../controllers/tanks');

router.post('/', createTank);
router.get('/', getTanks);
router.get('/:id', getTankById);
router.put('/:id', updateTank);
router.delete('/:id', deleteTank);


module.exports = router;
