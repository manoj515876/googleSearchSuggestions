import './index.css'

const SuggestionItem = props => {
  const {itemDetails, onClickSuggestion} = props
  const {suggestion} = itemDetails

  const onSearch = () => {
    onClickSuggestion(suggestion)
  }

  return (
    <li className="list-card">
      <p className="para">{suggestion}</p>
      <button className="card-btn" type="button" onClick={onSearch}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
