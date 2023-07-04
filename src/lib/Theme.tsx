import { configResponsive } from "ahooks";

const screenSM = 640;
const screenMD = 768;
const screenLG = 1024;
const screenXL = 1280;
const screenXXL = 1536;

configResponsive({
  xs: 0,
  sm: screenSM,
  md: screenMD,
  lg: screenLG,
  xl: screenXL,
  xxl: screenXXL,
});
