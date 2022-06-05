function MinMaxLazy({ min = 1, max, current, onChange }) {
  
  function applyCurrent(num) {
    const validNum = Math.max(min, Math.min(max, num))
    onChange(validNum)
  }

  function parseCurrentStr(event) {
    onChange(event.target.value)
  }

  function ValidateBlur(event) {
    
    const num = parseInt(event.target.value, 10)
    applyCurrent(Number.isNaN(num) ? min : num)
  }
  
  function validateKey(event) {
    
    if (event.key === 'Enter') {

      const num = parseInt(event.target.value, 10)
      applyCurrent(Number.isNaN(num) ? min : num)
    }
  }

  const inc = () => applyCurrent(current + 1)
  const dec = () => applyCurrent(current - 1)
  
  return (
      <div className="App">
          <button type="button" onClick={dec} className="removeButton">
            -
          </button> 
          <input type="text" value={current} onChange={parseCurrentStr} onBlur={ValidateBlur} onKeyDown={validateKey} />
          <button type="button" onClick={inc} className="addButton">
            +
          </button>  
      </div>
  )
}

export default MinMaxLazy