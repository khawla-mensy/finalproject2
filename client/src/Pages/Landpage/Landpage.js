import React from "react";
import "./Landpage.css";
const LandPage = () => {
    return (
        <div className="landpage">
            <div className="cover">
                <form className="flex-form">
                    <label htmlFor="from">
                        <i className="ion-location" />
                    </label>
                    <input
                        type="search"
                        placeholder="Where do you want to go?"
                    />
                    <input type="submit" defaultValue="Search" />
                </form>
            </div>
        </div>
    );
};

export default LandPage;
