import React from "react";

function ChooseItemContainer(){
    return(
        <div className="container ml-10 mr-8 mt-8 w-1/4 h-2/3 bg-red">
          <div className="text-2xl font-semibold">2 Pairs from $199</div>
       
        <div className=" text-black text-lg mb-2 ">Discount auto-applied at Checkout</div>
        
        
        <div className="font-bold border-2 border-white border-t-neutral-400 "><div className="text-3xl mt-6 mb-4">Gaby</div></div>
        <div className="content-start">< input type="radio" className="form-radio h-8 w-8 " />
        < input type="radio" className="form-radio h-8 w-8 ml-6 mb-4" />
        < input type="radio" className="form-radio h-8 w-8 ml-6 mb-4" />
        < input type="radio" className="form-radio h-8 w-8 ml-6 mb-4" />
        < input type="radio" className="form-radio h-8 w-8 ml-6 mb-4" />
        < input type="radio" className="form-radio h-8 w-8 ml-6 mb-4" />
        < input type="radio" className="form-radio h-8 w-8 mb-4" />
        < input type="radio" className="form-radio h-8 w-8 ml-6 mb-4" />
        </div>
        <div className="text-md flex items-start mt-4 mb-2"><div className="font-semibold mr-2 ">Color:</div>  Tabby Tortoise </div>

        <div className="flex content-end border-2 border-white border-t-neutral-400">
        
        <div className="text-2xl font-semibold mt-2 content-end">From $199.00</div>
        
       <div className=" text-black text-md mb-4 ml-1">or zip it from <div className="font-semibold">10$/week</div></div>
       
        </div>

        <div className="">
            <button className="bg-black text-center text-white font-bold h-10 w-full outline outline-1 outline-black mb-2 ">Prescription</button>
            <button className="bg-white text-center text-black font-bold h-10 w-full outline outline-1 outline-black">Book an eye test</button>
        </div>
        </div>

    )
}

export default ChooseItemContainer