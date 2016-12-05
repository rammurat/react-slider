import React from 'react';

class SlideItem extends React.Component {
   render() {
    //set activate state on selected slider 
    let _activeState = (this.props.itemIndex === this.props.slideToShow-1) ? "active" : "";

    return (
    <div className={"item " + _activeState}>
        <img src={this.props.img} alt={this.props.caption} />
        <div className="carousel-caption">
            <h3>{this.props.caption}</h3>
        </div>
    </div>
    );
   }
}

export default SlideItem;