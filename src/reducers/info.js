// имитация базы данных
const initialState = {
    user: "unknown user",
    year: 2015
}
//  сам редусер 
export default function userInfo (state = initialState,  action) {
    switch (action.type) {
        case "SET_YEAR":
          return {...state, year: action.payload}
        default:
          return state
    }
}