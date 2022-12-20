import React, { useState, useRef } from 'react';
import { RadioButtonGroup, RadioButton } from '@carbon/react';

const Carousel = ({ children, id, count }) => {
  const stringArr = count.split(' ');
  const numArr = stringArr.map((i) => Number(i));
  const [checkedRadio, setCheckedRadio] = useState(1);

  const slideRef = useRef();
  console.log(children);

  let initialX = null;
  let initialY = null;

  //updating radio btn
  const onChange = (e) => {
    if (typeof document !== undefined) {
      const images = slideRef.current.querySelectorAll('img');

      setCheckedRadio(e);

      images.forEach((img) => {
        img.style.transform = `translate(${e * -100 + 100}%, 0)`;
      });
    }
  };

  // touch events
  const touchStart = (e) => {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
  };

  const touchMove = (e) => {
    if (initialX === null) {
      return;
    }

    if (initialY === null) {
      return;
    }

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = initialX - currentX;
    const diffY = initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        // swiped left
        if (checkedRadio === numArr.length) {
          onChange(numArr[0]);
        } else {
          onChange(checkedRadio + 1);
        }
      } else {
        // swiped right
        if (checkedRadio === numArr[0]) {
          onChange(numArr.length);
        } else {
          onChange(checkedRadio - 1);
        }
      }
    }

    initialX = null;
    initialY = null;
    e.preventDefault();
  };

  // mouse events
  const mouseStart = (e) => {
    initialX = e.clientX;
    initialY = e.clientY;
  };

  const mouseMove = (e) => {
    if (initialX === null) {
      return;
    }

    if (initialY === null) {
      return;
    }
    const finalX = e.clientX;
    const finalY = e.clientY;
    const diffX = initialX - finalX;
    const diffY = initialY - finalY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        // swiped left
        if (checkedRadio === numArr.length) {
          onChange(numArr[0]);
        } else {
          onChange(checkedRadio + 1);
        }
      } else {
        // swiped right
        if (checkedRadio === numArr[0]) {
          onChange(numArr.length);
        } else {
          onChange(checkedRadio - 1);
        }
      }
      initialX = null;
      initialY = null;
      e.preventDefault();
    }
  };

  return (
    <div className={`carousel ${id}`}>
      <RadioButtonGroup
        className={'carousel-nav-wrapper'}
        name={`Carousel navigation ${id}`}
        valueSelected={checkedRadio}
        onChange={onChange}
      >
        {numArr.map((i) => {
          return (
            <RadioButton
              className="carousel-nav-item"
              value={i}
              key={i}
              labelText=""
            />
          );
        })}
      </RadioButtonGroup>
      <div className="carousel-slide-wrapper">
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions*/}
        <div
          className={`carousel-slide ${id}`}
          ref={slideRef}
          onTouchStart={touchStart}
          onTouchMove={touchMove}
          onMouseDown={mouseStart}
          onMouseMove={mouseMove}
        >
          {children.map((item, i) => {
            return (
              <img
                draggable="false"
                src={item.props.children.props.src}
                alt={item.props.children.props.alt}
                key={`img-${i}`}
                className="carousel-img"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
