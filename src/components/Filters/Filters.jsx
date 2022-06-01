import './Filters.css';
import { translator } from '../../utils';
import { useState } from 'react';

export default function Filters(props) {

  const [sortConfig, setSortConfig] = useState({
    parameter: '',
    direction: ''
  });

  const { data, setUsers } = props;

  const sortedUsers = [...data];
  
  const sortUsers = parameter => {
    let direction = 'down';
    if(sortConfig.parameter === parameter && sortConfig.direction === direction) {
      direction = 'up';
    }
    setSortConfig({ parameter, direction });

    if(direction === 'down') {
      sortedUsers.sort((a, b) => { return a[parameter] > b[parameter] ? 1 : -1; });
    } else {
      sortedUsers.sort((a, b) => { return a[parameter] > b[parameter] ? -1 : 1; });
    }

    setUsers(sortedUsers);
  }

  return (
    <tr className="filters">
      <th className="filters__data">№</th>
      {Object.keys(props.usersParameters).map((i, index) => {
        return props.usersParameters[i] && <th 
          key={index} 
          className={["filters__data", sortConfig.parameter === i && (sortConfig.direction === 'up' ? "filters__data_order_up" : "filters__data_order_down")].join(' ')} 
          onClick={() => { sortUsers(i) }}>
            {translator[i]}
          </th>
      })}
    </tr>
  );
}