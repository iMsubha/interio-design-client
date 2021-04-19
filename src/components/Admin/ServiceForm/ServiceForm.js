import AddPhotoAlternateRoundedIcon from "@material-ui/icons/AddPhotoAlternateRounded";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./ServiceForm.css";
const ServiceForm = () => {
  // const inputStyle = { width: "250px" };
  const [imageURL, setImageURL] = useState(null);
  const [message, setMessage] = useState()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    const serviceData = {
      title: data.title,
      imageURL: imageURL,
      email: data.email,
      details: data.details,
      price: data.price,
    };
    const url = `http://localhost:8000/addServices`;
    console.log(serviceData);
    // console.log(serviceData.email);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceData),
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
    <div>
      <form 
        action="/addServices"
        onSubmit={handleSubmit(onSubmit)}
        className=" rounded-lg"
      >
        <div className="d-flex flex-wrap">
          <div className="d-flex flex-column mr-3">
            <label for="title">Service Title</label>
            <input
              name="title"
              placeholder="Service Title"
              {...register("title", {
                validate: (value) => value.length > 3,
              })}
            />
            {errors.title && (
              <p className="errorText">Please give a valid Service Name</p>
            )}
          </div>

          <div className="d-flex flex-column">
            <label for="email">Email</label>
            <input
              defaultValue=""
              placeholder="bluebill1049@hotmail.com"
              type="email"
              {...register("email")}
            />
          </div>
        {/* </div> */}

        {/* <div className="d-flex "> */}
          <div className="mr-3">
            <label for="details">Service Detail</label>
            <textarea
              name="details"
              type="text"
              placeholder="Please enter service details"
              {...register("details")}
            ></textarea>
          </div>

          <div className="mr-3">
            <label for="price">Price</label>
            <input
              style={{ width: "90px" }}
              defaultValue=""
              className="d-flex"
              type="number"
              name="price"
              id=""
              {...register("price", {
                validate: (value) => value >  0,
              })}
            />
            {
              errors.price && <small  className="errorText">Enter valid number</small>
            }
          </div>
          <div className="d-flex justify-content-start align-items-center mt-1">
            <input
              onChange={handleImageUpload}
              type="file"
              id="file"
              name="imageURL"
              accept="image/*"
            />
            <label for="file" className="upload-image font-weight-bold">
              <AddPhotoAlternateRoundedIcon></AddPhotoAlternateRoundedIcon>{" "}
              Upload Image
            </label>
          </div>
          <input
          className="main-button font-weight-normal text-dark"
          type="submit"
          value="Save"
        />
        </div>
         
         {
          message && <small>New Service created!</small>
         }
        
        
      </form>
    </div>
  );
};

export default ServiceForm;
