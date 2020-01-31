import React from 'react';

import './button.styles.scss';

const Button = (props) => {
    const { onButtonPress } = props;
    const classes = ['btn'];

    if (typeof props !== 'undefined' && typeof props.type !== 'undefined')
      classes.push('btn--' + props.type);

    return(
        <button className={classes.join(' ')} onClick={onButtonPress}>
            {props.children}
        </button>
    )
};

export default Button;