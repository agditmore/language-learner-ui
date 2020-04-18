import { configureStore, Action } from '@reduxjs/toolkit';
import reducer from './slice';
import { ThunkAction } from 'redux-thunk';

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof reducer>;

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./slice', () => {
    const newRootReducer = require('./slice').default;
    store.replaceReducer(newRootReducer);
  });
}
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export default store;
