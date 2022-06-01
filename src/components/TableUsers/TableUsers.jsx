import { useEffect, useRef, useState } from 'react';
import Filters from '../Filters/Filters';
import Preloader from '../Preloader/Preloader';
import TableUser from '../TableUser/TableUser';
import './TableUsers.css';

export default function TableUsers(props) {

  const [isScrolling, setIsScrolling] = useState(false);
  const [columnsIsActive, setColumnsIsActive] = useState(true);

  const { usersParameters } = props;
  const usersBlock = useRef(null);

  useEffect(() => {
    usersBlock.current.clientWidth !== usersBlock.current.scrollWidth ? setIsScrolling(true) : setIsScrolling(false);
    Object.values(usersParameters).some(i => i === true) ? setColumnsIsActive(true) : setColumnsIsActive(false);
  }, [usersParameters]);

  return (
    <div ref={usersBlock} className={["users", isScrolling ? "users_scrolling" : ""].join(' ')}>

      {props.data.length > 0 ? 
        props.isLoading ? 
          <Preloader /> 
          :
          columnsIsActive ?
          <table className="users__table">
            <tbody>
              <Filters data={props.data} usersParameters={usersParameters} setUsers={props.setUsers} />
              {props.data.map((i, index) => {
                return <TableUser 
                  key={i.id}
                  num={index + 1}
                  data={i}
                  usersParameters={usersParameters}
                />
              })}
            </tbody>
          </table> 
          :
          <p className="users__untable">~ Все столбцы выключены  ~</p>
        : 
        <p className="users__untable">~ Введите параметры запроса и нажмите кнопку для отображения таблицы  ~</p>
      }
      
    </div>
  );
}