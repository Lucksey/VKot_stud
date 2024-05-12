import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCount} from "../../redux/setting-reducer";

const Test = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.repos.count)

    function onCountClick() {
        dispatch(setCount(33))
    }

    return (
        <div>
            <button onClick={() => onCountClick()}>ЖМИ</button>
            <div>{count}</div>
        </div>

)
}

export default Test;