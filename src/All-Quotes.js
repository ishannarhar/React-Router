import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const DATA_GOT = [];
export default function AllQuotes() {
  const [entData, setData] = useState(null);
  async function getDataHandler() {
    const response = await fetch(
      "https://quotes-jun-27-default-rtdb.firebaseio.com/Quotes.json"
    );
    const data = await response.json();

    for (const key in data) {
      DATA_GOT.push({ id: key, name: data[key].name, quote: data[key].quote });
    }
    if (DATA_GOT.length > 1) {
      setDataHandler();
    }
  }
  function setDataHandler() {
    setData(
      DATA_GOT.map(function (datum, index) {
        return (
          <div key={index}>
            <h2>{datum.name}</h2>
            <p>{datum.quote}</p>
            <Link to={`/quotes/${datum.id}`}>View Full Screen</Link>
          </div>
        );
      })
    );
  }
  return (
    <div>
      <h1>All Quotes</h1>

      <button onClick={getDataHandler}>Get Quotes</button>
      {entData}
    </div>
  );
}
