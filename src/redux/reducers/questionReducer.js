import {All_QUESTION } from "../../utility/types"
const questionReducer = (state={}, action) => {
  switch (action.type) {
    case All_QUESTION:
      return action.payload;
    default:
      return state
  }
}
export default questionReducer