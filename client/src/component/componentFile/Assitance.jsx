import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Draggable from "react-draggable";
import { useRef } from "react";
import { Container, Tooltip } from "react-bootstrap";
import { Overlay } from "react-bootstrap";
import Popover from "react-bootstrap/Popover";

function Assitance({ showText, setshowText, stateIndex, setstateIndex }) {
  const target = useRef(null); //default props set to false

  const stateIMG = [
    "https://images.squarespace-cdn.com/content/v1/581499b8e58c627afce6221c/1581466535600-K13XTW44G4XOOC0RFPN5/winky.gif?format=500w",
    "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1",
  ];

  const hoverToggle = () => {
    setshowText(!showText);
  };

  const textState = (stateIndex) => {
    switch (stateIndex) {
      case 0:
        return (
          <Popover id="popover-contained">
            <Popover.Header as="h3">
              <strong>Hello mtfuckler this is TESTING</strong>
            </Popover.Header>
            <Popover.Body>
              <strong> I'm PopCorn-Meter website's Mascot PROTOTYPE!</strong>
              <p>!!!Everything is prototype also my Image!!!</p>
              <p>and in the future you can click to hide me</p>
              <p>YOU CAN DRAG ME AROUND!</p>
              <p>YOU CAN DRAG ME AROUND!</p>
            </Popover.Body>
          </Popover>
        );
      case 1:
        return (
          <Popover id="popover-contained">
            <Popover.Header as="h3">Popover bottom</Popover.Header>
            <Popover.Body>
              <strong>Holy guacamole2</strong> Check this info.
            </Popover.Body>
          </Popover>
        );
      case 2:
        return (
          <Popover id="popover-contained">
            <Popover.Header as="h3">Popover bottom</Popover.Header>
            <Popover.Body>
              <strong>Holy guacamole!</strong> Check this info.
            </Popover.Body>
          </Popover>
        );
      case 3:
        return (
          <Popover id="popover-contained">
            <Popover.Header as="h3">Popover bottom</Popover.Header>
            <Popover.Body>
              <strong>Holy guacamole!</strong> Check this info.
            </Popover.Body>
          </Popover>
        );
    }
  };

  return (
    <>
      <Overlay target={target.current} show={showText} placement="top">
        {textState(stateIndex)}
      </Overlay>

      <Draggable>
        <div
          ref={target}
          style={{
            height: "200px",
            width: "200px",
            position: "fixed",
            right: 0,
            bottom: 0,
            zIndex: "10",
          }}
        >
          <img
            onMouseEnter={hoverToggle}
            onMouseLeave={hoverToggle}
            draggable="false"
            style={{ height: "100%", width: "100%" }}
            className="rounded"
            src={stateIMG[stateIndex]}
          />
        </div>
      </Draggable>
    </>
  );
}

export default Assitance;
