import React from 'react';
import VItem from './VItem';
import scroll from '../../../../assets/images/scroll.png'
import zoom from '../../../../assets/images/zoom.png'
import handup from '../../../../assets/images/handup.png'
const HandAction = () => {
    return (
        <>
                <VItem img={scroll} label="Drag"/>
                <VItem img={zoom} label="Zoom"/>
                <VItem img={handup} label="Hand"/>
        </>
    );
};

export default HandAction;