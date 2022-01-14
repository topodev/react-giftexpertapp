import React from 'react';
import {shallow} from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem/>', () =>{

    test('should show the component correctly ', () => {

        const wrapper= shallow( <GifGridItem/>)
        expect( wrapper ).toMatchSnapshot();
        
    })
    
})