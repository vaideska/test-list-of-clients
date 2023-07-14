import { LanguagesType } from "../lang/LangContext";

export interface IClients {
  lang: LanguagesType
  id: string;
  name: string,
  review: string,
  date: string
}

export interface ClientState {
  clients: IClients[];
  loading: boolean;
  error: null | string;
}

export enum ClientActionTypes {
  FETCH_CLIENTS = 'FETCH_CLIENTS',
  FETCH_CLIENTS_SUCCESS = 'FETCH_CLIENTS_SUCCESS',
  FETCH_CLIENTS_ERROR = 'FETCH_CLIENTS_FETCH_CLIENTS_ERROR',
}

interface FetchClientsAction {
  type: ClientActionTypes.FETCH_CLIENTS;
}

interface FetchClientsSuccessAction {
  type:ClientActionTypes.FETCH_CLIENTS_SUCCESS;
  payload: any[]
}

interface FetchClientsErrorAction {
  type: ClientActionTypes.FETCH_CLIENTS_ERROR;
  payload: string;
}

export type ClientAction = FetchClientsAction | FetchClientsErrorAction | FetchClientsSuccessAction;
