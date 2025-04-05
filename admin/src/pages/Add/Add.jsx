import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'



const Add = ({url}) => {

  const[img,setImage] =useState(false);
  const[data,setData] =useState({
    name:"",
    description:"",
    price:"",
    category:"Cheesecakes",
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name",data.name)
    formData.append("description",data.description)
    formData.append("price",Number(data.price))
    formData.append("category",data.category)
    formData.append("img",img)

       // Debugging: Log the FormData
       for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
    }

    const response = await axios.post(`${url}/api/food/add`, formData, {
    });

     if (response.data.success) {
        setData({
            name: "",
            description: "",
            price: "",
            category: "Cheesecakes",
        });
        setImage(false);
        toast.success(response.data.message);
    } else {
        console.error("Error:", response.data.message);
    }

  }


  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
        <p>Upload Image</p>
        <label htmlFor="img">
          <img src={img?URL.createObjectURL(img):assets.upload_area} alt="" />
        </label>
        <input onChange={(e)=>setImage(e.target.files[0])}type="file" id="img" hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder='Type here' />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' required>
          </textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select onChange={onChangeHandler} name="category">
              <option value="Cheesecakes">Cheesecakes</option>
              <option value="Cakes">Cakes</option>
              <option value="Cookies">Cookies</option>
              <option value="Shakes">Shakes</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder='$20' />
          </div>
        </div>
        <button type='Submit' className='add-btn'>
          ADD
        </button>
      </form>
      
    </div>
  )
  
}

export default Add
