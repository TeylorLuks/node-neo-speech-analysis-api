const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { 
      codigo: 1,
      nome: 'Teylor',
      humor: '😁',
      tma: '10:20',
      taxaResolucao: '10%',      
    },
    {
      codigo: 2,
      nome: 'Teylor',
      humor: '😁',
      tma: '10:20',
      taxaResolucao: '10%',      
    },
    {
      codigo: 3,
      nome: 'Teylor',
      humor: '😁',
      tma: '10:20',
      taxaResolucao: '10%',      
    },
    {
      codigo: 4,
      nome: 'Teylor',
      humor: '😁',
      tma: '10:20',
      taxaResolucao: '10%',      
    }
  ])  
})

module.exports = router;
