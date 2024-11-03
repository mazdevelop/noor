declare module 'react-slick' {
  import { Component, ReactNode } from 'react';

  export interface CustomArrowProps {
    className?: string;
    style?: object;
    onClick?: () => void;
    currentSlide?: number;
    slideCount?: number;
  }

  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    arrows?: boolean;
    vertical?: boolean;
    centerMode?: boolean;
    centerPadding?: string;
    pauseOnHover?: boolean;
    rtl?: boolean;
    cssEase?: string;
    className?: string;
    lazyLoad?: 'ondemand' | 'progressive';
    swipeToSlide?:boolean;
    appendDots?: (dots: ReactNode) => ReactNode;
    customPaging?: (i: number) => ReactNode;
    responsive?: Array<{
      breakpoint: number;
      settings: Settings | 'unslick';
    }>;
    nextArrow?: React.ReactElement<CustomArrowProps>;
    prevArrow?: React.ReactElement<CustomArrowProps>;
    children?: ReactNode;  // Add children prop here
  }

  export default class Slider extends Component<Settings> {}
}