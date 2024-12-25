import type { ComponentProps, FC } from 'react';

const Success: FC<ComponentProps<'svg'>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path d="M128 24a104 104 0 10104 104A104.11 104.11 0 00128 24zm45.66 85.66l-56 56a8 8 0 01-11.32 0l-24-24a8 8 0 0111.32-11.32L112 148.69l50.34-50.35a8 8 0 0111.32 11.32z"></path>
  </svg>
);

const Warning: FC<ComponentProps<'svg'>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path d="M236.8 188.09L149.35 36.22a24.76 24.76 0 00-42.7 0L19.2 188.09a23.51 23.51 0 000 23.72A24.35 24.35 0 0040.55 224h174.9a24.35 24.35 0 0021.33-12.19 23.51 23.51 0 00.02-23.72zM120 104a8 8 0 0116 0v40a8 8 0 01-16 0zm8 88a12 12 0 1112-12 12 12 0 01-12 12z"></path>
  </svg>
);

const Error: FC<ComponentProps<'svg'>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path d="M128 24a104 104 0 10104 104A104.11 104.11 0 00128 24zm-8 56a8 8 0 0116 0v56a8 8 0 01-16 0zm8 104a12 12 0 1112-12 12 12 0 01-12 12z"></path>
  </svg>
);

const Info: FC<ComponentProps<'svg'>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path d="M128 24a104 104 0 10104 104A104.11 104.11 0 00128 24zm-4 48a12 12 0 11-12 12 12 12 0 0112-12zm12 112a16 16 0 01-16-16v-40a8 8 0 010-16 16 16 0 0116 16v40a8 8 0 010 16z"></path>
  </svg>
);

const Loading: FC<ComponentProps<'svg'>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path d="M136 32v32a8 8 0 01-16 0V32a8 8 0 0116 0zm37.25 58.75a8 8 0 005.66-2.35l22.63-22.62a8 8 0 00-11.32-11.32L167.6 77.09a8 8 0 005.65 13.66zM224 120h-32a8 8 0 000 16h32a8 8 0 000-16zm-45.09 47.6a8 8 0 00-11.31 11.31l22.62 22.63a8 8 0 0011.32-11.32zM128 184a8 8 0 00-8 8v32a8 8 0 0016 0v-32a8 8 0 00-8-8zm-50.91-16.4l-22.63 22.62a8 8 0 0011.32 11.32l22.62-22.63a8 8 0 00-11.31-11.31zM72 128a8 8 0 00-8-8H32a8 8 0 000 16h32a8 8 0 008-8zm-6.22-73.54a8 8 0 00-11.32 11.32L77.09 88.4A8 8 0 0088.4 77.09z"></path>
  </svg>
);


const Close: FC<ComponentProps<'svg'>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M10.03 8.97a.75.75 0 0 0-1.06 1.06L10.94 12l-1.97 1.97a.75.75 0 1 0 1.06 1.06L12 13.06l1.97 1.97a.75.75 0 0 0 1.06-1.06L13.06 12l1.97-1.97a.75.75 0 1 0-1.06-1.06L12 10.94z"></path><path fill="currentColor" fillRule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0" clipRule="evenodd"></path>
  </svg>
);



export { Close, Error, Info, Loading, Success, Warning };

