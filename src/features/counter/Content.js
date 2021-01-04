import React from 'react';

const Content = (props) => {
    const { item } = props;
    return (
        <div className="item">
            <div className="item__icon">
                <div className={item.status.code === 3||item.status.code === 4 ? 'gray': ''} style={{
                    backgroundImage: `url(${item.logo})`
                }}></div>
            </div>
            <div className="item__content">
                <div className={item.status.code === 3||item.status.code === 4 ? 'gray head': 'head'}>
                    <p className="head__state">{item.status.type}</p>
                    {item.status.code === 3||item.status.code === 4 ? '' : <p className="head__content">{`預計出貨：${item.date}`}</p>}
                </div>
                <div className="body">
                    <p className="body__content">
                        {item.name}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Content;