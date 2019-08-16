import React from 'react'
import { withUser } from '../../context/UserProvider.js'

const MonthlyBookForm = (props) => {
    const { handleChange, ageInMonths } = props
    return(
        <div className="monthly-div">
            <div 
                className="book month-one"
                onClick={handleChange}
                value={1}
                name={ageInMonths}
                >My baby's 1st month story book</div>
            <div 
                className="book month-two"
                onClick={handleChange}
                value={2}
                name={ageInMonths}
                >My baby's 2nd month story book</div>
            <div 
                className="book month-three"
                onClick={handleChange}
                value={3}
                name={ageInMonths}
                >My baby's 3rd month story book </div>
            <div 
                className="book month-four"
                onClick={handleChange}
                value={4}
                name={ageInMonths}
                >My baby's 4th month story book </div>
            <div 
                className="book month-five"
                onClick={handleChange}
                value={5}
                name={ageInMonths}
                >My baby's 5th month story book </div>
            <div 
                className="book month-six"
                onClick={handleChange}
                value={6}
                name={ageInMonths}
                >My baby's 6th month story book </div>
            <div 
                className="book month-seven"
                onClick={handleChange}
                value={7}
                name={ageInMonths}
                >My baby's 7th month story book </div>
            <div 
                className="book month-eight"
                onClick={handleChange}
                value={8}
                name={ageInMonths}
                >My baby's 8th month story book </div>
            <div 
                className="book month-nine"
                onClick={handleChange}
                value={9}
                name={ageInMonths}
                >My baby's 9th month story book </div>
            <div 
                className="book month-ten"
                onClick={handleChange}
                value={10}
                name={ageInMonths}
                >My baby's 10th month story book </div>
            <div 
                className="book month-eleven"
                onClick={handleChange}
                value={11}
                name={ageInMonths}
                >My baby's 11th month story book </div>
            <div 
                className="book month-twelve"
                onClick={handleChange}
                value={12}
                name={ageInMonths}
                >My baby's 12th month story book </div>
            
        </div>
    )
}


export default withUser(MonthlyBookForm)