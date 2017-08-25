import React from 'react';

const NavbarTickerTape = (props) => {
  return (
    <div id="ticker-tape">
        <marquee behavior="scroll" direction="right" scrollamount="5">
          <div id="inner-tape">
            <p className="tape-element green">NTLA 17.67
              <a className="pointer" >▲</a></p>
            <p className="tape-element red">XOM 76.33
              <a className="pointer" >▼</a></p>
            <p className="tape-element green">AA 41.34
              <a className="pointer" >▲</a></p>
            <p className="tape-element orange">ticker
              <a className="pointer" >▲</a></p>
            <p className="tape-element red">APRN 5.48
              <a className="pointer" >▼</a></p>
            <p className="tape-element green">MON 116.68
              <a className="pointer" >▲</a></p>
            <p className="tape-element green">PM 114.52
              <a className="pointer" >▲</a></p>
            <p className="tape-element orange">ticker
              <a className="pointer" >▲</a></p>
            <p className="tape-element red">GILD 72.60
              <a className="pointer" >▼</a></p>
            <p className="tape-element red">MO 63.68
              <a className="pointer" >▼</a></p>
            <p className="tape-element green">JNJ 133.45
              <a className="pointer" >▲</a></p>
              <p className="tape-element orange">ticker
                <a className="pointer" >▲</a></p>
            <p className="tape-element green">SNAP 13.58
              <a className="pointer" >▲</a></p>
            <p className="tape-element red">NFLX 166.76
              <a className="pointer" >▼</a></p>
            <p className="tape-element green">MSFT 71.98
              <a className="pointer" >▲</a></p>
              <p className="tape-element orange">ticker
                <a className="pointer" >▲</a></p>
            <p className="tape-element red">GOOGL 920.53
              <a className="pointer" >▼</a></p>
            <p className="tape-element green">AAPL 156.92
              <a className="pointer" >▲</a></p>
            <p className="tape-element green">AMZN 316.78
              <a className="pointer" >▲</a></p>
            <p className="tape-element orange">ticker
              <a className="pointer" >▲</a></p>
          </div>
        </marquee>
      </div>
  );
};

export default NavbarTickerTape;
