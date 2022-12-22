import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import UploadImage from "../components/UploadImage";
import { db } from "../firebase";
import HomeLayout from "../layout/HomeLayout";

export default function AddProduct() {
  const [imageUrl, setImageUrl] = useState('')
  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    categories: '',
    desc: '',
  })
  
  const handleChange =(e) => {
    const {name, value} = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]:value
    }))
    // console.log('parent', formData)
  }

  const handleAddProduct = async() => {
    const image = {
      image:imageUrl
    }
    const data = Object.assign(formData,image)
    console.log(data)
    await addDoc(collection(db, "product"), data).then((res) => console.log(res))
  }
  return (
    <HomeLayout>
      <div className="flex flex-col gap-5">
        <h1 className="text-center text-2xl font-semibold">Add New Product</h1>
        <div className="flex">
          <UploadImage setImageUrl={setImageUrl} />
          <div className="w-2/3 px-5 flex flex-col gap-5">
            <div className="form-control">
              <label className="input-group input-group-vertical">
                <span>Product Name</span>
                <input
                  type="text"
                  placeholder="Oldschool T-shirt"
                  className="input input-bordered"
                  onChange={handleChange}
                  name="productName"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="input-group input-group-vertical">
                <span>Price (IDR)</span>
                <input
                  type="text"
                  placeholder="7000000"
                  className="input input-bordered"
                  onChange={handleChange}
                  name="price"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="input-group input-group-vertical">
                <span>Categories</span>
                <input
                  type="text"
                  placeholder="Oldschool T-shirt"
                  className="input input-bordered"
                  onChange={handleChange}
                  name="categories"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="input-group input-group-vertical">
                <span>Description</span>
                <textarea
                  type="text"
                  placeholder="Oldschool T-shirt"
                  className="input input-bordered h-32"
                  onChange={handleChange}
                  name="desc"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button onClick={handleAddProduct} className="btn btn-outline">Submit</button>
        </div>
      </div>
    </HomeLayout>
  );
}
