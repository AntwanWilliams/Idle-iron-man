const express = require('express');
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout

} = require('../controllers/workoutController')

const router = express.Router();

//get all workouts
router.get('/', getWorkouts)

// GET A single workout
router.get('/:id', getWorkout)

//POST a new workout
router.post('/', createWorkout)

    //res.json({meeg: "POST a new workout"})

//DELETE a new workout
router.delete('/:id', deleteWorkout)

//update a work out
router.patch('/:id', updateWorkout)

module.exports = router




/*
//get all workouts
router.get('/', (req, res) => {
    res.json({meeg: "Get all workouts"})
})

// GET A single workout
router.get('/:id', (req, res) => {
    res.json({meeg: "Get a single workout"})
})

//POST a new workout
router.post('/', async (req, res) => {

    //res.json({meeg: "POST a new workout"})
})

//DELETE a new workout
router.delete('/:id', (req, res) => {
    res.json({meeg: "delete a workout"})
})

//update a work out
router.patch('/:id', (req, res) => {
    res.json({meeg: "upadte a workout"})
})

module.exports = router 
*/