import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useAddBookMutation,
  useEditBookMutation,
} from "../features/api/apiSlice";

const initialBookData = {
  name: "",
  author: "",
  thumbnail: "",
  price: "",
  rating: "",

  featured: false,
};

const BookForm = ({ id, bookData }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const editRoute = location.pathname?.includes("edit");

  console.log(editRoute);

  const [addBook, { data, isSuccess: addSuccess, isError }] =
    useAddBookMutation(initialBookData);
  const [editBook, { isSuccess: editSuccess }] = useEditBookMutation();

  const [formBookData, setFormBookData] = useState(initialBookData);

  const handleAddBook = (e) => {
    e.preventDefault();
    addBook(formBookData);
  };

  const handleEditBook = (e) => {
    e.preventDefault();
    editBook({ id, data: formBookData });
  };

  // effect for setting form data
  useEffect(() => {
    if (bookData?.id) {
      setFormBookData(bookData);
    } else {
      setFormBookData(initialBookData);
    }
  }, [bookData?.id, bookData]);

  // to home page
  useEffect(() => {
    if (!editRoute && addSuccess) {
      navigate("/");
    } else if (editRoute && editSuccess) {
      navigate("/");
    }
  }, [addSuccess, editSuccess, editRoute, navigate]);

  return (
    <form
      className="book-form"
      onSubmit={editRoute ? handleEditBook : handleAddBook}
    >
      <div className="space-y-2">
        <label htmlFor="lws-bookName">Book Name</label>
        <input
          required
          className="text-input"
          type="text"
          id="lws-bookName"
          name="name"
          value={formBookData?.name}
          onChange={(e) =>
            setFormBookData((prev) => ({
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
          value={formBookData?.author}
          onChange={(e) =>
            setFormBookData((prev) => ({
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
          value={formBookData?.thumbnail}
          onChange={(e) =>
            setFormBookData((prev) => ({
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
            value={formBookData?.price}
            onChange={(e) =>
              setFormBookData((prev) => ({
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
            value={formBookData?.rating}
            onChange={(e) =>
              setFormBookData((prev) => ({
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
          checked={formBookData?.featured}
          onChange={(e) =>
            setFormBookData((prev) => ({
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
