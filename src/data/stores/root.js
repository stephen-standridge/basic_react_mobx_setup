import React, { createContext, useContext } from 'react';
import Timer from './timerStore';

class RootStore {
    constructor() {
        this.timerStore = new Timer(this)
    }
}

export const rootStore = new RootStore();
const RootContext = createContext(new RootStore());

export const RootProvider = ({ children, root }) => {
    return <RootContext.Provider value={root}>{children}</RootContext.Provider>
}

export const useRoot = () => useContext(RootContext);

export const withRoot = (Component) => (props) => {
    return <Component {...props} root={useRoot()} />;
};