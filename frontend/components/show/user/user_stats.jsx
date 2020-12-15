import React from 'react';
import {sportBlock} from '../../search/filter_util'

export default (props) => {
    // debugger
    return (
        <div className="user-stats">
            <h1>My Stats</h1>
            {sportBlock(() => {})}
        </div>
    )
}