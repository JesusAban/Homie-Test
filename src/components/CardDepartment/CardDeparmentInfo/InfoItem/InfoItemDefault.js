import React from 'react';
import PropTypes from 'prop-types';
//Styles
import './InfoItem.css';

function InfoItemDefault (props) {
    
    const { value, icon } = props;
    const { className, textClass, iconClass } = props;

    return (
        <div className={ `Card-Department-Info-Item${ className ? (' ' + className) : ''}` }>
            <div className={`Card-Department-Info-Item-Text${ textClass ? (' ' + textClass) : ''}` }>
                { value }
            </div>
            {
                icon && <div className={ `Card-Department-Info-Item-Icon${ iconClass ? (' ' + iconClass) : ''}` }>
                    { icon }
                </div>
            }
        </div>
    );
}

InfoItemDefault.propTypes = {
    value: PropTypes.any.isRequired,
    className: PropTypes.string,
    textClass: PropTypes.string,
    iconClass: PropTypes.string,
    icon: PropTypes.element
};

export default InfoItemDefault;