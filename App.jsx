import React from 'react';
import slides from './data/data.js';
import Slider from './components/Slider';

class App extends React.Component {
   render() {
      return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    {/* Load slider */}
                    <Slider data={slides.items} />
                </div>
            </div>
        </div>
      );
   }
}

export default App;