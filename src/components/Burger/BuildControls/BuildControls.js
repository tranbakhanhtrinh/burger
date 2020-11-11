import React from "react";
import PropTypes from 'prop-types';

import BuildControl from "./BuildControl/BuildControl";

import classes from "./BuildControls.module.scss";

const controls =[
    {label: "Salad", type: "salad"},
    {label: "Bacon", type: "bacon"},
    {label: "Cheese", type: "cheese"},
    {label: "Meat", type: "meat"},
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {
            controls.map(ctrl => (
                <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}  
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))
        }
        <button 
            className={classes.OrderButton} 
            disabled={!props.purchasable}
            onClick={props.ordered}
        >
                {props.isAuth ? "ORDER NOW" : "SIGN UP TO ORDER"}
        </button>
    </div>
);

buildControls.propTypes = {
    price: PropTypes.number,
    added: PropTypes.func,
    removed: PropTypes.func,
}

export default buildControls;