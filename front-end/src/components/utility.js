import React, { useEffect, useState } from 'react';

export const Message = ({isVissible}) => {
    // show is use only in to show the message for some time
    const [show,setShow] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setShow(false)
        }, 1000);
     
      }, []);
    
    return (
        <>
        {show && isVissible &&<h3 className='text-center text-green-400 text-4xl'>Your Form has been submitted</h3>}
    </>
    )
}
export const ErrorMessage = ({isVissible}) => {
    const [show,setShow] = useState(false);
    useEffect(
        ()=>setTimeout(()=>setShow(true),4000)
    ,[]);
    return (
    <>
        {show && isVissible && <h3 className='text-center text-red-400 text-4xl'>Sorry! Unable to Submit the form</h3>}
    </>
    )
}

