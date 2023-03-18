const defaultState = [];
const DELETEPOST = "DELETEPOST";
const ADD_POST = "ADD_POST"
export const delete_function = (id) => {
  return { type: DELETEPOST, payload: id };
};
export const add_function = (newPost)=>{
  return {type: "ADD_POST", payload: newPost }
}

export const postReducer = (state = defaultState, action) => {
  if (action.type === ADD_POST) {
    return [...state, action.payload];
  } else if (action.type === DELETEPOST) {
    return state.filter((item) => item.id !== action.payload);
  } else {
    return state;
  }
};
