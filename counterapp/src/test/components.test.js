import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('components testing', function(){
    describe('App testing', function(){
        it('render correctly', function(){
            var domtree = renderer.create(<App/>).toJSON();
            expect(domtree).toMatchSnapshot();
        });
    });
});

