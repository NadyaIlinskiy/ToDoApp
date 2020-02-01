import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, render, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';
import Login from '../components/Login';

configure({ adapter: new Adapter() });


describe('Login', () => {

    let login = mount(
        <Provider store={store}>
            <Login />
        </Provider>
    );

    it('by default, only loads Login shows', () => {    
          let loginH1 = login.find('h1').first().text();
          expect(loginH1).toEqual('Login');
    });

    it('changes state on email change', () => {
        let emailFormField = login.find('#email').first();

        emailFormField.simulate('change',{
            target:{value: 'sarah@sarah.com'},
        })

        expect(emailFormField.instance().value).toEqual('sarah@sarah.com');
    })


}
);