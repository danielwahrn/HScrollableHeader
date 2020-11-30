import React from 'react';

const MenuItem = (props) => {
    const {label, width} = props;
    return (
        <div style={{width: width}}>
            <div className="menu-item">
                <div className="menu-item-content ">
                    {props.children}
                </div>
                <div className="menu-item-label">
                    {label}
                </div>
            </div>
        </div>
    );
};

export default MenuItem;