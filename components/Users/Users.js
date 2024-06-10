import React from "react"
import Pagination from "../Common/Pagination/Pagination";
import User from "./User";

let Users = ({currentPage, onPageChanged, totalCount, pageSize, unfollow, follow, followingInProgress, users, ...props}) => {

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