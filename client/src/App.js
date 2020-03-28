import React from "react";
import Header from "./Components/Header";
import BookList from "./Components/bookList/BookList";

import useApplicationData from "./hooks/useApplicationData";
import { FirebaseProvider } from "./context";
import FirebaseExample from "./Components/FirebaseExample";

function App() {
  return (
    <FirebaseProvider>
      <div className="App">
        <Header />
        <FirebaseExample />
        <BookList />
      </div>
    </FirebaseProvider>
  );
}

export default App;
