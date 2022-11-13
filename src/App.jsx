import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

function App() {  

  const [userList, setUserList] = useState([]);
  const [userSelected, setUserSelected] = useState(null)
  const [userDelete, setUserDelete] = useState(null)

  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUserList(res.data));
  }, []);

const getUser = () => {
  axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUserList(res.data));
}

const selectUser = (user) => {
  setUserSelected(user)
}

const unselectUser = () => setUserSelected(null);

const deleteUser = (id) => {
  axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
  .then(() => { 
  setUserDelete(null)
  getUser()
})
  
}



  // console.log(userList);

  return (
    <div className="App ">
      <div className="container">
        <UserForm 
        getUser={getUser}
        userSelected={userSelected}
        unselectUser={unselectUser}
        />

        <UserList 
        userList={userList} 
        selectUser={selectUser}
        deleteUser={deleteUser}
        />
      </div>
      </div>
  );
}

export default App;
