import React, {FC} from "react"
import Pagination from "../Common/Pagination/Pagination";
import User from "./User";
import {UserType} from "../../types/types";

type PropsType = {
    totalCount: number
    currentPage: number
    onPageChanged: (pageNumber:number) => void
    pageSize: number
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

let Users: FC<PropsType> = ({currentPage, onPageChanged, totalCount, pageSize, unfollow, follow, followingInProgress, users, ...props}) => {

    return <div>
        <Pagination currentPage={currentPage}
                    onPageChanged={onPageChanged}
                    totalCount={totalCount}
                    pageSize={pageSize}/>
        <div>
            {users.map(u => <User key={u.id}
                                  user={u}
                                  followingInProgress={followingInProgress}
                                  unfollow={unfollow}
                                  follow={follow}
                />
            )
            }
        </div>
    </div>
}

export default Users;