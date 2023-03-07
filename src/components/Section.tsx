import React from "react";
import { useState } from "react";

const Section: React.FC = () => {
  const [visibility, setVisibility] = useState(false);

  const showSection = (): void => setVisibility(!visibility);

    return <div  className='text-center' >
        <p onClick={showSection}>click</p>
        {visibility && <div>видно</div>}</div>;
};

export default Section;
