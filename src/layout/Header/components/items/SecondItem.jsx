import React from 'react';
import arraw from '../../../../assets/images/arraw.png'
import HItem from './HItem'

const SecondItem = () => {
    return (
        <div style={{width: '100%'}}>
            <div style={{width: '100%'}}>
                <div className="d-flex">
                    <HItem img={arraw} label="Item1"/>
                    <HItem img={arraw} label="Item1"/>
                    <HItem img={arraw} label="Item1"/>
                </div>
            </div>
            <div style={{width: '100%'}}>
                <div className="d-flex">
                    <HItem img={arraw} label="Item1"/>
                    <HItem img={arraw} label="Item1"/>
                    <div style={{flex: 1}}></div>
                </div>
            </div>
        </div>
    );
};

export default SecondItem;