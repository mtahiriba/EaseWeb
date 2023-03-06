

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcDiscover, faCcAmex } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faCcVisa, faCcMastercard, faCcDiscover, faCcAmex);


//Year TextField Method
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
    <div >
      <label for="year" className="block mb-2 text-sm font-bold text-gray-400 ">Year</label>
      <select id="year" name="year" value={selectedYear} onChange={handleSelectChange} className="bg-gray-50 rounded-md text-gray-900 text-sm  block w-full p-2.5  border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-300  focus:border-green-500 ">
        <option  className="block mb-2 text-sm font-bold text-gray-400 " value="">year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}



//MonthTextfield
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
      <label htmlFor="month" className="block mb-2 text-sm font-bold text-gray-400 ">Month</label>
      <select id="month" name="year" value={selectedMonth} onChange={handleSelectChange} className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5 border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-300  focus:border-green-500 ">
        <option  className="block mb-2 text-sm font-bold text-gray-400 " value="">Month</option>
        {month.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
}


//showing radion button for type selection
function PaymentMethodRadioGroup() {
  const paymentMethods = [
    { id: 'visa', label: 'Visa', icon:"cc-visa" },
    { id: 'mastercard', label: 'Mastercard', icon: "cc-mastercard"},
    { id: 'discover', label: 'Discover',icon:"cc-discover"},
    { id: 'americanExpress', label: 'americanExpress', icon:"cc-amex"},
  ];

  return (
    <div className="flex flex-row gap-3 items-center ">
      {paymentMethods.map((method) => (
        <>  
            <input  id={method.id} type="radio" value="" name="paymentMethod" className="w-4 ml-1 text-green-900 "/>

            <label for={method.id} key={method.id} className="text-xl font-medium text-gray-900">
            <FontAwesomeIcon icon={['fab', method.icon]} />
           </label>
        </>
      ))}

    </div>
  );
}

const PaymentMethods = () => {
    return (
      <div className='flex flex-col m-10 h-100'>
          <div className="border-b-2  py-2 block mb-4 text-sm font-bold text-gray-500 ">
            PAYMENT DETAILS
          </div>

          <div className="flex flex-col gap-2 text-sm font-lg font-medium text-gray-400  mb-6  ">
              <p className="text-sm font-lg font-bold text-gray-500 mb-5"> Credit Card Information</p>
              <p>SELECT CARD TYPE</p>
              <PaymentMethodRadioGroup />
          </div>

          <div className="flex gap-4">
              <div className="w-1/2 mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-400  " htmlFor="cardName">Name on Card</label>
                <input  className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5  border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-300  focus:border-green-500 " type="text" id="cardName" name="cardName" required />
              </div>
              <div className="w-1/2 mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-400 " htmlFor="cardNumber">Card Number</label>
                <input  className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5  border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-300  focus:border-green-500 " type="text" id="cardNumber" name="cardNumber"  required/>
              </div>
          </div>


          <div className="flex gap-4 mb-10">
              
              <div className="w-2/4 mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-400 " htmlFor="CSV">CSV</label>
                <input  className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5  border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-300  focus:border-green-500 " type="text" id="CSV" name="CSV"  required/>
              </div>

              <div className="w-1/4 mb-6">
                <Month className="rounded-md"/>
              </div>

              <div className="w-1/4 mb-6">
                <Year/>
              </div>



          </div>

          <div className='flex justify-end mb-6'>
              <button type='button' className='bg-green-500 text-white px-10 py-3 rounded-sm text-lg font-medium text-sm outline-none  hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block'>
                Submit Payment
              </button>
          </div>  
        
          



          </div>
     
    )
  }





export default PaymentMethods;
