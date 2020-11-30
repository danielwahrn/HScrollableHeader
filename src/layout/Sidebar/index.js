import React, {useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import classNames from 'classnames';

export default () => {
    const history = useHistory();
    const [path, saveSide] = useState('first');

    const handleSide = (path) => {
        saveSide(path);
        history.push(path);
    }

    const pathname = history.location.pathname;

    return (
        <div className="app-sidebar">
            <div className={classNames("side-item", {'active': pathname.startsWith('/first')})} 
                // onClick={() => handleSide('first')}
                >
                <Link to="/first">First</Link>
                {/* First */}
            </div>
            <div className={classNames("side-item", {'active': pathname.startsWith('/second')})} 
            // onClick={() => handleSide('second')}
            >
                <Link to="/second">Second</Link>
                {/* Second */}
            </div>
            <div className={classNames("side-item", {'active': pathname.startsWith('/third')})}
            //  onClick={() => handleSide('third')}
             >
                <Link to="/third">3D</Link>
                {/* 3D */}
            </div>
            <div className={classNames("side-item", {'active': pathname.startsWith('/fourth')})} 
                // onClick={() => handleSide('fourth')}
            >
                <Link to="/fourth">Fourth</Link>
                {/* Fourth */}
            </div>
        </div>
    );
};