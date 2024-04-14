import {Component} from 'react'
import ContextSlide from '../../ContextSlide'
import './index.css'

class SlideItem extends Component {
  render() {
    const [detail, serialNumber] = this.props
    const [description, heading] = detail
    return (
      <ContextSlide.Consumer>
        {value => {
          const {changeActiveTab, activeIndex} = value
          const isActive = activeIndex === serialNumber - 1
          const activeStyling = isActive ? 'slide-bg' : ''

          const onClickSlideTab = () => {
            changeActiveTab(serialNumber - 1)
          }

          return (
            <li
              onClick={onClickSlideTab}
              testid={`slideTab${serialNumber}`}
              className={`slide-item-container ${activeStyling}`}
            >
              <p>{serialNumber}</p>
              <div className="list-container">
                <h1>{heading}</h1>
                <p>{description}</p>
              </div>
            </li>
          )
        }}
      </ContextSlide.Consumer>
    )
  }
}

export default SlideItem
