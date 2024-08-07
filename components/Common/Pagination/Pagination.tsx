import React, {useState} from "react"
import s from "./Pagination.module.css"
import cn from 'classnames'

type PropsType = {
    totalCount: number
    currentPage: number
    onPageChanged: (pageNumber:number) => void
    pageSize: number
    portionSize?: number }

let Pagination: React.FC<PropsType> = ({totalCount,
                                           currentPage,
                                           onPageChanged,
                                           pageSize,
                                           portionSize = 10}) => {

    let pagesCount = Math.ceil(totalCount / pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)}

    let portionCount = Math.ceil(currentPage / portionSize)
    let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize))
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div className={s.pagination}>
        {//portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={cn({
                    [s.selectedPage]: currentPage === p
                }, s.pageNumber)}
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}

        {//portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}
    </div>
}

export default Pagination