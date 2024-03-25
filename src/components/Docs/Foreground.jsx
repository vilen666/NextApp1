import React, { useState } from 'react'

const Foreground = () => {
    const [data, setData] = useState([{
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, officia voluptate voluptatem pariatur tempore libero quis placeat natus dicta obcaecati voluptatibus voluptatum vero commodi maiores eius! Est aspernatur voluptate distinctio.",
        dSize: "",
        close: false,
        tag: {
            isOpen: false,
            tagTitle: "Download Now",
            tagColor: "#6AD4DD",
        }
    },
    {
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, officia voluptate voluptatem pariatur tempore libero quis placeat natus dicta obcaecati voluptatibus voluptatum vero commodi maiores eius! Est aspernatur voluptate distinctio.",
        dSize: "",
        close: false,
        tag: {
            isOpen: false,
            tagTitle: "Download Now",
            tagColor: "#7AA2E3",
        }
    },
    {
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, officia voluptate voluptatem pariatur tempore libero quis placeat natus dicta obcaecati voluptatibus voluptatum vero commodi maiores eius! Est aspernatur voluptate distinctio.",
        dSize: "",
        close: false,
        tag: {
            isOpen: false,
            tagTitle: "Download Now",
            tagColor: "#6AD4DD",
        }
    }
    ]);
    const clickHandle = (index) => {
        update(index);
    }
    const update = (index) => {
        setData((prevData) => {
            const newData = [...prevData];
            newData[index] = {
              ...newData[index],
              tag: {
                ...newData[index].tag,
                isOpen: !newData[index].tag.isOpen // Toggle isOpen
              }
            };
            return newData;
          });
        };
    return (
        <div className='z-[4] w-full h-full absolute top-0 left-0 flex pt-[7%] flex-wrap'>
            {data.map((item, key) => {
                return (<Card key={key} index={key} data={item} clickHandle={clickHandle} />)
            })}
        </div>

    )
}
const Card = (props) => {
    // console.log(props.clickHandle)
    return (
        <>
            {props.data.tag.isOpen ? <CardOpen data={props.data} clickHandle={() => { props.clickHandle(props.index) }} /> : <CardClose data={props.data} clickHandle={() => { props.clickHandle(props.index) }} />}
        </>
    )
}
const CardOpen = (props) => {
    console.log(props.data.tag.tagColor);
    return (
        <>
            <div className=' w-[180px] h-[200px] rounded-xl bg-slate-300 relative overflow-hidden m-[10px]' >
                <i className="ri-file-text-line p-2"></i>
                <p className=' text-xs px-2 mt-2 line-clamp-3'>{props.data.desc}</p>
                <div className=' p-3 flex justify-between items-center  w-full h-[20%] absolute bottom-[20%] text-sm'>
                    <div>0.4mb</div>
                    <i className="ri-close-fill cursor-pointer" onClick={props.clickHandle}></i>
                </div>
                <div className={` p-3 flex justify-between items-center  w-full h-[20%] absolute bottom-0 text-sm`} style={{backgroundColor: `${props.data.tag.tagColor}`}} ><span className=' text-center w-full font-bold text-white cursor-pointer' onClick={()=>{alert("downloading...")}}>{props.data.tag.tagTitle}</span></div>
            </div>
        </>
    )
}
const CardClose = (props) => {
    return (
        <>
            <div className=' w-[180px] h-[200px] rounded-xl bg-slate-300 relative overflow-hidden m-[10px]' onClick={props.clickHandle}>
                <i className="ri-file-text-line p-2"></i>
                <p className=' text-xs px-2 mt-2 line-clamp-3'>{props.data.desc}</p>
                <div className=' p-3 flex justify-between items-center  w-full h-[20%] absolute bottom-0 text-sm'>
                    <div>0.4mb</div>
                    <div className='w-5 h-5 text-center bg-black rounded-full '><i className="ri-arrow-down-line text-white"></i></div>
                </div>
            </div>
        </>
    )
}

export default Foreground
