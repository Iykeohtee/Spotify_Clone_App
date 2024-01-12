import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamCoreApi } from './services/ShazamCore';

export const store = configureStore({ 
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware),   
}); 


// The above is everything you do in a redux toolkit application. 
// It is the boiler-plate you can find in the redux toolkit documentation. 


// Redux Lessons 
// Redux is a state management library that allows you to have global state i.e you can have states that are accesible 
// from any component no matter where they are in the tree       
// Redux have three concepts and they are all really important 
// Store: I think for storing data 

// Actions: what you use to tell redux what to do the state. Actions in redux have two properties that are super important
// Type and Payload. The type is always a string and it is required. It is essentially the name of the action> Redux uses
// the type to determine what to do to the state. The payload is the second property of the action. It is any data you 
// want to send to you redux in your action so that it can perform its job. It is optional tho 

// The third concept been reducers: responsible for taking an action and then depending on the action will make
// the update in the redux store
// Reducers will never directly make an update to the redux store. We are never allowed to directly mutate the state 
// instead what we do is to take the state and make the copy of the state and make the changes to the copy of the state
// which will also have all other unchanged properties of the state and the replace the state completey as a whole with
// the copy that has the changes
