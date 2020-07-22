import React from 'react';
import PropTypes from 'prop-types';
//Styles
import './NavigationOption.css';

function NavigationOption(props){
    
    const { className, actionClass } = props;
    const { onClick } = props;

    const containerClasses = `Navigation-Option-Container ${ className ? className : '' }`;
    const actionClasses = `${ actionClass ? actionClass : '' }`;

    return (
        <div className={ containerClasses } onClick={ onClick }>
            <div className={ actionClasses } ></div> 
        </div>
    );
}

NavigationOption.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string
};

NavigationOption.defaultProps = {
    onClick: () => {}
};

export default NavigationOption;