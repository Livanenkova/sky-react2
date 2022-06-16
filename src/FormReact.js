/* eslint-disable prefer-destructuring */
import { useState } from "react"
import PropTypes from "prop-types"

function getText(number) {
  let text;
  const arr = [
    "— Eh bien, mon prince. Gênes et Lucques ne sont plus que des apanages, des поместья, de la famille Buonaparte. Non, je vous préviens que si vous ne me dites pas que nous avons la guerre, si vous vous permettez encore de pallier toutes les infamies, toutes les atrocités de cet Antichrist (ma parole, j'y crois) — je ne vous connais plus, vous n'êtes plus mon ami, vous n'êtes plus мой верный раб, comme vous dites 1. Ну, здравствуйте, здравствуйте. Je vois que je vous fais peur 2, садитесь и рассказывайте.",
    "Так говорила в июле 1805 года известная Анна Павловна Шерер, фрейлина и приближенная императрицы Марии Феодоровны, встречая важного и чиновного князя Василия, первого приехавшего на ее вечер. Анна Павловна кашляла несколько дней, у нее был грипп, как она говорила (грипп был тогда новое слово, употреблявшееся только редкими). В записочках, разосланных утром с красным лакеем, было написано без различия во всех:",
    "«Si vous n'avez rien de mieux à faire, Monsieur le comte (или mon prince), et si la perspective de passer la soirée chez une pauvre malade ne vous effraye pas trop, je serai charmée de vous voir chez moi entre 7 et 10 heures. Annette Scherer»",
  ];
if(number === '1') {
  text = arr[0];
} else if(number === '2') {
  text = arr[1];
}  else if(number === '3') {
  text = arr[2];
}
    return text
}

function FormReact() {
  const [value,setValue] = useState('true');
  const [text,setText] = useState('');


  const handlerChange = (e) => {
    setValue(e.target.value);
    const textValue = getText(value);
    setText(textValue);
  }

  return (
    <div className="form">
    <select selected value={value} onChange={handlerChange}>
    <option value="1">Обзац 1</option>
    <option value="2">Обзац 2</option>
    <option value="3">Обзац 3</option>
  </select>
    <div className="form-text">{text}</div>
    </div>
  )
}

getText.PropTypes = {
  number: PropTypes.number.isRequired,
}

export default  FormReact