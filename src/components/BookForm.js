import { useAddBookMutation } from "@/features/api/apiSlice";
import React, { useState } from "react";

const BookForm = () => {
  const [addBook, { data, isSuccess, isError }] = useAddBookMutation();
  const [bookData, setBookData] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(bookData);
  };
  
  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label htmlFor="lws-bookName">Book Name</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-bookName"
          name="name"
          onChange={(e) =>
            setBookData((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="lws-author">Author</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-author"
          name="author"
          onChange={(e) =>
            setBookData((prev) => ({
              ...prev,
              author: e.target.value,
            }))
          }
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="lws-thumbnail">Image Url</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-thumbnail"
          name="thumbnail"
          onChange={(e) =>
            setBookData((prev) => ({
              ...prev,
              thumbnail: e.target.value,
            }))
          }
        />
      </div>
      <div className="grid grid-cols-2 gap-8 pb-4">
        <div className="space-y-2">
          <label htmlFor="lws-price">Price</label>
          <input
            required
            className="text-input"
            type="number"
            id="lws-price"
            name="price"
            onChange={(e) =>
              setBookData((prev) => ({
                ...prev,
                price: e.target.value,
              }))
            }
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lws-rating">Rating</label>
          <input
            required
            className="text-input"
            type="number"
            id="lws-rating"
            name="rating"
            min={1}
            max={5}
            onChange={(e) =>
              setBookData((prev) => ({
                ...prev,
                rating: e.target.value,
              }))
            }
          />
        </div>
      </div>
      <div className="flex items-center">
        <input
          id="lws-featured"
          type="checkbox"
          name="featured"
          className="w-4 h-4"
          onChange={(e) =>
            setBookData((prev) => ({
              ...prev,
              featured: e.target.checked,
            }))
          }
        />
        <label htmlFor="lws-featured" className="ml-2 text-sm">
          {" "}
          This is a featured book{" "}
        </label>
      </div>
      <button type="submit" className="submit" id="lws-submit">
        Add Book
      </button>
    </form>
  );
};

export default BookForm;
