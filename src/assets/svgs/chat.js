import React from 'react';
import { SvgXml } from 'react-native-svg';


const ChatSvg = `
<svg width="364" height="133" viewBox="0 0 364 133" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="364" height="133" rx="21" fill="#FFD75D"/>
<ellipse cx="329" cy="99.5" rx="19" ry="19.5" fill="#FAFAFA"/>
<path d="M318.002 111C318.495 109.218 318.979 107.51 319.43 105.792C319.49 105.559 319.456 105.246 319.345 105.032C317.858 102.156 317.669 99.1963 318.776 96.1707C319.827 93.2936 321.796 91.2166 324.59 89.9794C327.51 88.6869 330.491 88.6679 333.424 89.9569C336.472 91.2978 338.544 93.5874 339.495 96.7633C340.541 100.262 339.962 103.554 337.763 106.495C336.089 108.735 333.837 110.131 331.078 110.653C328.718 111.1 326.434 110.798 324.272 109.744C323.919 109.571 323.62 109.561 323.257 109.657C321.623 110.1 319.983 110.521 318.344 110.948C318.248 110.972 318.149 110.976 318 110.997L318.002 111ZM320.566 108.498C321.668 108.216 322.666 107.947 323.67 107.715C323.882 107.667 324.158 107.693 324.349 107.791C325.478 108.384 326.651 108.864 327.927 108.985C331.354 109.31 334.184 108.149 336.309 105.436C339.134 101.83 338.714 96.5042 335.376 93.38C333.184 91.3289 330.585 90.4926 327.604 90.9591C324.673 91.417 322.452 92.9808 321.04 95.5486C319.383 98.5604 319.484 101.622 321.187 104.607C321.418 105.009 321.455 105.341 321.319 105.771C321.047 106.64 320.832 107.529 320.568 108.498H320.566Z" fill="#26D1A3"/>
</svg>

`

export default () => <SvgXml xml={ChatSvg} width="100%" height="100%" />;