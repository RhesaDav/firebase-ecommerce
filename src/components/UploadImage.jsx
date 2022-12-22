import axios from "axios";
import React, { useRef, useState } from "react";

export default function UploadImage({setImageUrl}) {
    const fileInput = useRef(null)
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const removeImage = () => {
    setImage(null)
    setPreviewUrl('')
  }

  const handleFile = (file) => {
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));

    const formData = new FormData()
    formData.append("image", file)
    // console.log(previewUrl)
    axios.post('https://api.imgbb.com/1/upload?key=093a7fffb91f8422c745179057188e75', formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    } ).then((res) => {
        setImageUrl(res.data.data.display_url)
    })
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let imageFile = e.dataTransfer.files[0];
    handleFile(imageFile);
  };

  return (
    <div className="w-1/3 flex flex-col gap-3">
      <div className="flex justify-center">
        {previewUrl ? (
          <div className="">
            <img className="h-64 w-72 object-cover border rounded-xl" src={previewUrl} alt="" />
          </div>
        ) : (
        <label
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => fileInput.current.click}
          htmlFor="upload-image"
          className="border rounded-xl h-64 w-72 flex flex-col gap-5 justify-center items-center cursor-pointer"
        >
          <h1>Upload Your Image</h1>
          {/* <progress className="progress w-56 progress-secondary"></progress> */}
        </label>
        )}
      </div>
      <div className="flex justify-center">
        {previewUrl ? (

            <button onClick={removeImage} className="btn">Remove image</button>
        ) : ''}
      </div>
      <input
        id="upload-image"
        type="file"
        className="file-input w-full max-w-xs hidden"
        onChange={(e) => handleFile(e.target.files[0])}
      />
    </div>
  );
}
