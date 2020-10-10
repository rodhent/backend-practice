const router = require('express').Router()
const Company = require('../models/Companies.js')

// @desc		Test end is working
// @route		GET /test

router.get('/test', (req, res) => {
    res.status(200).json({ message: 'server is running' })
})

// @desc		Get all companies s
// @route		GET /

router.get('/', (req, res) => {
    // company.find((err, data) => {
    //     if (err) {
    //         res.status(500).send(err)
    //     } else {

    //     }
    // })

    Company.find()
     .then(companies => res.json(companies))
     .catch(err => res.status(400).json(`Error: ${error}`))   
})

// @desc		Get a company by id
// @route		GET /:id

router.get('/:id', (req, res) => { })

// @desc		Add a new company 
// @route		POST /
router.post('/', (req, res) => {
    const newCompanies = new Company({
        name: req.body.name,
        ticker: req.body.ticker,
        price: req.body.price,
        listed: req.body.listed
    })

    newCompanies
     .save()
     .then(() => res.json(newCompanies))
     .catch(err => res.status(400).json(`Error: ${err}`))
 })

// @desc		Update a company by id
// @route		PATCH /:id
router.get('/:id', (req, res) => { 
    Company.findById(req.params.id)
     .then(company => res.json(company))
     .catch(err => res.status(400).json(`Error: ${err}`))
})

// @desc		Remove a company by id
// @route		DELETE /:id
router.delete('/:id', (req, res) => { 
    Company.findByIdAndDelete(req.params.id)
    .then(() => res.json(`is deleted`))
    .catch(err => res.status(400).json(`Error: ${err}`))

})


module.exports = router


