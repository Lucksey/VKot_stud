import React from "react";
import s from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://w7.pngwing.com/pngs/485/324/png-transparent-emoji-emote-emoticon-emoticons-ugly-emoticons-icon.png',
                    followed: false,
                    fullName: 'ALex',
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://w7.pngwing.com/pngs/485/324/png-transparent-emoji-emote-emoticon-emoticons-ugly-emoticons-icon.png',
                    followed: true,
                    fullName: 'ALexey',
                    status: 'I am a lucky',
                    location: {city: 'Tiraspol', country: 'Moldova'}
                },
                {
                    id: 3,
                    photoUrl: 'https://w7.pngwing.com/pngs/485/324/png-transparent-emoji-emote-emoticon-emoticons-ugly-emoticons-icon.png',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'I am a boss too',
                    location: {city: 'St.Petersburg', country: 'Russia'}
                },
                {
                    id: 4,
                    photoUrl: 'https://w7.pngwing.com/pngs/485/324/png-transparent-emoji-emote-emoticon-emoticons-ugly-emoticons-icon.png',
                    followed: false,
                    fullName: 'Oleg',
                    status: 'debt a money',
                    location: {city: 'Gotham City', country: 'USA'}
                },
                {
                    id: 5,
                    photoUrl: 'https://w7.pngwing.com/pngs/485/324/png-transparent-emoji-emote-emoticon-emoticons-ugly-emoticons-icon.png',
                    followed: true,
                    fullName: 'Nikee',
                    status: 'I am so beautifull',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
            ]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <div>
                        <img alt='image' src={u.photoUrl} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </div>
                <div>
                    <div>
                    <div>{u.fullName}</div><div>{u.status}</div>
                    </div>
                   <div>
                       <div>{u.location.country}</div><div>{u.location.city}</div>
                   </div>
                </div>
            </div>)
        }
    </div>
}

export default Users;