import React from 'react'
//the value that we set in here is what updates state and updates the 
const Form = (props) => {
    return(
        <div className="form-div"> 
        <form onSubmit={ (e) => props.handleSubmitForm(e)} >
                
                
                <select onChange={props.handleChangeCat} name={props.category}>
                    <option>-Select a Category </option>
                    <option value="9">General Knowledge </option>
                    <option value="10">Books</option>
                    <option value="28">Cars</option>
                    <option value="11">Film</option>
                    <option value="12">Music</option>
                    <option value="23">History</option>
                    <option value="15">Video Games</option>
                    <option value="16">Board Games</option>
                    <option value="17">Science & Nature </option>
                    <option value="29">Comics</option>
                    <option value="18">Computers</option>
                    <option value="21">Sports</option>
                    <option value="14">Television</option>
                    <option value="22">Geography</option>
                    <option value="27">Animals</option>
                </select>

                <select onChange={props.handleChangeDif} name={props.difficulty}>
                    <option>-Select level-</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Difficult</option>   
                </select>
                <button >Submit</button>
            </form>
        </div>
    )
}

export default Form 