// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqDetails} = props
  const {questionText, answerText} = faqDetails

  return (
    <li className="list-item">
      <div className="faq-container">
        <h1 className="faq">{questionText}</h1>
        <button type="button" className="plus-minus-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
            alt="plus"
            className="plus-minus-img"
          />
        </button>
      </div>
      <p className="answerText">{answerText}</p>
    </li>
  )
}

export default FaqItem
