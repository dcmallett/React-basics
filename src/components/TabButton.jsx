{/*
  using on key word for props   that recive a function that will be triggerd
  upon an event should start with ON i.e onSelect or onHandleThisClick
*/}

//here we are forwarding all the props to our custom component
//so we can utilize onClick here without specifying anohter prop
//we are just forwarding all the props
export default function TabButton({children, isSelected, ...props}) {

  return (
    <li>
      <button className={isSelected ? 'active' : ''} {...props}>
        {children}
      </button>
    </li>
  )
}