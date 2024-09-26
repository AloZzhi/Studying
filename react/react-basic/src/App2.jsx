function App() {
  const handlerClick = (n, e) => {
    console.log('clicked', n, e);
  }
  return (
    <div>
      <h3>Hello React</h3>
      <button onClick={(e) => { handlerClick(186, e) }}>click me</button>
    </div>
  )
}

export default App