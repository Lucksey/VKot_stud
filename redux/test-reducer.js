const SET_COUNT_TEST = "SET_COUNT_TEST" // тип без ошибок

let initialState = {
    items: [],
    setting: true,
    count: 0
};
/*export type InitialState = typeof initialState*/
export default function settingReducer(state = initialState, action) {
    switch (action.type) {
        case SET_COUNT_TEST:
            return {
                ...state,
                count: action.payload
            }
        default:
            return state;
    }
}
/*type SetCountTestActionType = {
    type: SET_COUNT_TEST
    payload: number
}*/
export const setCount = (count) =>({type: SET_COUNT_TEST, payload: count}) // экшнкреатор