import BookForm from "@/components/BookForm";
import Layout from "@/components/Layout";
import { useGetBookQuery } from "@/features/api/apiSlice";
import { useRouter } from "next/router";
import React from "react";

const EditBook = () => {
  const router = useRouter();
  const { bookId } = router.query;

  const { isSuccess, data: bookData } = useGetBookQuery(bookId);
  
  return (
    <Layout>
      <main className="py-6 2xl:px-6">
        <div className="container">
          <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
            <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
            <BookForm id={bookId} bookData={bookData} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default EditBook;
