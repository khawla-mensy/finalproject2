import React from "react";

const Rating = ({ rating, starIndex }) => {
    const stars = (rate) => {
        const starArray = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rate) {
                starArray.push(
                    <span
                        style={{ color: "yellow", fontSize: "1.8rem" }}
                        onClick={() => starIndex(i)}
                    >
                        ★
                    </span>
                );
            } else {
                starArray.push(
                    <span
                        style={{ fontSize: "1.8rem" }}
                        onClick={() => starIndex(i)}
                    >
                        ☆
                    </span>
                );
            }

            // (i<=rate) ? starArray.push(<span style={{color:"yellow",fontSize:"1.8rem"}} onClick={()=>setRatingSearch(i)}>★</span>):starArray.push(<span style={{fontSize:"1.8rem"}} onClick={()=>setRatingSearch(i)}>☆</span>)
        }
        return starArray;
    };
    return <div>{stars(rating)}</div>;
};

export default Rating;
