import { useEffect } from 'react';
import { useWorkoutsContext } from '../hooks/useWorksContext';
import WorkoutDetails from '../components/WorkoutDetails';
import Workoutform from '../components/Workoutform';

const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json() 

            if (response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json })
            }
        }
        fetchWorkouts()
    }, [dispatch])
    return (
        <div className="home">  
            <div className='workouts'>
                {workouts && workouts.map((workout) => (
                        <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <Workoutform />
        </div>
    )
};

export default Home

/*

**** code before changing state
import { useEffect, useState } from 'react';
import WorkoutDetails from '../components/WorkoutDetails';
import Workoutform from '../components/Workoutform';

const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json() 

            if (response.ok) {
                setWorkouts(json)
            }
        }
        fetchWorkouts()
    }, [])
    return (
        <div className="home">  
            <div className='workouts'>
                {workouts && workouts.map((workout) => (
                        <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <Workoutform />
        </div>
    )
};

export default Home
            const response = await fetch('http://localhost:4000/api/workouts')

 */