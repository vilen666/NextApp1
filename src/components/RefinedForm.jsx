import React, { useState } from 'react';

const RefinedForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    dob:''
  });
  const [validity, setValidity] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNo:false,
    dob:false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState =>({
      ...prevState,
      [name]: value
    }));
    const isValid = validateInput(name, value);
    setValidity(prevValidity => ({
        ...prevValidity,
        [name]: isValid
      }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  // Validation function (You can customize it based on your validation rules)
  const validateInput = (name, value) => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        return value.trim() !== '';
      case 'email':
        // Basic email validation
        return /\S+@\S+\.\S+/.test(value);
        case 'phoneNo':
            if(value.length===10 && parseInt(value))
            {
                return true;
            }
            else
            return false;
        case 'dob':
            let d=new Date(value);
        console.log(Math.floor(((((new Date().getTime()-d.getTime())/1000)/3600)/24)/30/12));
        return(Math.floor(((((new Date().getTime()-d.getTime())/1000)/3600)/24)/30/12)>=18);
      default:
        return false;
    }};
  return (
    <div className='bg-[#D9EDBF] relative w-[90%] rounded h-[90vh] my-[5vh] mx-[auto] block overflow-hidden'>
      <div className='bg-[#2C7865] w-full h-[10%] text-center text-[#FF9800] text-3xl font-bold py-[10px]'>
        Supratim's form
      </div>
      <form className=' block h-fit bg-black '>
      <InputLabel type={"email"} validity={validity} handleSubmit={handleSubmit} validateInput={validateInput} name={"email"} formData={formData} handleChange={handleChange} place={"Enter Your email"} errMsg={"Enter correct email..."}/>
      <InputLabel type={"text"} validity={validity} handleSubmit={handleSubmit} validateInput={validateInput} name={"firstName"} formData={formData} handleChange={handleChange} place={"Enter Your firstName"} errMsg={"Enter correct name..."}/>
      <InputLabel type={"text"} validity={validity} handleSubmit={handleSubmit} validateInput={validateInput} name={"lastName"} formData={formData} handleChange={handleChange} place={"Enter Your lastName"} errMsg={"Enter correct name..."}/>
      <InputLabel type={"text"} validity={validity} handleSubmit={handleSubmit} validateInput={validateInput} name={"phoneNo"} formData={formData} handleChange={handleChange} place={"Enter Your Phone No."} errMsg={"Enter 10 digit phone no."}/>
      <InputLabel type={"date"} validity={validity} handleSubmit={handleSubmit} validateInput={validateInput} name={"dob"} formData={formData} handleChange={handleChange} place={"Enter Your DOB"} errMsg={"Your age must be > 18..."}/>
      <button type='submit' className=' p-2 rounded absolute border-2 border-blue-600 bg-slate-500 bottom-[5%] translate-x-[-50%] translate-y-[-50%] left-[50%]  ' onSubmit={(e)=>{alert(e)}}> Click to submit </button>
      </form>
    </div>
  );
};

const InputLabel = (props) => {
  return (
    <label className=' float-left mr-3 w-[250px] p-3 flex flex-col relative'>
      <div className='text-2xl capitalize' style={props.validity[props.name] ?{color:"green"}:{color:"red"}}>{props.name}:</div>
      <input className=' w-[95%] mt-3 h-fit  rounded border-2 border-black p-2 text-lg outline-none'
        type={props.type}
        name={props.name}
        value={props.formData[props.name]}
        onChange={props.handleChange}
        placeholder={props.place}
      />
      <i className="ri-checkbox-circle-fill absolute top-[50%] left-[95%] text-green-600 font-bold text-xl" style={props.validity[props.name] ?{opacity:1}:{opacity:0}}></i>
      <i className="ri-close-circle-fill absolute top-[50%] left-[95%] text-red-600  font-bold text-xl" style={props.validity[props.name] ?{opacity:0}:{opacity:1}}></i>
      <div className='text-xl capitalize text-red-600' style={props.validity[props.name] ?{opacity:0}:{opacity:1}}>{props.errMsg}</div>
    </label>
  );
};

export default RefinedForm;
