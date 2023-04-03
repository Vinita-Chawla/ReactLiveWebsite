import React, { useState } from "react";

const Contact=()=> {
  const [data,setData] = useState({
    fullname:"",
    email:"",
    phone:"",
    msg:""
  })

 const InputEvent=(event)=>{
  const name= event.target.name;
  const value = event.target.value;
  return setData((prevValue)=>{
    return{
      ...prevValue,
        [name]:value
    }
   
  })
 }

const formSubmit=(e)=>{
  e.preventDefault();
  alert(`Name is ${data.fullname}
  Phone no is is ${data.phone}
  Email is ${data.email}
  Msg is ${data.msg}
  `)
  setData({
    fullname:"",
    email:"",
    phone:"",
    msg:""
  });
}

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your fullname"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone no:
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter your phone no"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div class="col-auto">
    <button type="submit" class="btn btn-outline-primary mb-3">Submit Form</button>
  </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
