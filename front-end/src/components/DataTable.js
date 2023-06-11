import React from 'react'

const DataTable = ({data}) => {
  function changeDateFormat(inputDate){
    // Create a new Date object using the input date string
    const date = new Date(inputDate);

    // Define the options for formatting the date
    const options ={
      day:"numeric",
      month:"long",
      year:"numeric"
    }
    const formatedDate = date.toLocaleDateString("en-US",options);
    return formatedDate;

  }
  return (
    <>
      <div className='flex justify-center'>

      
        <div className="overflow-x-auto h-96 mt-7 w-5/6">
        <table className="table-auto min-w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Is Vaccinated</th>
              <th className="border px-4 py-2">Birthdate</th>
              <th className="border px-4 py-2">Gender</th>
            </tr>
          </thead>
          <tbody>
            
           {data.map((data,i)=><tr key={i}>
              <td className="border px-4 py-2 text-center">{i+1}</td>
              <td className="border px-4 py-2 text-center">{data.name}</td>
              <td className="border px-4 py-2 text-center">{JSON.stringify(data.is_vaccinated)}</td>
              <td className="border px-4 py-2 text-center">{changeDateFormat(data.birthdate)}</td>
              <td className="border px-4 py-2 text-center">{data.gender}</td>
            </tr>)} 
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default DataTable