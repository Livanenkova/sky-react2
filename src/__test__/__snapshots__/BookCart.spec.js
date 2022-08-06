/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import renderer from 'react-test-renderer';
import {Router } from 'react-router-dom';
import BookCart from '../../views/BookCart';

const { createMemoryHistory } = require("history");


it('отображается корректно', () => {
  const history = createMemoryHistory();
  const tree = renderer.create(<Router location={history.location} navigator={history}><BookCart/></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});

