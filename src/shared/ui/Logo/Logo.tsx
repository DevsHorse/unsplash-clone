import { FC, SVGProps } from 'react';

type PropsType = SVGProps<SVGSVGElement>;

const Logo: FC<PropsType> = (props) => {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      aria-hidden='false'
      {...props}
    >
      <desc lang='en-US'>Logo</desc>
      <path d='M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z'></path>
    </svg>
  );
};

export default Logo;
