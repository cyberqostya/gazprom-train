import Header from "../components/Header/Header";
import GetUsersForm from "../components/GetUsersForm/GetUsersForm";
import TableUsers from "../components/TableUsers/TableUsers";
import { useState } from "react";

export default function Main(props) {

  // Для реактивной фильтрации
  // const [users, setUsers] = useState([]);
  const {users, setUsers} = props;
  
  // Для параметров запроса
  const [usersParameters, setUsersParameters] = useState({
    firstname: true,
    lastname: true,
    gender: false,
    age: true,
    country: false,
    city: false,
    email: true,
    phone: true,
  });

  // Прелоадер
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (quantity) => {
    setIsLoading(true);
    const data = await fetch(`https://randomuser.me/api/?results=${quantity}`);
    const datajson = await data.json();
    const customUsers = await datajson.results.map((i) => {
      return ({
        firstname: i.name.first,
        lastname: i.name.last,
        gender: i.gender,
        age: i.dob.age,
        country: i.location.country,
        city: i.location.city,
        email: i.email,
        phone: i.phone,
        image: i.picture.large,
        id: i.login.uuid,
      });
    });
    await setUsers(customUsers);
    setIsLoading(false);
  }

  return (
    <div className="App">

      <Header title="Пользователи" />
      <hr className='breakline' />
      <GetUsersForm getData={getData} usersParameters={usersParameters} setUsersParameters={setUsersParameters} />
      <hr className='breakline' />
      <TableUsers data={users} usersParameters={usersParameters} setUsers={setUsers} isLoading={isLoading} />

    </div>
  );
}