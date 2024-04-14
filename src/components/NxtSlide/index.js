import {Component} from 'react'
import ContextSlide from '../../ContextSlide'
import SlideItem from '../SlideItem'
import Slide from '../Slide'

import './index.css'

class NxtSlide extends Component {
  render() {
    return (
      <ContextSlide.Consumer>
        {value => {
          const [initialList] = value
          return (
            <div className="slides-content-container">
              <ol className="slides-container">
                {initialList.map((item, index) => (
                  <SlideItem
                    details={item}
                    key={item.id}
                    serialNumber={index + 1}
                  />
                ))}
              </ol>
              <Slide />
            </div>
          )
        }}
      </ContextSlide.Consumer>
    )
  }
}
export default NxtSlide
