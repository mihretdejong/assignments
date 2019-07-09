import React from 'react'


const Home = () => {
    return (
        <div className="home-div">
            <form className="category-div">
                <div>
                    <button>Easy</button>
                    <button>Medium</button>
                    <button>Difficult</button>
                </div>
                <div>
                    <button className="math">MATH</button>
                    <button className="sports">SPORTS</button>
                    <button className="history">HISTORY</button>
                    <button className="computers">COMPUTERS</button>
                    <button className="film">FILM</button>
                    <button className="nature">NATURE</button>
                    <button className="music">MUSIC</button>

                </div>

            </form>
            <p> this is the home page</p>


    
        </div>
    )
}









export default Home