import React from 'react';
import PropTypes from 'prop-types';
//Components
import NavigationOption from './index';

function Preview(props) {
    
    const { className, classAction } = props;
    const { value, setValue } = props;

    const onClick = () => {
        setValue(value - 1);
    };

    const classesContainer = `Navigation-Option-Container-Preview ${ className ? className : ''}`;
    const classesAction = `Navigation-Option-Preview ${ classAction ? classAction : ''}`;

    return (
        <NavigationOption
            className={ classesContainer }
            actionClass={ classesAction }
            onClick={ onClick }
        />
    );
}

Preview.propTypes = {
    className: PropTypes.string,
    classAction: PropTypes.string,
    value: PropTypes.object.isRequired,
    setValue: PropTypes.func.isRequired,
};

export default Preview;