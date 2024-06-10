import React from "react"
import s from "./Pagination.module.css"

let Pagination = (props) => {


    let pagesCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={() => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>
}

export default Pagination