import React, { createContext, useContext } from 'react';
import { parse } from '../lib/util';

const ContextAuth = createContext();



const videos  = [
  "https://www.youtube.com/watch?v=o74vC5HMJFg",
  "https://www.youtube.com/watch?v=gzXxhegM9R0",
  "https://www.youtube.com/watch?v=nBkiOUVFJuU"];


const InfoContext = ({ children }) => {
  let listTemp = [];
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      var result = {};
      switch (action.type) {
        case 'INVERT_LOAD':
          result = { 
            ...prevState,
            isLoading : !prevState.isLoading,
            
          }
          break;
          case 'SET_LIST_VIDEO':
            result= {
              ...prevState,
              listVideos: [...action.payload]
            }
          break;
        default:
          result= {
            ...prevState,
          }
      }
      return result;
    },
    {
      isLoading: false,
      listVideos : videos
    }
  );



  const action = React.useMemo(() => ({
    invertLoading: async () => {
       dispatch({ type: 'INVERT_LOAD' });
    },

    addVideo:  (url)=>{
      if(!state.listVideos.includes(url)){
         dispatch({ 
          type: 'SET_LIST_VIDEO', 
          payload:[...state.listVideos, url] 
        });
      }
    },
    deleteVideo:  (url)=>{
      if(state.listVideos.includes(url)){
         dispatch({ 
          type: 'SET_LIST_VIDEO', 
          payload:[...state.listVideos.filter(item=>item!==url)] 
        });
      }
    }



  }));
  return (
    <ContextAuth.Provider value={{ action, state }}>
      {children}
    </ContextAuth.Provider>
  );
};
const useInfo = () => useContext(ContextAuth);
export { InfoContext, useInfo };