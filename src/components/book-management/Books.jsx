import React, { useEffect, useState } from 'react'
import API from '../../api';

export default function Books() {
      const [books, setBooks] = useState([]);
      const [loading,setLoading] = useState(true)

      useEffect(()=>{
        API.get('/books')
        .then((res)=>{
          setBooks(res.data.data)//using data array from sever
        })
        .catch((err)=>{
          console.log(err)
      })
      },[])

      console.log(books)
  return (
    <div className='flex items-center justify-center'>
      <table className='min-w-full border border-gray-300 
      text-left text-sm'>
        <thead>
          <tr>
            <th>Book Id</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Publication Date</th>
            <th>Book Genre</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Kiliku</td>
            <td>Vargas</td>
            <td>2022-02-01</td>
            <td>Acaustic</td>
            <td>$700</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
