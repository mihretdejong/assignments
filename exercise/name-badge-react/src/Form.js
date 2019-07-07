import React from 'react'


  const Form = props => {

   
     
    const {handleSubmit, handleChange, firstName, lastName, email, placeOfBirth, phone, favFood, textArea } = props;
    const isEnabled =
    
  
   
      return(
        <div  className="form-div">
            <form  className="form"  onSubmit={handleSubmit}>
                    <input 
                    className="f-name"
                    name="firstName"
                    type="text"
                    value={firstName}
                    onChange={handleChange}
                    placeholder="First Name"

                    ></input>

                    <input
                    className="l-name"
                    name="lastName"
                    type="text"
                    value={lastName}
                    onChange={handleChange}
                    placeholder="Last Name"></input>

                    <input
                    className="email"
                    name="email"
                    type="text"
                    value={email}
                    onChange={handleChange}
                    placeholder="email"></input>

                    <input
                    className="pob"
                    name="placeOfBirth"
                    type="text"
                    value={placeOfBirth}
                    onChange={handleChange}
                    placeholder="Place of Birth"></input>
                    <input
                    className="phone"
                    name="phone"
                    type="number"
                    value={phone}
                    onChange={handleChange}
                    placeholder="Phone"></input>

                    <input
                    className="fav-food"
                    name="favFood"
                    type="text"
                    value={favFood}
                    onChange={handleChange}
                    placeholder="Favorite Food"></input>
                    <input
                    name="drinks"
                    type="checkbox"
                    value={favFood}
                    onChange={handleChange}></input>
                    <select className="coc" name="countryFrom" onChange={handleChange}>
                        <option value="none">- Select Country -</option>
                        <option> United States </option>
                        <option> United Kingdom </option>
                        <option> Sweden </option>
                    </select>
                    <textarea
                    className="text-area"
                    rows={10}
                    cols={70}
                    style={{resize: "none"}}
                    name="textArea"
                    type="text"
                    value={textArea}
                    onChange={handleChange}
                    placeholder="Tell us about yourself..."></textarea>

                    <button disabled = {!firstName}  className="sub-btn"> Submit </button>
                    
                </form>
          
        </div>
      )
     
  }










export default Form