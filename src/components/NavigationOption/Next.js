import React from 'react';
import PropTypes from 'prop-types';
//Components
import NavigationOption from './index';

function Next(props) {
    
    const { className, classAction } = props;
    const { value, setValue } = props;

    const onClick = () => {
        setValue(value + 1);
    };

    const classesContainer = `Navigation-Option-Container-Next ${ className ? className : ''}`;
    const classesAction = `Navigation-Option-Next ${ classAction ? classAction : ''}`;

    return (
        <NavigationOption
            className={ classesContainer }
            actionClass={ classesAction }
            onClick={ onClick }
        />
    );
}

Next.propTypes = {
    className: PropTypes.string,
    classAction: PropTypes.string,
    value: PropTypes.number.isRequired,
    setValue: PropTypes.func.isRequired,
};

export default Next;