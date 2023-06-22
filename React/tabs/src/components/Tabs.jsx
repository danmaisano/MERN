import React, { useState } from 'react';

const Tabs = (props) => {
    const [currentContent, setCurrentContent] = useState("Click a Tab to see its contents");

    const displayContent = (tab) => {
        setCurrentContent(tab.content);
    };

    return (
    <div className='tabArea'>
        <div className='tabContainer'>
        {props.tabsList.map((tab, idx) => (
            <div key={idx}>
            <h3 className='tabStyle' onClick={() => displayContent(tab)}>{tab.label}</h3>
            </div>
        ))}
    </div>
        <p className='contentStyle'>{currentContent}</p>
    </div>
    );
};

export default Tabs;
