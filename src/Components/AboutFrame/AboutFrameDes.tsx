import React from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

function AboutFrameDes(){
    return(
<div className="mx-6 items-center">
<div className="container px-8 my-6 w-full h-2/3 outline outline-3 outline-neutral-400 rounded-xl flex items-start justify-center">
    <LeftContainer /><RightContainer />
</div>
</div>
    )
}

export default AboutFrameDes