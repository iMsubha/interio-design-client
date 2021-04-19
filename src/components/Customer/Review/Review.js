import AddPhotoAlternateRoundedIcon from "@material-ui/icons/AddPhotoAlternateRounded";
import axios from "axios";
import React, { useState } from "react";
import { Image, Nav } from "react-bootstrap";
import { useForm } from "react-hook-form";
import sideImage from "../../../images/sideImage.jpg";
import CustomerSidebar from "../../Shared/CustomerSidebar/CustomerSidebar";
const Review = ({ user }) => {
  const { name, email } = user;
  // console.log(user);
  const [profileImageURL, setProfileImageURL] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    const reviewData = {
      name: data.name,
      profileImageURL: profileImageURL,
      email: data.email,
      review: data.review,
      rating: data.rating
    };
    const url = `http://localhost:8000/addReviews`;
    console.log(reviewData);
    // console.log(reviewData.email);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    }).then((res) => console.log("server side response"));
  };

  const handleImageUpload = (e) => {
    const imageData = new FormData();
    imageData.set("key", "ec2cf1fdc04ba732e30fd47a4acacf80");
    imageData.append("image", e.target.files[0]);
    console.log("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setProfileImageURL(response.data.data.display_url);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="d-flex">
      <CustomerSidebar />
      <div className="d-flex flex-column ">
        <Nav className="bg-light d-flex justify-content-start">
          <h3 className="p-2" style={{ color: "#b0dab9" }}>
            Please Enter Your Review Here
          </h3>
        </Nav>
        <form
          action="/review"
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg d-wrap flex-column"
        >
          <div className="d-wrap justify-content-center">
            <div className="d-flex flex-column mr-3">
              <label for="name" className="text-muted font-weight-bold">
                Name
              </label>
              <input name="name" placeholder={name} {...register("name")} />
              {errors.name && (
                <small className="errorText">Please enter your name</small>
              )}
            </div>

            <div className="d-flex flex-column">
              <label for="email" className="text-muted font-weight-bold">
                Email
              </label>
              <input
                defaultValue={email}
                placeholder="bluebill1049@hotmail.com"
                type="email"
                {...register("email")}
              />
              {errors.email && (
                <small className="errorText">Please enter your email</small>
              )}
            </div>
          </div>

          <div className="d-wrap">
            <div className="d-flex flex-column mr-3">
              <label for="review" className="text-muted font-weight-bold">
                Review
              </label>
              <textarea
                name="review"
                type="text"
                placeholder="Please enter your review"
                {...register("review")}
              ></textarea>
            </div>

            <div className="mr-3">
              <label for="rating" className="text-muted font-weight-bold">
                Rating
              </label>
              <input
                style={{ width: "90px" }}
                defaultValue=""
                className="d-flex"
                type="number"
                name="rating"
                placeholder="0"
                {...register("rating", {
                  validate: (value) => value > 0 && value < 6,
                })}
              />
              {errors.rating && (
                <small className="errorText">Enter valid number [1-5]</small>
              )}
            </div>

            <div className="d-flex justify-content-start">
              <input
                onChange={handleImageUpload}
                type="file"
                id="file"
                name="profileImageURL"
                accept="image/*"
              />
              <label for="file" className="upload-image font-weight-bold ">
                <AddPhotoAlternateRoundedIcon></AddPhotoAlternateRoundedIcon>
                Upload Profile
              </label>
            </div>

            <input
              className="mt-3 mb-3 main-button font-weight-normal text-dark"
              type="submit"
              value="Save"
            />
          </div>
        </form>
      </div>
      <div>
        <Image src={sideImage} style={{ height: "100vh", width: "100%" }} />
      </div>
    </div>
  );
};

export default Review;
