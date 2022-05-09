import React from 'react';
import { SvgXml } from 'react-native-svg';


const AddSvg = `
<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_47_3)">
<path d="M10.0241 12.9206C10.0241 12.0897 10.0241 11.2588 10.0241 10.4285C10.0241 10.1187 10.1205 10.0237 10.4316 10.0237C12.077 10.0237 13.7218 10.0237 15.3672 10.0237C15.79 10.0237 16.1729 9.91798 16.5 9.63147C16.9455 9.24127 17.1143 8.61376 16.9222 8.01151C16.748 7.46509 16.2354 7.05163 15.663 7.00111C15.5035 6.98715 15.3426 6.97851 15.1824 6.97851C13.6094 6.97718 12.0358 6.97784 10.4628 6.97718C10.1078 6.97718 10.0241 6.89342 10.0241 6.53646C10.0241 4.90253 10.0241 3.26861 10.0241 1.63468C10.0241 1.21191 9.91836 0.829019 9.63183 0.501968C9.24557 0.0619116 8.61333 -0.11225 8.02696 0.0738767C7.46785 0.251362 7.05234 0.761216 7.00115 1.33954C6.98719 1.49907 6.97855 1.65994 6.97855 1.82014C6.97722 3.39291 6.97788 4.96635 6.97722 6.53912C6.97722 6.89409 6.89345 6.97784 6.53644 6.97784C4.90233 6.97784 3.26821 6.97784 1.63409 6.97784C1.21127 6.97784 0.828338 7.08354 0.501248 7.37004C0.0611404 7.75625 -0.113041 8.38775 0.0731071 8.97471C0.250613 9.53376 0.760527 9.94922 1.33892 10.0004C1.49847 10.0144 1.65936 10.023 1.81958 10.023C3.39253 10.0243 4.96615 10.0237 6.5391 10.0243C6.89412 10.0243 6.97788 10.1081 6.97788 10.4651C6.97788 12.099 6.97788 13.7329 6.97788 15.3668C6.97788 15.7896 7.08359 16.1725 7.37012 16.4995C7.75638 16.9396 8.38862 17.1138 8.97499 16.9276C9.5341 16.7501 9.97288 16.241 9.99615 15.662C10.0274 14.8656 10.0174 14.0679 10.0247 13.2709C10.0261 13.1546 10.0247 13.0383 10.0247 12.9219L10.0241 12.9206Z" fill="#25D0A2"/>
</g>
<defs>
<clipPath id="clip0_47_3">
<rect width="17" height="17" fill="white" transform="matrix(1 0 0 -1 0 17)"/>
</clipPath>
</defs>
</svg>
`

export default () => <SvgXml xml={AddSvg} width="100%" height="100%" />