import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  saveData,
  getDone,
  getUnDone
} from './counterSlice';

import $ from 'jquery';

import Group from './Group';

const Counter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    $.ajax({
      url: './data.json',
      method: 'GET',
      dataType: 'json',
    })
      .done((success) => {
        console.log(success.orders)
        dispatch(saveData(success.orders))
      })
      .fail((error) => {
        console.log(error)
      })
  }, [])
  const done = useSelector(getDone);
  const undone = useSelector(getUnDone);
  return (
    <Fragment>
      {undone.length != 0 ? <Group state='0' data={undone} /> : ""}
      {done.length != 0 ? <Group state='1' data={done} /> : ""}
    </Fragment>
  );
}

export default Counter;
