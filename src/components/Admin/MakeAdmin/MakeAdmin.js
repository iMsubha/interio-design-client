import AddPhotoAlternateRoundedIcon from "@material-ui/icons/AddPhotoAlternateRounded";
import axios from "axios";
import React, { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Sidebar from "../../Shared/Sidebar/Sidebar";

const MakeAdmin = () => {
    const [imageURL, setImageURL] = useState (null);
    const [message, setMessage] = useState()
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      // alert(JSON.stringify(data));
      const adminData = {
        name: data.name,
        imageURL: imageURL,
        email: data.email,
        profession: data.profession,
        
      };
      const url = `http://localhost:8000/addAdmin`;
      console.log(adminData);
      // console.log(adminData.email);
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(adminData),
      }).then((res) => {
        setMessage(true);
        console.log("server side response")
      });
    };
  
    const handleImageUpload = (e) => {
      const imageData = new FormData();
      imageData.set("key", "ec2cf1fdc04ba732e30fd47a4acacf80");
      imageData.append("image", e.target.files[0]);
      console.log("image", e.target.files[0]);
  
      axios
        .post("https://api.imgbb.com/1/upload", imageData)
        .then(function (response) {
          setImageURL(response.data.data.display_url);
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  
    
  return (
    <div className="d-flex">
      <Sidebar />
      <Container className="p-0">
        {/* <HeaderNav/> */}
        {/* style={{'backgroundColor':'#b0dab9'}} */}
        <Nav className="bg-light d-flex justify-content-start">
          <h3 className="p-2" style={{ color: "#b0dab9" }}>
            Add An Admin
          </h3>
        </Nav>
         <section className="d-flex justify-content-start">
         <form action="/addAdmin" 
         onSubmit={handleSubmit(onSubmit)}
          className="d-flex flex-column justify-content-start">
          <div className="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              className="form-control w-100"
              email="email"
              placeholder="Enter new admin email"
              {...register("email")}
            />
          </div>

          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              className="form-control w-100"
              name="name"
              placeholder="Enter admin name"
              {...register("name")}
            />
          </div>

          <div className="form-group">
            <label for="profession">Profession</label>
            <input
              type="text"
              className="form-control w-100"
              name="profession"
              placeholder="Enter admin profession"
              {...register("profession")}
            />
          </div>

          <div className="form-group d-flex justify-content-center">
            <label for="file" className="upload-image font-weight-bold ">
            <AddPhotoAlternateRoundedIcon></AddPhotoAlternateRoundedIcon>{" "}
              Upload Image
            </label>
            <input
              onChange={handleImageUpload}
              type="file"
              id="file"
              name="imageURL"
              accept="image/*"
            />
          </div> 
         
          <button type="submit" style={{width:'150px'}} className="btn main-button text-dark font-weight-normal mt-3">
            Submit
          </button>
        </form>
         </section>
      </Container>
    </div>
  );
};

export default MakeAdmin;
