// reducer.ts
import { Reducer } from "redux";
import { ActionTypes, DataAction } from "./actions";

interface State {
  data: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: null,
  loading: false,
  error: null,
};

const dataReducer: Reducer<State, DataAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: null };

    case ActionTypes.FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };

    case ActionTypes.FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default dataReducer;
