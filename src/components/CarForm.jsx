import { useState } from "react";

function CarForm({ addCar }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !price) {
      alert("Please fill all fields");
      return;
    }

    addCar({
      id: Date.now(),
      title,
      price,
    });

    setTitle("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="car-form">
      <h2>Add New Car</h2>

      <input
        type="text"
        placeholder="Car Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button type="submit">Add Car</button>
    </form>
  );
}

export default CarForm;