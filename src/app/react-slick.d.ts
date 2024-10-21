declare module 'react-slick' {
    import { Component } from 'react';
  
    interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      arrows?: boolean;
      responsive?: Array<{ breakpoint: number; settings: Settings }>;
    }
  
    export default class Slider extends Component<Settings> {}
  }
  