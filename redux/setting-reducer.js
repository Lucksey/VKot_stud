const SET_COUNT_SETTINGS = "SET_COUNT_SETTINGS" // тип без ошибок

let initialState = {
    items: [],
    setting: true,
    count: 0
};
/*export type InitialStateType = typeof initialState;*/
export default function settingReducer(state = initialState, action/*: any*/)/*: InitialStateType */{
    switch (action.type) {
        case SET_COUNT_SETTINGS:
            return {
                ...state,
                count: action.payload
            }
        default:
            return state;
    }
}
/*type SetCountSettingsActionType = {
    type: SET_COUNT_SETTINGS
    payload: number
}*/
export const setCount = (count/*: number*/)/*: SetCountSettingsActionType */=> ({type: SET_COUNT_SETTINGS, payload: count}) // экшнкреатор