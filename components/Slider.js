import React from 'react';
import SlideItem from './SlideItem';

class Slider extends React.Component {
   constructor(props) {
      super(props);

      //component default state 
      this.state = {
         prevSlide: 1,
         currentSlide: 1,
         totalSlides : 5
      }

      //binding default events
      this.nextSlide = this.nextSlide.bind(this);
      this.prevSlide = this.prevSlide.bind(this);
      this.updateSlideNav = this.updateSlideNav.bind(this);
   }
   prevSlide() {
        let currentSlide = this.state.currentSlide,
			slideToSet = (currentSlide == 1) ? this.state.totalSlides : --currentSlide;
        
        //set previous slide status
        this.setState({prevSlide: this.state.currentSlide,currentSlide: slideToSet});
   }
   nextSlide() {
        let currentSlide = this.state.currentSlide,
            slideToSet = (currentSlide != this.state.totalSlides) ? ++currentSlide : 1;

        //set next slide status
        this.setState({prevSlide: this.state.currentSlide,currentSlide: slideToSet});
   }
   updateSlideNav(e) {
        let slideToSet = parseInt(e.target.getAttribute('data-slide-to'))+1;

        //set selected slide status
        this.setState({prevSlide: this.state.currentSlide,currentSlide: slideToSet});
   }
   render() {
       let slides = [],
            pager = [],
            _this = this;

        //Traverse all the slide items
        {this.props.data.map(function(item, index) {
            var _index = parseInt(index),
                _activeState = (_index === _this.state.currentSlide-1) ? "active" : "";
                
            //add slide item and pager
            slides.push(<SlideItem key = {index} img={item.img} caption={item.caption} itemIndex={_index} slideToShow={_this.state.currentSlide} />);
            pager.push(<li key = {index} data-target="#myCarousel" data-slide-to={_index} className={_activeState} onClick={_this.updateSlideNav}></li>)
        })}
        
      return (
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                {/* Load slider pager*/}
                {pager}
            </ol>
            <div className="carousel-inner" role="listbox">
                {/* Load slider slides*/}
                {slides}
            </div>
            <a className="carousel-control left" href="#myCarousel" data-slide="prev" role="button" onClick={this.prevSlide}>&lt;</a>
            <a className="carousel-control right" href="#myCarousel" data-slide="next" role="button" onClick={this.nextSlide}>&gt;</a>
        </div>
      )
        
   }
}

export default Slider;