import { useRef } from 'react';
import GetUsersCheckbox from '../GetUsersCheckbox/GetUsersCheckbox';
import './GetUsersForm.css';
import { translator } from '../../utils';

export default function GetUsersForm(props) {

  const usersQuantity = useRef(null);

  function changeParameter(parameter) {
    props.setUsersParameters({ ...props.usersParameters, [parameter]: !props.usersParameters[parameter] });
  }

  return (
    <div className="get-users">
      <div className="get-users__checkboxes">
        {Object.keys(props.usersParameters).map((i, index) => {
          return <GetUsersCheckbox key={index} id={Math.random() + index} title={translator[i]} checked={props.usersParameters[i]} clickHandler={ () => { changeParameter(i) } } />
        })}
      </div>

      <label className="get-users__label get-users__label_num">
        Количество пользователей
        <input min="1" className="get-users__input" type="number" defaultValue={10} ref={usersQuantity} />
      </label>

      <button className="get-users__button" onClick={() => { props.getData(usersQuantity.current.value) }}>Загрузить пользователей</button>
    </div>
  );
}