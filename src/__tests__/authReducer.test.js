import React from 'react'
import reducer, {attemptLogin} from '../store/authReducer';

const initState = {
    email:'',
    token:''
}

const errorSpy = jest.spyOn(console, 'error');

describe('Auth reducer', () => {
    it('handles ATTEMPT_LOGIN',()=>{
        let newState = reducer(initState, { type: 'ATTEMPT_LOGIN', data: 'testemail' });
        expect(newState.email).toEqual('testemail');
    })});