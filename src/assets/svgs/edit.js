import React from 'react';
import { SvgXml } from 'react-native-svg';


const EditSvg = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_57_139)">
<path d="M2.59286 15.9599C2.59286 18.9409 2.59286 21.9218 2.59286 24.9027C2.59286 26.7158 3.25108 28.1762 4.94794 28.974C5.51105 29.2391 6.1893 29.3691 6.81498 29.3766C11.0071 29.4116 15.1991 29.3891 19.3937 29.4041C19.8793 29.4041 20.052 29.2766 20.0419 28.7689C20.0094 27.2885 20.0269 25.808 20.0319 24.3275C20.0394 21.7592 21.7163 20.0662 24.2991 20.0337C25.7807 20.0162 27.2623 20.0087 28.7415 20.0412C29.2795 20.0537 29.4122 19.8586 29.4047 19.356C29.3822 17.4804 29.3922 15.6023 29.3997 13.7267C29.3997 13.4391 29.4047 13.134 29.4923 12.864C29.6775 12.2788 30.2556 11.9587 30.8763 12.0387C31.4294 12.1087 31.9024 12.5814 31.98 13.1565C32.005 13.3416 31.9975 13.5317 31.9975 13.7192C31.9975 16.2825 31.9925 18.8483 32 21.4116C32.005 23.3247 31.4619 25.0328 30.1055 26.4157C28.8215 27.7236 27.5151 29.014 26.1812 30.2719C24.8897 31.4898 23.2855 31.9774 21.5436 31.9849C16.6407 32.0024 11.7404 31.9974 6.8375 31.9899C2.9908 31.9849 0.0250546 29.0365 0.0150437 25.1803C2.72501e-05 19.0709 -0.00748096 12.964 0.0175464 6.85458C0.0300601 3.21344 2.59537 0.114973 6.69235 0.0374484C10.6342 -0.0375751 14.576 0.0199429 18.5203 0.0224437C19.1034 0.0224437 19.5915 0.217505 19.8592 0.767677C20.0895 1.24032 20.0745 1.74798 19.6991 2.10309C19.4363 2.35317 19.0333 2.54823 18.6755 2.58074C17.8696 2.65577 17.0512 2.61826 16.2378 2.61826C13.1719 2.61826 10.1061 2.61325 7.03772 2.62076C4.87035 2.62826 3.37872 3.61607 2.82562 5.47665C2.65043 6.06433 2.60788 6.70703 2.60287 7.32723C2.58035 10.2031 2.59286 13.0815 2.59286 15.9574V15.9599ZM29.192 22.7395C29.0818 22.7095 28.9667 22.6495 28.8516 22.6495C27.2698 22.647 25.6881 22.627 24.1089 22.6645C23.1729 22.687 22.6648 23.2347 22.6523 24.18C22.6323 25.7405 22.6423 27.2985 22.6473 28.859C22.6473 28.9715 22.7074 29.084 22.7399 29.1966C24.4242 28.844 28.8866 24.3776 29.1945 22.742L29.192 22.7395Z" fill="#25D0A2"/>
<path d="M6.6949 22.9872C6.56976 20.6189 7.42319 18.6958 9.12756 17.0203C14.3883 11.8462 19.584 6.60204 24.8047 1.38291C26.0461 0.142519 27.5352 -0.200088 29.1645 0.317574C30.8038 0.837737 31.7248 2.05312 31.935 3.75365C32.0877 4.99654 31.7248 6.11689 30.8338 7.00967C25.2952 12.5589 19.7592 18.1106 14.1906 23.6299C12.9167 24.8928 11.2549 25.3029 9.49546 25.3329C9.03746 25.3404 8.57695 25.3529 8.11895 25.3279C7.22047 25.2779 6.80001 24.8803 6.7024 23.985C6.66737 23.6549 6.6974 23.3198 6.6974 22.9872H6.6949ZM9.3503 22.6521C10.6893 22.7996 11.7905 22.3845 12.6864 21.4917C18.0773 16.1225 23.4582 10.7383 28.8366 5.35415C29.5048 4.68644 29.5324 3.68613 28.9417 3.11595C28.311 2.50826 27.3175 2.52827 26.6417 3.20098C21.2834 8.54765 15.9275 13.8943 10.5842 19.2535C9.68066 20.1613 9.19763 21.2641 9.3503 22.6496V22.6521Z" fill="#25D0A2"/>
</g>
<defs>
<clipPath id="clip0_57_139">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
`

export default () => <SvgXml xml={EditSvg} width="100%" height="100%" />;