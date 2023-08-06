import React,{useRef} from "react";

const Profile = () => {

  const nameInputRef = useRef();
  const urlInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUrl = urlInputRef.current.value;

  fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBOd8QDzAFiZZuCKsX_6aIL2y5wL-Q26GM", {
    method: "POST",
    body: JSON.stringify({
      name: enteredName,
      url: enteredUrl,
      returnsecureToken: true,
    }),
    headers: {
      "Content-Type": "application/JSON",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          let errorMessage = "Authentication failed";
          alert(errorMessage);
          throw new Error(errorMessage);
          // console.log(data);
        });
      }
    })
    .then((data) => {

    })

    .catch((err) => {
      alert(err.message);
    });
  }

  const Upadated= () =>{
    console.log("upadate");
  }
  return (        
    <div>
        <form onSubmit={submitHandler}>

      <h1>Contact Details</h1>
      <label htmlFor="name">Full Name:</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="name">Profile Photo URL</label>
      <input type="url" name="profile" id="url" />
      <button onClick={Upadated}>Update</button>
    
      <button>Cancel</button>
      </form>
    </div>
  );
};
export default Profile;
