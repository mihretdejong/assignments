import React from 'react'


const Home = () => {
    return (
        <div className="home-div">
            <div className="category-div">
                <div className="level-div">
                    {/* <button onClick={() => props.onDifficultySelect()} >Easy</button> */}
                    <button onClick="" >Medium</button>
                    <button onClick="">Difficult</button>
                </div>
                <div className="subjects-div">
                    <button className="math">MATH</button>
                    <button className="sports">SPORTS</button>
                    <button className="history">HISTORY</button>
                    <button className="computers">COMPUTERS</button>
                    <button className="film">FILM</button>
                    <button className="nature">NATURE</button>
                    <button className="music">MUSIC</button>

                </div>
                <button className="submit-btn-home">Submit</button>


            </div>
            


    
        </div>
    )
}









export default Home