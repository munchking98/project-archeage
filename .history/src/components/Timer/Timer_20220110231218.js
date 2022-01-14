import React from 'react';
import styled from 'styled-components';

import sound from './lol.mp3';
import schedule from './schedule.js';

import { Table } from 'react-bootstrap';

// const
const Timer = () => {
  const audio = new Audio(sound);
  // audio.play();
  const cr = schedule
    .filter((v) => v.name === '낮징')[0]
    .time.map((v) => {
      return { name: '낮징', time: v };
    });
  const gr = schedule
    .filter((v) => v.name === '밤징')[0]
    .time.map((v) => {
      return { name: '밤징', time: v };
    });
  const riftRaid = [...cr, ...gr];
  console.log(riftRaid.sort((a, b) => b.itme - a.time));
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>이름</th>
            <th>시간</th>
          </tr>
        </thead>
        <tbody>
          {riftRaid.map((v, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{v.name}</td>
              <td>{v.time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Timer;
