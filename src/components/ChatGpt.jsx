import React, { useState } from 'react';

const ChatGpt = () => {
  const [data, setData] = useState([
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, officia voluptate voluptatem pariatur tempore libero quis placeat natus dicta obcaecati voluptatibus voluptatum vero commodi maiores eius! Est aspernatur voluptate distinctio.",
      dSize: "",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      }
    },
    { 
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, officia voluptate voluptatem pariatur tempore libero quis placeat natus dicta obcaecati voluptatibus voluptatum vero commodi maiores eius! Est aspernatur voluptate distinctio.",
      dSize: "",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      }
    },
  ]);

  const clickHandle = (index) => {
    setData(prevData => {
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
    <div className='z-[4] w-full h-full absolute top-0 left-0 flex pt-[7%] '>
      {data.map((item, index) => (
        <Card key={index} index={index} data={item} clickHandle={clickHandle} />
      ))}
    </div>
  );
};

const Card = ({ index, data, clickHandle }) => {
  return (
    <>
      {data.tag.isOpen ? (
        <CardOpen data={data} clickHandle={() => clickHandle(index)} />
      ) : (
        <CardClose data={data} clickHandle={() => clickHandle(index)} />
      )}
    </>
  );
};

const CardOpen = ({ data, clickHandle }) => {
  return (
    <>
      <div
        className='w-[180px] h-[200px] rounded-xl bg-slate-300 relative overflow-hidden m-[10px]'
        onClick={clickHandle}
      >
        <i className="ri-file-text-line p-2"></i>
        <p className='text-xs px-2 mt-2 line-clamp-3'>{data.desc}</p>
        <div className='p-3 flex justify-between items-center w-full h-[20%] absolute bottom-[20%] text-sm'>
          <div>0.4mb</div>
          <i className="ri-close-fill"></i>
        </div>
        <div className='p-3 flex justify-between items-center w-full h-[20%] absolute bottom-0 bg-sky-700 text-sm'></div>
      </div>
    </>
  );
};

const CardClose = ({ data, clickHandle }) => {
  return (
    <>
      <div
        className='w-[180px] h-[200px] rounded-xl bg-slate-300 relative overflow-hidden m-[10px]'
        onClick={clickHandle}
      >
        <i className="ri-file-text-line p-2"></i>
        <p className='text-xs px-2 mt-2 line-clamp-3'>{data.desc}</p>
        <div className='p-3 flex justify-between items-center w-full h-[20%] absolute bottom-0 text-sm'>
          <div>0.4mb</div>
          <div className='w-5 h-5 text-center bg-black rounded-full '><i className="ri-arrow-down-line text-white"></i></div>
        </div>
      </div>
    </>
  );
};

export default ChatGpt;
