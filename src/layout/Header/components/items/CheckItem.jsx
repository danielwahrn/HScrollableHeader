import React from 'react';

const CheckItem = () => {
    return (
        <div style={{width: '100%'}}>
        <div style={{width: '100%'}}>
            <div className="d-flex">
                <div className="menu-item-detail">
                    <input type="checkbox" /><span>check1</span>
                </div>   
                <div className="menu-item-detail">
                    <input type="checkbox" /><span>check2</span>
                </div>   
            </div>
        </div>
        <div style={{width: '100%'}}>
        <div className="d-flex">
            <div className="menu-item-detail">
                <input type="checkbox" /><span>check3</span>
            </div>   
            <div style={{flex: 1}}>
            </div>   

        </div>
        </div>
        </div>
    );
};

export default CheckItem;