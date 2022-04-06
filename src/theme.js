const deviceSizes = {
  mobile: '375px',
  tablet: '768px',
  laptop: '1024px',
};

const device = {
  mobile: `all and (min-width:330px) and (max-width:${deviceSizes.mobile})`,
  tablet: `all and (min-width:${deviceSizes.mobile}) and (max-width:${deviceSizes.tablet})`,
  laptop: `all and (min-width:${deviceSizes.tablet})`,
};

const pixelToRem = (size) => `${size / 16}rem`;

const fontSize = {
  big: pixelToRem(25),
  middle: pixelToRem(20),
  Small: pixelToRem(15),
};

const color = {
  black: '#000',
  white: '#FFFFFF',
  lightGrey: '#eeeeee',
  grey: '#bdbdbd',
};

const theme = {
  fontSize,
  color,
  device,
};

export default theme;
