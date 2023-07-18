import { ThunkDispatch } from "redux-thunk";
import { ClientAction, ClientActionTypes } from "../types/clients";
import { dataClients, getClientsArray } from "../utils/utils";


export const fetchClient = (dispatch: ThunkDispatch<{}, {}, ClientAction>) => async () => {
  try {
      dispatch({type: ClientActionTypes.FETCH_CLIENTS});
      const array = Object.keys(dataClients).map((lang) => getClientsArray(dataClients[lang], lang)).flat();
      setTimeout(() => {
          dispatch({type: ClientActionTypes.FETCH_CLIENTS_SUCCESS, payload: array})
      }, 500)
  } catch (e) {
      dispatch({
          type: ClientActionTypes.FETCH_CLIENTS_ERROR,
          payload: 'Произошла ошибка при загрузке пользователей'
      })
  }
}
