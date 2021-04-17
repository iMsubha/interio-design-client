import AddPhotoAlternateRoundedIcon from '@material-ui/icons/AddPhotoAlternateRounded';
import axios from "axios";
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import CustomerSidebar from '../../Shared/CustomerSidebar/CustomerSidebar';

const Review = ({user}) => {
    const {name,email} = user;
    console.log(user);
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
      const url =`http://localhost:8000/addReviews`
      console.log(reviewData);
      // console.log(reviewData.email);
      fetch(url, {
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(reviewData) 
      })
      .then(res => console.log("server side response"))
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
    }
    
    return (
        <div  className="d-flex">
        <CustomerSidebar/>
        <div className="d-flex flex-column ">
            {name}
            <h5 >Please Enter Your Review Here</h5>
       
        <form 
        action="/review"
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-lg d-flex flex-column"
       
      >
        <div className="d-flex">
          <div className="d-flex flex-column mr-3">
            <label for="name">Name</label>
            <input
              name="name"
              placeholder={name}
              {...register("name")}
            />
            {errors.name && <p className="errorText">Please enter your name</p>}
          </div>

          <div className="d-flex flex-column">
          <label for="email">Email</label>
          <input
            defaultValue={email}
            placeholder="bluebill1049@hotmail.com"
            type="email"
            {...register("email")}
          />
          </div>
        </div>

        <div className="d-flex">
          <div className="d-flex flex-column mr-3">
          <label for="review">Review</label>
          <textarea 
          name="review"  
          type="text" 
          placeholder="Please enter your review"
          {...register("review")}
          ></textarea>
          </div>


          <div className="d-flex flex-column justify-content-center align-items-center">
          <input
            onChange={handleImageUpload}
             type="file"
             id="file"
             name="profileImageURL"
             accept="image/*"
            />
          <label for="file"  className="upload-image font-weight-bold">
          <AddPhotoAlternateRoundedIcon></AddPhotoAlternateRoundedIcon>
          Upload Profile</label>  
          </div>
        </div>

        <input 
            className="mt-1 mb-3 main-button font-weight-bold"
            type="submit"
            value="Save"
         />
      </form>
      </div>
    </div>
    );
};

export default Review;