import React from 'react';

export default ({img, label}) => {
    return (
         <div className="menu-item-detail">
            <div className="d-flex justify-content-center">
                <img src={img} alt="media" height="30px"/>
            </div>
            <div className="d-flex justify-content-center mt-1">
                <label>{label}</label>
            </div>
        </div>
    );
};