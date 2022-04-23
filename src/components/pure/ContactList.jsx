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
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Phone Number</th>
                        </tr>
                </thead>
                <tbody>
                    { users.map((user, index) => 
                        (<tr className='text-center' key={index} onClick={() => obtainUserDetails(user.id)}>
                            <th scope="row">{ user.id }</th>
                            <td><span>{ user.firstName }</span></td>
                            <td><span>{ user.lastName }</span></td>
                            <td><span>{ user.phone }</span></td>
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
