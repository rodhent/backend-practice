const { Router } = require('express')

const router = require('express').Router()

// @desc		Test end is working
// @route		GET /test

router.get('/', (req, res) => {
    res.status(200).json({ message: 'server is running' })
})

// @desc		Get all companies s
// @route		GET /

router.get('/', (req, res) => {
    res.status(200).json({ data: 'something' })
})

// @desc		Get a company by id
// @route		GET /:id

router.get('/:id', (req, res) => { })

// @desc		Add a new company 
// @route		POST /
router.get('/', (req, res) => { })

// @desc		Update a company by id
// @route		PATCH /:id
router.get('/:id', (req, res) => { })

// @desc		Remove a company by id
// @route		DELETE /:id
router.get('/:id', (req, res) => { })


module.exports = router


