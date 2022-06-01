import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import UserProfile from "../components/UserProfile/UserProfile";

export default function User(props) {

  const router = useNavigate();
  const params = useParams();
  const { users } = props;
  const user = users.find(i => i.id === params.id)

  return (
    <div className="App">

      <Header title={`Пользователь ${user.firstname}`} />
      <hr className='breakline' />
      <UserProfile user={user} />
      <hr className='breakline' />
      <button className="go-back" onClick={() => { router('/') }}>Назад</button>

    </div>
  );
}