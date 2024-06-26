const SET_COUNT = "SET_COUNT" // тип без ошибок

let initialState = {
    items: [],
    setting: true,
    count: 0
};


export default function settingReducer(state = initialState, action) {
    switch (action.type) {
        case SET_COUNT:
            return {
                ...state,
                count: action.payload
            }

        default:
            return state;
    }
}

export const setCount = (count) =>({type: SET_COUNT, payload: count}) // экшнкреатор