import React from 'react';
import arrow_down_left from '../../../../assets/images/arrow_left_down.png'
import arrow_down_right from '../../../../assets/images/arrow_right_down.png'
import arrow_right from '../../../../assets/images/arrow_right.png'
import arrow_down from '../../../../assets/images/arrow_down.png'
import VItem from './VItem';
const ThirdItem = () => {
    return (
        <>
            <VItem img={arrow_down_left} label="Undo" />
            <VItem img={arrow_down_right} label="Redo" />
            <VItem img={arrow_down} label="Down" />
            <VItem img={arrow_right} label="Left" />
        </>
    );
};

export default ThirdItem;