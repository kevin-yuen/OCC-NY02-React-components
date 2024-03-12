import React from "react";

export default function RightBody({subHeader, contents}) {
    return (
        <div className="pe-3">
            <h3>{subHeader}</h3>
            <ul>
                {contents.map(content => (
                    <li>{content}</li>
                ))}
            </ul>
        </div>
    )
}