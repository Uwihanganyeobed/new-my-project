import React, { useEffect, useState } from "react";
import API from "../../api";
import { ArrowBigRight, ArrowRight, Loader2, Trash2 } from "lucide-react";
import ReusableButton from "../button";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/books")
      .then((res) => {
        setBooks(res.data.data); //using data array from sever
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleDelete=async(id)=>{
    if(!window.confirm("Are you sure you want to delete this book")
    ) return
      try {
        await API.delete(`/books/${id}`)
        setBooks(books.filter((book)=>book._id !== id))
        console.log("Book deleted succesfully")
      } catch (error) {
        console.log(error)
      }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="animate-spin text-blue-500" size={50} />
      </div>
    );
  }
  return (
    <div className="flex items-center flex-col justify-center">
      <ReusableButton
        link={"/add-book"}
        label={"Create a Book"}
        icon={<ArrowRight />}
      />

      <table
        className="min-w-full border border-gray-300 
      text-left text-sm"
      >
        <thead>
          <tr>
            <th>Book Id</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Publication Date</th>
            <th>Book Genre</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id || index} className="hover:bg-gray-100">
              <td className="p-2 border">{book._id}</td>
              <td className="p-2 border">{book.title}</td>
              <td className="p-2 border">{book.author}</td>
              <td className="p-2 border">
                {new Date(book.publishedDate).toLocaleDateString()}
              </td>
              <td className="p-2 border">{book.genre}</td>
              <td className="p-2 border">{book.price}</td>
              <td>
                <ReusableButton
                link={`/books/${book._id}`}
                label={'Edit'}
                icon={<ArrowBigRight />}
                />
              </td>
              <td>
                <button
                onClick={()=>handleDelete(book._id)}
                className="flex items-center gap-2 my-3
         bg-red-600 hover:bg-red-700
          text-white font-medium shadow-md px-5 py-3 rounded-md transition"

                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
