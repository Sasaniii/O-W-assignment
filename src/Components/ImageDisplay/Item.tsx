import React from "react";
import sunglasses_1 from '../../Images/sunglasses_1.jpg';


function Item(){
    return(

<div className="container m-6 w-2/3 h-2/3 inline-block">


<img className=" w-full h-full" src={sunglasses_1} alt='' />
<div className="flex justify-end">
<div className="container bg-slate-300 w-28 flex justify-center h-12 rounded-lg"><button className="mr-1 text-2xl font-semibold">
        zoom
    </button>
    <span className="material-symbols-outlined text-3xl">zoom_in</span>
    </div>
    </div>

<div className=" flex justify-center mt-2 ">
    <div className="h-3 w-3 bg-black rounded-full mx-2 mb-2 cursor-pointer"></div>
    <div className="h-3 w-3 bg-neutral-400 rounded-full mx-2 mb-2 cursor-pointer"></div>
    <div className="h-3 w-3 bg-neutral-400 rounded-full mx-2 mb-2 cursor-pointer"></div>
    <div className="h-3 w-3 bg-neutral-400 rounded-full mx-2 mb-2 cursor-pointer"></div>
    <div className="h-3 w-3 bg-neutral-400 rounded-full mx-2 mb-2 cursor-pointer"></div>
</div>

</div>
        
    )
}

export default Item