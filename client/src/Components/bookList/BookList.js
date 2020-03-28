import React, { useState, useEffect } from "react";

import BookListButton from "./BookListButton";
import useApplicationData from "../../hooks/useApplicationData";

export default function BookList() {
  const { GetResource } = useApplicationData();

  const { data, error, loading } = GetResource(
    "https://api.nytimes.com/svc/books/v3/lists/overview.json?&api-key=u80Uoj6gcmvGVb0vO3eQRqpbITkdcggN"
  );

  if (error) {
    return <div>Oops</div>;
  }

  if (loading) {
    return <div>...loading</div>;
  }

  return <BookListButton data={data} />;
}
