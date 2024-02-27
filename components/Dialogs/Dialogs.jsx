import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to='dialogs/1'>Sasha</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='dialogs/2'>Маша</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='dialogs/3'>Глаша</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='dialogs/4'>Vova</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='dialogs/5'>Yura</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='dialogs/6'>Oleg</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    HI!
                </div>
                <div className={classes.message}>
                    How are you
                </div>
                <div className={classes.message}>
                    rety ewkk
                </div>
            </div>
        </div>
    )
}

export default Dialogs;