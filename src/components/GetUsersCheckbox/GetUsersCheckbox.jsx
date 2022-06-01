import './GetUsersCheckbox.css';

export default function GetUsersCheckbox(props) {

  return (
    <div className="get-users__label-container">
      <input id={props.id} type="checkbox" defaultChecked={props.checked} /> 
      <label htmlFor={props.id} className="get-users__label" onClick={ props.clickHandler }>
        <div className="get-users__checkbox"></div>
        {props.title}
      </label>
    </div>
  );
}

// Удивительный факт:
// Если input вложен в label с событием onClick, то React генерирует событие клика дважды
// Пример: 
// <label onClick={ ()=>{console.log('Twice')} }><input type="checkbox"></label>
// 
// Принято решение о раздельном существовании этих HTML-узлов