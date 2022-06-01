import { useNavigate } from 'react-router-dom';
import './TableUser.css';

export default function TableUser(props) {

  const router = useNavigate();

  return (
    <tr className="user" onClick={() => { router(`/user/${props.data.id}`) }}>
      <td className="user__data">{props.num}</td>
      {Object.keys(props.usersParameters).map((i, index) => {
        return props.usersParameters[i] && <td key={index} className="user__data">{props.data[i]}</td>
      })}
    </tr>
  );
}

// Если данные переданы, то отображаем