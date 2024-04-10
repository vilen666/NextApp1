import React from 'react'
import "./boot.css"
const Boot2 = () => {
  const printer=[]
  for(let i=0;i<=9;i++)
  {
    printer[i]="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  }
  return (
    <>
     <div className='container-fluid min-vh-100'>
      <div className="row justify-content-center p-3 ">
    {printer.map((items,key)=>{
      console.log(items)
      return(
       
        <div id='cards' key={key} style={{backgroundColor:"#B5C0D0",height:"fit-content"}} className="col-lg-2 mb-1 mx-sm-auto mx-md-1 col-md-5 col-sm-10 rounded">
                    <img src={items} alt="..." className=" w-100 h-75 mt-3" />
                    <div style={{fontWeight:"bold"}} className="w-100 h-20 p-2">details</div>
        </div>
      );
    })
    }
     </div>
    </div>
    </>
  )
}

export default Boot2
