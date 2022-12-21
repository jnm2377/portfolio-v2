import React, { useState, useRef } from 'react';
import { RadioButtonGroup, RadioButton } from '@carbon/react';
import Image from 'next/image';
import { useThemePreference } from '../ThemePreference';

const Carousel = ({ children, id, count }) => {
  const stringArr = count.split(' ');
  const numArr = stringArr.map((i) => Number(i));
  const [checkedRadio, setCheckedRadio] = useState(1);
  const slideRef = useRef();
  const { theme } = useThemePreference();

  let initialX = null;
  let initialY = null;

  // Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
  const keyStr =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  const triplet = (e1, e2, e3) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

  const rgbDataURL = (r, g, b) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

  //updating radio btn
  const onChange = (e) => {
    if (typeof document !== undefined) {
      const images = slideRef.current.querySelectorAll('span');

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
      <p className="carousel-helper-text">
        click and drag to swipe or click buttons and use arrow keys
      </p>
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
              <span key={`img-${i}`}>
                <Image
                  draggable="false"
                  src={item.props.children.props.src}
                  alt={item.props.children.props.alt}
                  height={714}
                  width={552}
                  placeholder="blur"
                  blurDataURL={
                    theme === 'g10'
                      ? rgbDataURL(222, 173, 250)
                      : rgbDataURL(3, 23, 66)
                  }
                />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
