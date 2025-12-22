import React from 'react'
import {createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux';
import { store } from './store/store';
import { MstContext, mstRootStore } from './mst/MstRootStore';

const root = createRoot(document.getElementById('root')!);
root.render(
    <MstContext value={mstRootStore}>
        <Provider store={store}>
            <App />
        </Provider>
    </MstContext>
)