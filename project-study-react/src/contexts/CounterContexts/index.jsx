import PropTypes from 'prop-types';
import React, {createContext, useContext} from 'react';

export const initialState = {
    counter: 0,
    loading: false,
}
const Context = createContext();

export const CounterContextProvider = ({ children }) => <Context.Provider value={initialState}>{children}</Context.Provider>;

CounterContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export const useCounterContext = () => {
    const context = useContext(Context);
    return [...context];
}