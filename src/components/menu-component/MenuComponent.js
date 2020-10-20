import React from "react";
import './MenuComponent.scss';

const MenuComponent = (props) => {
    const {title} = props;

    return (
        <div className='component-menu'>
            <span className='title-menu'>{title}</span>
        </div>
        )
};
export default MenuComponent;
