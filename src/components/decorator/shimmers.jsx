
import React from "react";
import styled from "styled-components";

import "./shimmer.css"
const ShimmerBox = ({ width, height, bgColor }) => {



    const ShimmerCard = styled.div`
      width:${width}px;
      height:${height}px;
      background-color:${bgColor};
      padding: 0.25em 1em;
      border-radius: 10px;
        
    `;

    return (
        <>
            <ShimmerCard></ShimmerCard>

        </>)
}

export default ShimmerBox;