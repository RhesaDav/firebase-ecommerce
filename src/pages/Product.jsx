import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import HomeLayout from "../layout/HomeLayout";

export default function Product() {
  let navigate = useNavigate()
  const [data, setData] = useState()

  const fetchData = async() => {
    await getDocs(collection(db, "product")).then((res) => {
      const data = res.docs.map((item) => item.data())
      setData(data)
    })
  }

  useEffect(() => {
    fetchData()
  },[])
  return (
    <HomeLayout>
      <div className="flex gap-10 items-center mb-5">
        <input
          type="search"
          placeholder="Type here"
          className="input input-bordered w-2/3"
        />
        <select className="select select-bordered w-1/4 capitalize">
          <option selected disabled hidden>
            Select Category
          </option>
          {/* <option>Han Solo</option> */}
        {['clothing', 'electronic', 'food'].map((item,index) => (
          <option>{item}</option>
          ))}
        </select>
        <button onClick={() => navigate('/product/add')} className="btn btn-ghost bg-base-200">Add Product</button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Price</th>
              <th>Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {data?.map((item,index) => (
            <tr key={index}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.productName}</div>
                    <div className="text-sm opacity-50">
                      {item.categories}
                    </div>
                  </div>
                </div>
              </td>
              <td>Rp. {item.price}</td>
              <td>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                </div>
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
                <button className="btn btn-ghost btn-xs">delete</button>
              </th>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </HomeLayout>
  );
}
