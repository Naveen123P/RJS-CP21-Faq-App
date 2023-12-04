// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqsList} = props
  const {questionText, answerText} = faqsList

  return (
    <li className="list-item">
      <div className="faq-container">
        <h1 className="faq">{questionText}</h1>
        <button type="button" className="plus-minus-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
            alt="minus"
            className="plus-minus-img"
          />
        </button>
        <p className="answerText">{answerText}</p>
      </div>
    </li>
  )
}

export default FaqItem
