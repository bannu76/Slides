import {v4 as uuidv4} from 'uuid'
import ContextSlide from '../../ContextSlide'
import './index.css'

const NewButton = () => (
  <ContextSlide.Consumer>
    {value => {
      const [activeIndex, addNewItem, changeActiveTab] = value

      const addNewSlide = () => {
        const id = uuidv4()
        const item = {
          id,
          heading: 'Heading',
          description: 'Description',
        }
        addNewItem(item)
        changeActiveTab(activeIndex + 1)
      }

      return (
        <button type="button" onClick={addNewSlide} className="add-button">
          <img
            className="plus-image"
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png "
            alt="new plus icon"
          />
          <p>New</p>
        </button>
      )
    }}
  </ContextSlide.Consumer>
)

export default NewButton
