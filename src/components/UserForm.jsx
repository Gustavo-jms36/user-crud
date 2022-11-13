import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const UserForm = ({ getUser, userSelected, unselectUser}) => {  

  const { handleSubmit, register, reset } = useForm();
  
  useEffect(() => {
    if (userSelected) {
      reset(userSelected);
    }else {
      reset({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        birthday: ""
      });
    }
    
  }, [userSelected]);

  const submit = (data) => {
    console.log(data);
    if (userSelected) {
      axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
      .then(() => {
        getUser() 
        unselectUser()
      })
    }else {
      axios
        .post("https://users-crud1.herokuapp.com/users/", data)
        .then(() => getUser())
        .catch((error) => console.log(error.response?.data));
    }
  };

  const alertAdd = () => {
    swal({
      title: "Success!",
      text: "User successfully added",
      icon: "success",
      timer: "2000"
  
    })
  }

  

  return (
    <div className="row d-flex justify-content-between border-bottom">
      <div className="col bg-light pt-3 mb-3 d-flex justify-content-between align-items-center">
        
        <h1 className="mb-0">Users</h1>
        <button
          type="button"
          className="button-create"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          + Create user account
        </button>
        
        <div
          className="modal fade "
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  USER
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">

                <form action="" onSubmit={handleSubmit(submit)}>
                  <div className="mb-3">
                    <label htmlFor="first-name" className="form-label">
                      Name
                    </label>
                    <input
                      {...register("first_name")}
                      type="text"
                      className="form-control form-control-sm"
                      id="first-name"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="last-name" className="form-label">
                      Last name
                    </label>
                    <input
                      {...register("last_name")}
                      type="text"
                      className="form-control form-control-sm"
                      id="last-name"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="form-control form-control-sm"
                      id="email" 
                    />
                    
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      {...register("password")}
                      type="password"
                      className="form-control form-control-sm"
                      id="password"
                    />
                  </div>

                  <div className="mb-3 col-6">
                    <label htmlFor="birthday" className="form-label">
                      Birthday
                    </label>
                    <input
                      {...register("birthday")}
                      type="date"
                      className="form-control form-control-sm"
                      id="birthday"
                    />
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary rounded-0"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="button-create btn-sm" onClick={() => alertAdd()} data-bs-dismiss="modal">
                      
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
