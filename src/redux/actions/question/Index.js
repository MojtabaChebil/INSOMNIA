
import { getAPI } from '../../../utility/httpMethode';
import { All_QUESTION } from '../../../utility/types';
export const GetAllQuestion =() => {
return async dispatch => {
  return await getAPI("getAllQuestions").then(response => {
    dispatch({
      type: All_QUESTION,
      payload: response.data
    })     
  })
}
}