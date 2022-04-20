import tilt from 'tilt.js';

const initTilt = () => {
  // Projects images
  $('.tc logo').tilt({
    maxTilt: 9,
  });
};

export default initTilt;