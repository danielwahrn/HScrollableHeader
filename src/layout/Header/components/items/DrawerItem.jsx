import React from 'react';
import lighter from '../../../../assets/images/lighter.png'
import drawboard from '../../../../assets/images/drawboard.png'
import adv_setting from '../../../../assets/images/adv_setting.png'
import VItem from './VItem';
import HItem from './HItem';
const DrawerItem = () => {
    return (
        <div className="d-flex">
            <VItem img={lighter} label="W/L" />
            <VItem img={drawboard} label="Draw" />
            <div>
                <div className="menu-item-detail">
                    <p>texttettettedt</p>
                </div>
                <HItem img={adv_setting} label="Adv Setting"/>
            </div>
        </div>
    );
};

export default DrawerItem;