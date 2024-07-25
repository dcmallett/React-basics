//Using the rest operator for all the other props tells  javascript
//to collect all other props that might be recived into this section compoent
//and put them togetherinto this props value for us in this component

//This is a wrapper component
export default function Section({ title, children, ...props}) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

//