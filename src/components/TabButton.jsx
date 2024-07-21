{/*
  using on key word for props   that recive a function that will be triggerd
  upon an event should start with ON i.e onSelect or onHandleThisClick
*/}

export default function TabButton({children, onSelect, isSelected}) {

  return (
    <li>
      <button className={isSelected ? 'active' : ''} onClick={onSelect}>
        {children}
      </button>
    </li>
  )
}