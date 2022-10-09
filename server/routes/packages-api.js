const express = require('express')
const router = express.Router()
const {
  getPackages,
  filterPackages,
  getPackage,
} = require('../db/queries/packages')

/* GET home page. */
router.get('/', function (req, res) {
  const eachQuery = req.query.offset
  console.log('EEEEEEEE', eachQuery)
  getPackages(eachQuery).then((data) => {
    res.json({ data })
  })
})

router.get('/filter', function (req, res) {
  const filterParams = req.query
  filterPackages(filterParams)
    // .then(() => console.log('test@@@@@@@'))
    .then((data) => {
      res.json({ data })
    })
})

router.get('/:id', function (req, res) {
  let id = req.params.id
  getPackage(id).then((data) => {
    res.json({ data })
  })
})

module.exports = router
