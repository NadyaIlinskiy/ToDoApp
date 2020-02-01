import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, render, shallow } from 'enzyme';
import Task from '../components/Task';

configure({ adapter: new Adapter() });


describe('Task component ', () => {

    const editTask = data => {
        console.log(data.id);
    }
    const deleteTask = id => {
        console.log(id);
    }
    const toggleTask = (id, current) => {
        console.log(id);
    }


    let taskFull = render(<Task
        id={1}
        name='Test Name'
        description='Test Description'
        priority={2}
        date={new Date('01.29/2020').toLocaleString()}
        isComplete={false}
        edit={editTask}
        toggle={toggleTask}
        delete={deleteTask}

    />)

    let taskSome = render (<Task
        id={1}
        name='Test Name'
        isComplete={false}
        edit={editTask}
        toggle={toggleTask}
        delete={deleteTask}
    />)

    it('renders correctly when full props given', () => {
        let paragraphs = taskFull.find('p').first();
        expect(taskFull.is('.incomplete')).toBeTruthy();
        expect(paragraphs.first().text()).toEqual('Test Name');
     
    })

    it('renders correctly when some props given', () => {
        let paragraphs = taskSome.find('p').first();
        expect(paragraphs.text()).toEqual('Test Name');
    })

  


}
);