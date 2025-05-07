import React, { useState } from 'react';
import { CiBaseball } from "react-icons/ci";
import { GiBaseballBat } from "react-icons/gi";
import { PiBaseballHelmet } from "react-icons/pi";

function Divider() {
    return (
        <div className="divider" id="divider__animated">
            <GiBaseballBat />
            <CiBaseball className="animated" />
            <PiBaseballHelmet />
        </div>
    );
}

export default Divider;
