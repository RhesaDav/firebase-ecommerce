import React from "react";
import HomeLayout from "../layout/HomeLayout";

export default function Product() {
  return (
    <HomeLayout>
      <div className="flex gap-10 items-center mb-5">
        <input
          type="search"
          placeholder="Type here"
          className="input input-bordered w-2/3"
        />
        <select class="select select-bordered w-1/4">
          <option disabled hidden selected>
            Select Category
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <button className="btn btn-ghost bg-base-200">Add Product</button>
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
            <tr>
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
                        src="https://w7.pngwing.com/pngs/294/922/png-transparent-pile-of-clothes-washing-machines-self-service-laundry-clothes-dryer-washed-miscellaneous-textile-cleaning.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Product Name</div>
                    <div className="text-sm opacity-50">
                      Cloth, Computer, Book
                    </div>
                  </div>
                </div>
              </td>
              <td>Rp. 7.000.000</td>
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
                    checked
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
          </tbody>
        </table>
      </div>
    </HomeLayout>
  );
}
