//if we want to set a default prop on our desrtrctuing. we need to add an = on the righ side of the prop
//that we are destructuring.
export default function Tabs({ children, buttons, ButtonsContainer = 'menu'}) {
      {/*WRAPPER COMPONENT */}
    
  return (
    <>
      <ButtonsContainer>
        {buttons}
      </ButtonsContainer>
      {children}
    </>
  )
}