import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import CheckItem from './items/CheckItem';
import DivWindowItem from './items/DivWindowItem';
import DrawerItem from './items/DrawerItem';
import FirstItem from './items/FirstItem';
import GlobalItem from './items/GlobalItem';
import HandAction from './items/HandAction';
import MediaPlayer from './items/MediaPlayer';
import SearchScope from './items/SearchScope';
import SecondItem from './items/SecondItem';
import SettingItem from './items/SettingItem';
import ThirdItem from './items/ThirdItem';
import MenuItem from './MenuItem';

import left from '../../../assets/images/scroll-left.png'
import right from '../../../assets/images/scroll-right.png'

const list = [
    { name: 'item1', item: <FirstItem />, width: 50 },
    { name: 'item2', item: <SecondItem />, width: 300  },
    { name: 'item3', item: <ThirdItem />, width: 300 },
    { name: 'item4', item: <MediaPlayer />, width: 100  },
    { name: 'item5', item: <HandAction />, width: 250  },
    { name: 'item6', item: <DrawerItem />, width: 200  },
    { name: 'item7', item: <SearchScope />, width: 200  },
    { name: 'item8', item: <DivWindowItem />, width: 100  },
    { name: 'item10', item: <CheckItem />, width: 300  },
    { name: 'item11', item: <GlobalItem />, width: 150  },
    { name: 'item12', item: <SettingItem /> , width: 100 },
  ];

const Arrow = ({ icon, className }) => {
    return (
      <div className={className}>
          <img src={icon} />
      </div>
    );
  };

const ArrowLeft = Arrow({ icon: left, className: 'arrow-prev' });
const ArrowRight = Arrow({ icon: right, className: 'arrow-next' });


export const Menu = (list, selected) =>
list.map(el => {
    const {name, item, width} = el;

    return (<MenuItem label={name} key={name} selected={selected} width={width}>
        {item}
    </MenuItem>);
});

export default () => {
    const menuItems = Menu(list, 1);
    const menu = menuItems;
    return (
        <div className="">
            <ScrollMenu
                data={menu}
                arrowLeft={ArrowLeft}
                arrowRight={ArrowRight}
                alignCenter={false}
        />
            
        </div>
    );
};