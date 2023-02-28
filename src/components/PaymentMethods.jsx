

import React, { useState } from 'react';
import visaa from '../assets/images/paymentsimages/visaa.PNG'
import ms from '../assets/images/paymentsimages/ms.PNG'
import discover from '../assets/images/paymentsimages/discover.PNG'
import americanExpress from '../assets/images/paymentsimages/americanExpress.PNG'

function Year(){
 
  // Set up a state variable to hold the selected year
  const [selectedYear, setSelectedYear] = useState('');

  // Create an array of years from 1900 to the current year
  const years = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= 1900; i--) {
    years.push(i);
  }

  // Handle the change event for the select element
  const handleSelectChange = (event) => {
    setSelectedYear(event.target.value);
  };

  // Render the select element with options for each year
  return (
    <div>
      <label for="year" className="block mb-2 text-sm font-bold text-gray-400 dark:text-white">Year</label>
      <select id="year" name="year" value={selectedYear} onChange={handleSelectChange} className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 border-gray-300 outline-none border-2 p-2 rounded-sm hover:border-gray-300  focus:border-green-500 ">
        <option  className="block mb-2 text-sm font-bold text-gray-400 dark:text-white" value="">year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}


function Month(){
 
  // Set up a state variable to hold the selected month
  const [selectedMonth, setSelectedMonth] = useState('');

  
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  

  // Handle the change event for the select element
  const handleSelectChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  // Render the select element with options for each year
  return (
    <div>
      <label for="month" className="block mb-2 text-sm font-bold text-gray-400 dark:text-white">Month</label>
      <select id="month" name="year" value={selectedMonth} onChange={handleSelectChange} className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 border-gray-300 outline-none border-2 p-2 rounded-sm hover:border-gray-300  focus:border-green-500 ">
        <option  className="block mb-2 text-sm font-bold text-gray-400 dark:text-white" value="">Month</option>
        {month.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
}



function PaymentMethodRadioGroup() {
  const paymentMethods = [
    { id: 'visa', label: 'Visa', image: visaa },
    { id: 'mastercard', label: 'Mastercard', image: ms },
    { id: 'discover', label: 'Discover', image: discover },
    { id: 'americanExpress', label: 'Discover', image: americanExpress },
  ];

  return (
    <div className="flex flex-row gap-3 items-center  ">
      {paymentMethods.map((method) => (
        <>  
            <input checked id={method.id} type="radio" value="" name="paymentMethod" className="w-4  ml-1text-blue-600 "/>
            <label for={method.id} key={method.id} className="text-sm  font-medium text-gray-900 dark:text-gray-300">
              <img
                    src={method.image}
                    alt={method.label}
                    className="w-12 h-12 object-contain mb-2"
                  />
            </label>
        </>
      ))}

    </div>
  );
}

const PaymentMethods = () => {
    return (
      <div className='flex flex-col m-10 h-100'>
          <div className="border-b-2  py-2 block mb-4 text-sm font-bold text-gray-500 dark:text-white ">
            PAYMENT DETAILS
          </div>

          <div className="flex flex-col gap-2 text-sm font-lg font-medium text-gray-400 dark:text-white mb-6  ">
              <p className="text-sm font-lg font-bold text-gray-500 dark:text-white mb-5"> Credit Card Information</p>
              <p>SELECT CARD TYPE</p>
              <PaymentMethodRadioGroup />
          </div>

          <div className="flex gap-4">
              <div className="w-1/2 mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-400 dark:text-white " for="cardName">Name on Card</label>
                <input  className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 border-gray-300 outline-none border-2 p-2 rounded-sm hover:border-gray-300  focus:border-green-500 " type="text" id="cardName" name="cardName" required />
              </div>
              <div className="w-1/2 mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-400 dark:text-white" for="cardNumber">Card Number</label>
                <input  className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 border-gray-300 outline-none border-2 p-2 rounded-sm hover:border-gray-300  focus:border-green-500 " type="text" id="cardNumber" name="cardNumber"  required/>
              </div>
          </div>


          <div className="flex gap-4 mb-10">
              
              <div className="w-2/4 mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-400 dark:text-white" for="CSV">CSV</label>
                <input  className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 border-gray-300 outline-none border-2 p-2 rounded-sm hover:border-gray-300  focus:border-green-500 " type="text" id="CSV" name="CSV"  required/>
              </div>

              <div className="w-1/4 mb-6">
                <Month/>
              </div>

              <div className="w-1/4 mb-6">
                <Year/>
              </div>



          </div>

          <div className='flex justify-center mb-4'>
              <button type='button' className='bg-green-500 text-white px-10 py-3 rounded-sm text-lg font-medium text-sm outline-none  hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block'>
                Submit Payment
              </button>
          </div>  
        
          



          </div>
     
    )
  }





export default PaymentMethods;
