// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {isIconClicked: false}

  onChangeIconStatus = () => {
    this.setState(prevState => ({isIconClicked: !prevState.isIconClicked}))
  }

  render() {
    const {isIconClicked} = this.state
    const {faqsList} = this.props
    console.log(faqsList)

    return (
      <div className="bg-container1">
        <div className="bg-container2">
          <h1 className="faqs-heading">FAQs</h1>
          <ul>
            {faqsList.map(each => (
              <FaqItem
                key={each.id}
                faqDetails={each}
                onChangeIconStatus={this.onChangeIconStatus}
                isIconClicked1={isIconClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
