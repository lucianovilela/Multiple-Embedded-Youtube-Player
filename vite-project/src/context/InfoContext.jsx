import React, { createContext, useContext, useEffect } from 'react';
import { parse } from '../lib/util';
import * as  db from '../db'
const ContextAuth = createContext();





const InfoContext = ({ children }) => {

  useEffect(() => {
    (async ()=>{

      db.onAuthStateChanged((user) => {
        action.setUser(user);
      });

      const urls = await db.getList('urls');

      
      action.setVideos(urls);
      


    })();


  },[]);



  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      var result = {};
      switch (action.type) {
        case 'INVERT_LOAD':
          result = {
            ...prevState,
            isLoading: !prevState.isLoading,

          }
          break;
        case 'SET_LIST_VIDEO':
          result = {
            ...prevState,
            listVideos: [...action.payload]
          }
          break;
        case 'SET_USER':
          result = {
            ...prevState,
            currentUser: action.payload
          }
          break;
        default:
          result = {
            ...prevState,
          }
      }
      return result;
    },
    {
      isLoading: false,
      listVideos: [],
      currentUser: null
    }
  );



  const action = React.useMemo(() => ({
    invertLoading: async () => {
      dispatch({ type: 'INVERT_LOAD' });
    },
    setVideos: (urls) => {
      
        dispatch({
          type: 'SET_LIST_VIDEO',
          payload: [...urls]
        });
      
    },
    addVideo: (url) => {
      if (!state.listVideos.includes(url)) {
        db.saveUrl(url);
        dispatch({
          type: 'SET_LIST_VIDEO',
          payload: [...state.listVideos, {url}]
        });
      }
    },
    deleteVideo: (url) => {
      state.listVideos.forEach(item=>{
        if(item.url === url)
          db.deleteUrl(item.id);
      });
        dispatch({
          type: 'SET_LIST_VIDEO',
          payload: [...state.listVideos.filter(item=>item.url !== url)]
        });
      
    },
    setUser: (user) => {
      dispatch({
        type: 'SET_USER',
        payload: [...state.listVideos, user]
      });
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