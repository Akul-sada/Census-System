import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePickerComponent from "./DatePickerComponent";
import axios from 'axios';
import { ErrorMessage, Message } from "./utility";

const Form = () => {
  const [name, setName] = useState("");
  const [isVaccinated, setIsVaccinated] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [gender, setGender] = useState("");
  

  // Change the format of date
  const birthdateStr = startDate.toString();
  const dateN = new Date(birthdateStr);
  const birthdate = dateN.toISOString();
  let isSubmited = true;

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  
    const handleSubmit = (e) => {
      let is_vaccinated = Boolean(isVaccinated)
        e.preventDefault();
        axios.post('http://localhost:8000/records', {
          name,
          is_vaccinated,
          birthdate,
          gender,
        })
        .then(response=>{
          if(response.statusText
            ==="OK"){
              isSubmited=true;
          }else{
            isSubmited= false;
          }
          console.log(response);
        })
        .catch(err=>console.log(err))
    }
    
  return (
    <>
 
      {isSubmited ? <Message/>:<ErrorMessage/>}
      <h1 className="text-center text-5xl text-blue-700 mb-12">
        Census Management
      </h1>
      <div className="flex justify-center w-full">
        <Link to="/trends" className="inline-block mb-12 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Trends
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="isVaccinated"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Is Vaccinated
          </label>
          <select
            id="isVaccinated"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={isVaccinated}
            onChange={(e) => setIsVaccinated(e.target.value)}
            required
          >
            <option value="">Select an option</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="birthdate"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Birthdate
          </label>
          <div className="flex flex-col items-center mt-8">
            <DatePickerComponent
              startDate={startDate}
              handleDateChange={handleDateChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="gender"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Gender
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              id="male"
              className="mr-1"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
              required
            />
            <label htmlFor="male" className="mr-3">
              Male
            </label>
            <input
              type="radio"
              id="female"
              className="mr-1"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="female" className="mr-3">
              Female
            </label>
            <input
              type="radio"
              id="others"
              className="mr-1"
              value="others"
              checked={gender === "others"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="others">Others</label>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
