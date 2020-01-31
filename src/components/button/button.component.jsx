import React from 'react';

import './button.styles.scss';

const Button = (props) => {
    const classes = ['btn'];

    if (typeof props !== 'undefined' && typeof props.type !== 'undefined')
      classes.push('btn--' + props.type);

    return(
        <button className={classes.join(' ')}>
            {props.children}
        </button>
    )
};

export default Button;