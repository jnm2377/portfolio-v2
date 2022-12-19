import NextImage from 'next/image';
import { useThemePreference } from '../ThemePreference';

const Image = ({ src, alt, height, width }) => {
  const { theme } = useThemePreference();

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

  const imageProps = {
    src,
    alt,
    height,
    width,
    layout: 'responsive',
    placeholder: 'blur',
    blurDataURL:
      theme === 'g10' ? rgbDataURL(222, 173, 250) : rgbDataURL(3, 23, 66),
  };
  return <NextImage {...imageProps} />;
};

export default Image;
