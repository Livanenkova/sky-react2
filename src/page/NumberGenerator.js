import { Link} from 'react-router-dom'

const arrNumber = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

function NumberGenerator() {
return (
  <div className="NumberGenerator">
    <div className="NumberGenerator__wrap" style={{ display: "flex", flexWrap: "wrap", width: "350px", gap: "1px", margin: "auto" }}>
      {arrNumber.map( (num) => {
        // Создадим функцию, которая будет проверять, является ли число простым
        const isSimple = (n) => {
          // Если число меньше двух, то оно не может быть простым
          if (n < 2) return false;
          // В цикле делим наше число от 2 до n и проверяем остаток от деления
          for (let i = 2; i < n; i+=1) {
            if (num % i === 0) {
              // Возвращаем false если наше число хоть раз разделилось на число меньше n
              return false;
            }
          }
          // Возвращаем true если наше в предыдущем цикле условие ни разу не выполнилось
          return true;
        }

        let backgroundColor = ''
        // Проверяем является ли число чётным или нечётным, а также проверяем, является ли оно целым
        if (num % 2 === 0) {
          backgroundColor = isSimple(num) ? '#bb3d50' : '#149763'
        } else {
          backgroundColor = isSimple(num) ? '#bb3d50' : '#dafa0a'
        }

        return (<div className="NumberGenerator__item" key={num} style={{ width: "40px", height: "40px", background: `${backgroundColor}`, textAlign:"center", margin:"auto" }}>{num}</div>)
      })}  
    </div>
    <Link to="/">Main Page</Link>
  </div>
)
}

export default NumberGenerator