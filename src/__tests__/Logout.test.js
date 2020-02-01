import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, render, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';
import Logout from '../components/Logout';

configure({ adapter: new Adapter() });


describe('Logout correctly clears token from store', () => {

    let logout = mount(
        <Provider store={store}>
            <Logout />
        </Provider>
    );

    it('test', () => {
       let dispatch = logout.props().store.dispatch;

       store.dispatch({ type: 'LOGIN_SUCCESS', data: {token: 'blah'}});
       logout.find('#logout').first().simulate('click');
        expect(store.getState().auth.token).toEqual('');
    })
}
);