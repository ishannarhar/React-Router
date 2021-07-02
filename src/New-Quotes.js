import { useState } from "react";
export default function NewQuotes() {
  const [entName, setName] = useState("");
  const [entQuote, setQuote] = useState("");
  function nameChangeHandler(event) {
    setName(event.target.value);
  }
  function quoteChangeHandler(event) {
    setQuote(event.target.value);
  }
  async function postData(quote) {
    const response = await fetch(
      "https://quotes-jun-27-default-rtdb.firebaseio.com/Quotes.json",
      {
        method: "post",
        body: JSON.stringify(quote),
        headers: { "content-type": "application/json" }
      }
    );
    const data = await response.json();
    console.log(data);
  }
  function submitHandler(event) {
    event.preventDefault();
    const myQuote = { name: entName, quote: entQuote };

    postData(myQuote);
    setName("");
    setQuote("");
  }
  return (
    <div>
      <h1>New Quote</h1>
      <form onSubmit={submitHandler}>
        <label>Name</label>
        <input type="text" value={entName} onChange={nameChangeHandler} />
        <label>Quote</label>
        <input type="text" value={entQuote} onChange={quoteChangeHandler} />
        <button>Sumbit</button>
      </form>
    </div>
  );
}
