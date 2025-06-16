const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const { body } = require("express-validator")

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn([ 'car', 'motorcycle', 'auto' ]).withMessage('Invalid vehicle type')
],
    captainController.registerCaptain
)

// {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODRmYzBiMjU4N2Q2YTdjZTcwMDE3NDYiLCJpYXQiOjE3NTAwNTcxMzksImV4cCI6MTc1MDE0MzUzOX0.09QZCk7v6hoeDI5rLBMDYYeTmDlS5eVLrjQHdudY_I8","captain":{"fullname":{"firstname":"captain1_fn","lastname":"captain1_ln"},"email":"captain1@email1.com","password":"$2b$10$l1vrL/R9XbKep/2GeKsxnehKj0ew/oxize72YBFUAx5XaC1gOds56","status":"inactive","vehicle":{"color":"red","plate":"DL 04 AC 1234","capacity":3,"vehicleType":"car"},"_id":"684fc0b2587d6a7ce7001746","__v":0}}


module.exports = router;