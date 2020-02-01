import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, render, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';
import App from '../components/App';

configure({ adapter: new Adapter() });


describe('App renders correct components', () => {
    it('by default, only loads Login shows', () => {
        let app = mount(
            <Provider store={store}>
                <App />
            </Provider>
        );

        let loginH1 = app.find('h1').first().text();

        expect(loginH1).toEqual('Login');
    })
}
);