import React from "react";
import { useState } from "react";

export const EventualText = ({ text, durationInMs }) => {
    const [visible, setVisible] = useState(true);

    setTimeout(() => {
        setVisible(false);
    }, durationInMs);

    return (
        <h3
            className={`text-white mb-3 transition-opacity duration-200 opacity-0 ${
                visible && "opacity-100"
            }`}
        >
            {text}
        </h3>
    );
};
