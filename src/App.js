import {Component} from 'react'
import Nxtslide from './components/NxtSlide'
import ContextSlide from './ContextSlide'
import Header from './components/Header'
import NewButton from './components/NewButton'
import './App.css'

// This is the list used in the application. You can move them to any component needed.
const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

// Replace your code here

const push = (arr, index, newItem) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index),
]

class App extends Component {
  state = {initialList: initialSlidesList, activeIndex: 0}

  changeHeading = value => {
    const {activeIndex} = this.state
    this.setState(preve => {
      const {initialList} = preve
      const newList = initialList.map((item, index) => {
        if (activeIndex === index) {
          return {...item, heading: value}
        }
        return item
      })

      return {initialList: newList}
    })
  }

  changeDescription = value => {
    const {activeIndex} = this.state
    this.setState(preve => {
      const {initialList} = preve
      const newList = initialList.map((item, index) => {
        if (activeIndex === index) {
          return {...item, description: value}
        }
        return item
      })

      return {initialList: newList}
    })
  }

  addNewItem = item => {
    const {activeIndex} = this.state
    this.setState(preve => {
      const [initialList] = preve
      const newList = push(initialList, activeIndex + 1, item)
      return {initialList: newList}
    })
  }

  changeActiveTab = index => {
    this.setState({activeIndex: index})
  }

  render() {
    const {initialList, activeIndex} = this.state
    return (
      <div>
        <Header />
        <ContextSlide.Provider
          value={{
            initialList,
            activeIndex,
            addNewItem: this.addNewItem,
            changeHeading: this.changeHeading,
            changeDescription: this.changeDescription,
            changeActiveTab: this.changeActiveTab,
          }}
        >
          <NewButton />
          <Nxtslide />
        </ContextSlide.Provider>
      </div>
    )
  }
}

export default App
