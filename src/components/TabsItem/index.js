import './index.css'

const TabsItem = props => {
  const {tabsDetails, tabClicked, isActive} = props
  const {displayText, tabId} = tabsDetails

  const onClickTab = () => {
    tabClicked(tabId)
  }
  const classname = isActive ? 'tabs-button active' : 'tabs-button'

  return (
    <li className="tabs-button-list-container">
      <button className={classname} onClick={onClickTab} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabsItem
