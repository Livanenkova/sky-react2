const arrNumber = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,2,25,26,27,28,29,30,31];

function NumberGenerator() {
return (
  <div className="NumberGenerator">
    <div className="NumberGenerator__wrap" style={{ display: "flex", flexWrap: "wrap", width: "350px", gap: "1px", margin: "auto" }}>
      {arrNumber.map( (num) => {
        let backgroundColor = ''
        if(num % 2 === 0) {
          backgroundColor = '#149763'
        } else { 
          for(let i = 2; i < num; i+=1) {
            if(num % i === 0) {
              backgroundColor = '#dafa0a'
              break
            } else {
              backgroundColor = '#bb3d50'
            }
          } 
        }
        return (<div className="NumberGenerator__item" key={num} style={{ width: "40px", height: "40px", background: `${backgroundColor}`, textAlign:"center", margin:"auto" }}>{num}</div>)
      })}  
    </div>
  </div>
)
}

export default NumberGenerator