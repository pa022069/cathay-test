import React from 'react';
import Content from './Content';
const Group = (props) => {
    return (
        <div className="group">
            <div className="group__title">
                <p>{props.state == 0 ? '進行中' : '已完成'}</p>
            </div>
            <div className="group__content">
                {props.data.map((item, idx) => 
                    <Content key={idx} item={item}/>
                )}
            </div>
        </div>
    );
}

export default Group;