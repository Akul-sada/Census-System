import React, { useState } from 'react';


const Form = () => {
  const [name, setName] = useState('');
  const [isVaccinated, setIsVaccinated] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <>
    <h1>{name}</h1>
    <h1>{isVaccinated}</h1>
    <h1>{birthdate}</h1>
    <h1>{gender}</h1>
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
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
        <label htmlFor="isVaccinated" className="block mb-2 text-sm font-medium text-gray-700">
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
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="birthdate" className="block mb-2 text-sm font-medium text-gray-700">
          Birthdate
        </label>
        <input
          type="date"
          id="birthdate"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-700">
          Gender
        </label>
        <div className="flex items-center">
          <input
            type="radio"
            id="male"
            className="mr-1"
            value="male"
            checked={gender === 'male'}
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
            checked={gender === 'female'}
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
            checked={gender === 'others'}
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