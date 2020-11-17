import React from "react"
// import style from "./grid-001.module.css"

import styled from 'styled-components'

const StyledDiv = styled.div`

  :root {
    --darkgreen: #00a651;
    --green: #39b54a;
    --yellow: #fff197;
    --orange: #f58e81;
    --purple: #9990c5;
  }

    display: grid;
    color: black;
    gap: 5px;
    grid-template-columns: repeat(5, calc(95vw / 5));
    grid-template-rows: repeat(8, calc(95vw / 5));
    text-align: center;
    background-color: black;
    margin: 0;
    padding: 0;

  .item_001 {
    grid-column: 1/3;
    grid-row: 1/3;
    background-color: var(--green);
  }
  .item_002 {
    grid-column: 3/4;
    grid-row: 1/2;
    background-color: var(--purple);
  }
  .item_003 {
    grid-column: 3/5;
    grid-row: 2/3;
    background-color: var(--yellow);
  }
  .item_004 {
    grid-column: 2/4;
    grid-row: 3/4;
    background-color: var(--orange);
  }
  .item_005 {
    grid-column: 4/5;
    grid-row: 3/4;
    background-color: var(--green);
  }
  .item_006 {
    grid-column: 1/2;
    grid-row: 4/5;
    background-color: var(--purple);
  }
  .item_007 {
    grid-column: 2/3;
    grid-row: 4/5;
    background-color: var(--yellow);
  }
  .item_008 {
    grid-column: 3/4;
    grid-row: 4/5;
    background-color: var(--green);
  }
  .item_009 {
    grid-column: 4/6;
    grid-row: 4/6;
    background-color: var(--purple);
  }
  .item_010 {
    grid-column: 2/4;
    grid-row: 5/6;
    background-color: var(--orange);
  }
  .item_011 {
    grid-column: 2/3;
    grid-row: 6/7;
    background-color: var(--purple);
  }
  .item_012 {
    grid-column: 3/4;
    grid-row: 6/8;
    background-color: var(--yellow);
  }
  .item_013 {
    grid-column: 4/5;
    grid-row: 6/7;
    background-color: var(--green);
  }
  .item_014 {
    grid-column: 1/3;
    grid-row: 7/9;
    background-color: var(--darkgreen);
  }


`

export default function Grid01() {
  return (
    <StyledDiv>
      <div className='item_001'>item 01</div>
      <div className='item_002'>item 02</div>
      <div className='item_003'>item 03</div>
      <div className='item_004'>item 04</div>
      <div className='item_005'>item 05</div>
      <div className='item_006'>item 06</div>
      <div className='item_007'>item 07</div>
      <div className='item_008'>item 08</div>
      <div className='item_009'>item 09</div>
      <div className='item_010'>item 10</div>
      <div className='item_011'>item 11</div>
      <div className='item_012'>item 12</div>
      <div className='item_013'>item 13</div>
      <div className='item_014'>item 14</div>
    </StyledDiv>
  )
}
