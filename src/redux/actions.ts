import { Action } from "redux";

export enum ActionTypes {
  FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST",
  FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS",
  FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE",
}

interface FetchDataRequestAction extends Action {
  type: ActionTypes.FETCH_DATA_REQUEST;
}

interface FetchDataSuccessAction extends Action {
  type: ActionTypes.FETCH_DATA_SUCCESS;
  payload: any;
}

interface FetchDataFailureAction extends Action {
  type: ActionTypes.FETCH_DATA_FAILURE;
  payload: string;
}

export type DataAction =
  | FetchDataRequestAction
  | FetchDataSuccessAction
  | FetchDataFailureAction;

export const fetchDataRequest = (): FetchDataRequestAction => ({
  type: ActionTypes.FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data: any): FetchDataSuccessAction => ({
  type: ActionTypes.FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error: string): FetchDataFailureAction => ({
  type: ActionTypes.FETCH_DATA_FAILURE,
  payload: error,
});
