import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api";
import ReusableButton from "../button";
import { ClockArrowDown, Loader2 } from "lucide-react";

export default function AddBook() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishedDate: "",
    genre: "",
    price: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post("/books", formData);
      navigate("/books");
    } catch (error) {
      console.log("error creating book", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        className="w-full bg-white shadow-lg rounded-xl p-6 space-x-4"
        action=""
        onSubmit={handleSubmit}
      >
        <ReusableButton label={"Create a New Book"} icon={<ClockArrowDown />} />
        <input
          type="text"
          name="title"
          value={formData.title}
          placeholder="add a book title"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          name="author"
          value={formData.author}
          placeholder="add a book author"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        />
        <input
          type="date"
          name="publishedDate"
          value={formData.publishedDate}
          placeholder="add a book publishedDate"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          placeholder="add a book price"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          name="genre"
          value={formData.genre}
          placeholder="add a book genre"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        />

        <button
        type="submit"
        disabled={loading}
        className="w-full flex justify-center items-center
         bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          {loading ? (
            <Loader2 className="animate-spin mr-2" size={20} /> 
          ): null
        }
        {loading ? 'Creating...': 'Create a Book'}

        </button>
      </form>
    </div>
  );
}
