import React, { useState, useEffect } from 'react';
import { getAllUsers, getUserDetails } from '../../services/fetchService'; //IMPORTAMOS NUESTRA FUNCION DE FETCHSERVICE.JS
import '../../styles/contactList.scss';

const ContactList = () => {

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null)

  useEffect(() => {
      obtainUsers();
  }, []);

  const obtainUsers = () => {
      getAllUsers()
          .then((response) => {
              console.log('All Users', response.users);
              setUsers(response.users);
              console.log(users);
          })
          .catch((error) => {
              alert(`Error while retreiving the users: ${error}`)
          })
          .finally(() => {
              console.log('Ended obtaining users:');
          });
  }

  const obtainUserDetails = (id) => {
      getUserDetails(id)
          .then((response) => {
              console.log('All Paged Users', response);
              setSelectedUser(response);
              console.log(selectedUser);
             
          })
          .catch((error) => {
              alert(`Error while retreiving the user: ${error}`)
          })
          .finally(() => {
              console.log('Ended obtaining user:');
          });
  }

  return (
        <div>
            <h2>
                Contacts:
            </h2>
            <table className='table table-dark'>
                <thead>
                        <tr className='text-center'>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">PhoneNumber</th>
                            <th scope="col">Actions</th>
                        </tr>
                </thead>
                <tbody>
                    { users.map((user, index) => 
                        (<tr className='text-center' key={index} onClick={() => obtainUserDetails(user.id)}>
                            <td><span>{ user.firstName }</span></td>
                            <td><span>{ user.lastName }</span></td>
                            <td><span>{ user.phone }</span></td>
                            <td className='text-center'>
                                <i className='bi-trash cursor-pointer' style={ {color: '#f37878', fontSize: '1.2rem'} }></i>
                            </td>
                        </tr>
                    )
                ) 
            }
                </tbody>
            </table>
            
            <div>
              { selectedUser != null ? 
                  (
                      <div>
                          <h3>
                              User Details
                          </h3>
                          <p>Name: {selectedUser.firstName}</p>
                          <p>Last Name: {selectedUser.lastName}</p>
                          <p>Email: {selectedUser.email}</p>
                      </div>
                  ):
                  ( <h5>Please click on a User to see its details</h5> )
                  }
            </div>
        </div>
  );
}

export default ContactList;
