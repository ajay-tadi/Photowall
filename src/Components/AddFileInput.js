import React, { useState } from 'react';

const AddFileInput = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <h1>Upload and Display Image using React Hooks</h1>
      {selectedImage && (
        <div>
          <img alt="Preview" src={selectedImage} width="250px" />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
      <input type="file" onChange={handleImageChange} />
    </div>
  );
};

export default AddFileInput;
