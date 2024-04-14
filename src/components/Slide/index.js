import {Component} from 'react'
import ContextSlide from '../../ContextSlide'
import './index.css'

class Slide extends Component {
  state = {headingActive: true, descriptionActive: true}

  onClickHeading = () => {
    this.setState({headingActive: false})
  }

  onClickDescription = () => {
    this.setState({descriptionActive: false})
  }

  render() {
    const {headingActive, descriptionActive} = this.state

    return (
      <ContextSlide.Consumer>
        {value => {
          const {initialList, activeIndex, changeHeading, changeDescription} =
            value

          const onBlurDescription = event => {
            if (event.target.value === '') {
              changeDescription('Description')
            }
            this.setState({descriptionActive: true})
          }

          const onBlurHeading = event => {
            if (event.target.value === '') {
              changeHeading('Heading')
            }
            this.setState({headingActive: true})
          }

          const onChangeHeading = event => {
            changeHeading(event.target.value)
          }

          const onChangeDescription = event => {
            changeDescription(event.target.value)
          }

          const tabDetails = initialList[activeIndex]
          const {description, heading} = tabDetails

          return (
            <div className="slide-container">
              {headingActive ? (
                <h1 className="slide-heading" onClick={this.onClickHeading}>
                  {heading}
                </h1>
              ) : (
                <input
                  className="slide-heading"
                  type="text"
                  value={heading}
                  onChange={this.onChangeHeading}
                  onBlur={this.onBlurHeading}
                />
              )}

              {descriptionActive ? (
                <p className="slide-para" onClick={this.onClickDescription}>
                  {description}
                </p>
              ) : (
                <input
                  className="slide-para"
                  type="text"
                  value={this.description}
                  onChange={this.onChangeDescription}
                  onBlur={this.onBlurDescription}
                />
              )}
            </div>
          )
        }}
      </ContextSlide.Consumer>
    )
  }
}

export default Slide
