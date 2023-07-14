import { ClientAction, ClientActionTypes, ClientState } from "../types/clients";

const initialState: ClientState = {
  clients: [],
  loading: false,
  error: null,
}

export const clientReducer = (state = initialState, action: ClientAction): ClientState => {
  switch (action.type) {
    case ClientActionTypes.FETCH_CLIENTS:
      return { loading: true, error: null, clients: [] };

    case ClientActionTypes.FETCH_CLIENTS_SUCCESS:
      return { loading: false, error: null, clients: action.payload };

    case ClientActionTypes.FETCH_CLIENTS_ERROR:
      return { loading: false, error: action.payload, clients: [] };

    default:
      return state;
  }
}
