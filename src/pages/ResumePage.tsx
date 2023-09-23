import React from "react";
import Resume from "../pictures/Resume/Personal_Portfolio_Resume_September_2023.png";

export const ResumePage: React.FC = () => (
    <div className="ResumePage flex caret-white">
        <div className="flex flex-row-reverse justify-center items-center w-full gap-0">
            <a href="https://drive.google.com/file/d/1vDmWnNSn_bSMpI4Mer5zgXCwrjepE-AW/view?usp=sharing" target="_blank" rel="noreferrer" className="font-bold font-bree-serif underline py-20 hover:text-lime-green"> Download my resume here!</a>
            <img src={Resume} alt="resume" className="border border-black w-1/2 scale-75"/>
        </div>
    </div>
);