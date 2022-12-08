import NextImage from 'next/image';

const Image = ({ src, alt, height, width }) => {
  const imageProps = {
    src,
    alt,
    height,
    width,
    layout: 'responsive',
  };
  return <NextImage {...imageProps} />;
};

export default Image;
