import React from 'react'
const Boot1 = () => {
    let a=[];
    for(let i=0;i<=11;i++)
        {
            a[i]=i;
        }
        console.log(a)
  return (
    
    <div className='container-fluid'>
      <div className='row'>
        {a.map((item,k)=>
        {
            return(<div key={k} className={`col-lg-1 col-md-6 col-sm-12 border-2 border-slate-500 h-[100px] chess bg-${(k%2===0)?'black':'white'}` }></div>)
        })
        }
        {a.map((item,k)=>
        {
            return(<div key={k} className={`col-lg-1 col-md-6 col-sm-12 border-2 border-slate-500 h-[100px] chess bg-${(k%2===0)?'white':'black'}` }></div>)
        })
        }
        {a.map((item,k)=>
        {
            return(<div key={k} className={`col-lg-1 col-md-6 col-sm-12 border-2 border-slate-500 h-[100px] chess bg-${(k%2===0)?'black':'white'}` }></div>)
        })
        }
        {a.map((item,k)=>
        {
            return(<div key={k} className={`col-lg-1 col-md-6 col-sm-12 border-2 border-slate-500 h-[100px] chess bg-${(k%2===0)?'white':'black'}` }></div>)
        })
        }{a.map((item,k)=>
        {
            return(<div key={k} className={`col-lg-1 col-md-6 col-sm-12 border-2 border-slate-500 h-[100px] chess bg-${(k%2===0)?'black':'white'}` }></div>)
        })
        }
        {a.map((item,k)=>
        {
            return(<div key={k} className={`col-lg-1 col-md-6 col-sm-12 border-2 border-slate-500 h-[100px] chess bg-${(k%2===0)?'white':'black'}` }></div>)
        })
        }
        {a.map((item,k)=>
        {
            return(<div key={k} className={`col-lg-1 col-md-6 col-sm-12 border-2 border-slate-500 h-[100px] chess bg-${(k%2===0)?'black':'white'}` }></div>)
        })
        }
        {a.map((item,k)=>
        {
            return(<div key={k} className={`col-lg-1 col-md-6 col-sm-12 border-2 border-slate-500 h-[100px] chess bg-${(k%2===0)?'white':'black'}` }></div>)
        })
        }
        {a.map((item,k)=>
        {
            return(<div key={k} className={`col-lg-1 col-md-6 col-sm-12 border-2 border-slate-500 h-[100px] chess bg-${(k%2===0)?'black':'white'}` }></div>)
        })
        }
        {a.map((item,k)=>
        {
            return(<div key={k} className={`col-lg-1 col-md-6 col-sm-12 border-2 border-slate-500 h-[100px] chess bg-${(k%2===0)?'white':'black'}` }></div>)
        })
        }
        {a.map((item,k)=>
        {
            return(<div key={k} className={`col-lg-1 col-md-6 col-sm-12 border-2 border-slate-500 h-[100px] chess bg-${(k%2===0)?'black':'white'}` }></div>)
        })
        }
        {a.map((item,k)=>
        {
            return(<div key={k} className={`col-lg-1 col-md-6 col-sm-12 border-2 border-slate-500 h-[100px] chess bg-${(k%2===0)?'white':'black'}` }></div>)
        })
        }
        
      </div>
    </div>
  )
}

export default Boot1
