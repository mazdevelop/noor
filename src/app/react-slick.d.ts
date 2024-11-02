declare module 'react-slick' {
  import { Component } from 'react';

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
    centerMode?: boolean;
    centerPadding?: string;
    className?: string;
    lazyLoad?: 'ondemand' | 'progressive';
    responsive?: Array<{
      breakpoint: number;
      settings: Settings | 'unslick';
    }>;
    nextArrow?: React.ReactElement<CustomArrowProps>;
    prevArrow?: React.ReactElement<CustomArrowProps>;
  }

  export default class Slider extends Component<Settings> {}
}