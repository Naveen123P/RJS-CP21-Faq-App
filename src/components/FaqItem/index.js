// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqDetails, onChangeIconStatus, isIconClicked1} = props
  const {questionText, answerText} = faqDetails

  const plusOrMinusImg = isIconClicked1
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const getChangedIconStatus = () => {
    onChangeIconStatus()
  }

  return (
    <li className="list-item">
      <div className="faq-container">
        <h1 className="faq">{questionText}</h1>
        <button
          type="button"
          className="plus-minus-button"
          onClick={getChangedIconStatus}
        >
          <img
            src={plusOrMinusImg}
            alt={isIconClicked1 ? 'minus' : 'plus'}
            className="plus-minus-img"
          />
        </button>
      </div>
      {isIconClicked1 && <p className="answerText">{answerText}</p>}
    </li>
  )
}

export default FaqItem
