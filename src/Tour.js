import { React, useState } from "react";

export default function Tour({ props,removeItem}) {
  const {id, image, info, name, price } = {...props };
  const abreviation = info.substring(0, 200); //show less content for the article footer
  const [content, setContent] = useState(abreviation); //less content
  const [more, setMore] = useState(false);
  const readMore = () => {
    setContent(info);
  };
  const showLess = () => {
    setContent(abreviation);
  };
  return (
    <>
     {/** 
          main container for each tour       
      */}
      <div className="drop-shadow-2xl shadow-2xl rounded mt-2">
        <article className="flex flex-col items-center">
          <img alt="nothing"
            className="flex flex-col flex-l object-cover h-[32rem] w-[35rem] rounded "
            src={image}
          />
          <footer className="flex flex-col flex-l w-[35rem] p-10">
            <div className="flex">
              <div className="flex-grow font-bold text-xl mb-3">{name}</div>
              <div className="flex-initial self-center text-blue-500 bg-blue-200 font-bold h-[1.6rem] w-auto text-xl mb-3 px-2 rounded-full">
                ${price}
              </div>
            </div>
            {
                // show more or less content depending on more state variable 
            }
            {more === true ? content : content + "..."} 
            <div className="flex flex-col flex-l self-end items-center mx-3 text-white bg-blue-500 w-[6rem] mb-2 mt-2 rounded-2xl">
              {!more && (
                <button
                  className=""
                  onClick={() => {
                    readMore();
                    setMore(!more);
                  }}
                >
                  Read more
                </button>
              )}
              {more && (
                <button
                  className=""
                  onClick={() => {
                    showLess();
                    setMore(!more);
                  }}
                >
                  Show less
                </button>
              )}
            
            </div>
            <div className="flex flex-col self-center  text-black font-bold outline-dashed outline-red-500 bg-red-400 h-auto w-auto px-2 rounded-2xl">
                <button onClick={() => removeItem(id)}>Not interested</button>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
}
