import React from 'react';

const HItem = ({img, label}) => {
    return (
        <div className="menu-item-detail d-flex">
            <img src={img} width="20px"/>
            <span>{label}</span>
        </div>
    );
};

export default HItem;