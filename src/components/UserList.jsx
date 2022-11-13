import React from 'react';
import swal from 'sweetalert';

const UserList = ({userList, selectUser, deleteUser}) => {

  const alertDelete = () => {
    swal({
      title: "Delete!",
      text: "User successfully deleted",
      icon: "success",
      timer: "2000"
    })
  }

  

  return (
    <div className='row mt-5'>
      {
        userList.map(user => (
          <div className="col-12 col-md-6 col-lg-4 mb-3" key={user.id}>
          <div className="card border-0 shadow p-2 bg-body rounded-0">
          <div className="card-body">
            <h5 className="card-title border-bottom bg-light mb-1 py-2"><b> {user.first_name} {user.last_name}</b></h5>
            <p className="card-text"><small className="text-muted">Email</small><br />{user.email}</p>
            <p className="card-text border-bottom pb-2"><small className="text-muted">Birthday</small><br /><i className="bi bi-gift"></i> {user.birthday}</p>
            <div className="actions-buttons d-flex justify-content-end">
            <a 
            href="#" 
            className="card-link link-danger"
            onClick={() => {
              deleteUser(user.id) 
              alertDelete()}}
            >
              <i className="bi bi-trash3"></i>
              </a>
            <a 
            href="#" 
            className="card-link link-secondary" 
            data-bs-toggle="modal" 
            data-bs-target="#exampleModal"
            onClick={() => {
              selectUser(user) 
              }}
            >
              <i className="bi bi-pencil"></i>
              </a>
            </div>
          </div>
          </div>
          </div>

        
        ))
      }
    </div>
  );
};

export default UserList;