import {combineReducers, createStore} from 'redux'
import {postReducer} from './reducer/postReducer'


function saveToLocalStorage(state) {
    try {
      const postsState = JSON.stringify(state);
      localStorage.setItem("posts", postsState);
    } catch (e) {
      console.warn(e);
    }
  }

  function loadFromLocalStorage() {
    try {
      const postsState = localStorage.getItem("posts");
      if (postsState === null) return undefined;
      return JSON.parse(postsState);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }
const rootReduser = combineReducers({
    posts: postReducer
})

 export const store = createStore(rootReduser,loadFromLocalStorage())
 
 store.subscribe(() => saveToLocalStorage(store.getState()));