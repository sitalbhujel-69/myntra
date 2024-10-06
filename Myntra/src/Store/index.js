import {configureStore} from '@reduxjs/toolkit'
import itemSliceReducer from './itemSlice';
import fetchStatusReducer from './fetchStatusSlice'


const myntraStore = configureStore({
  reducer: {
    items: itemSliceReducer.reducer,
    fetchStatus: fetchStatusReducer.reducer,
  }
})

export default myntraStore;