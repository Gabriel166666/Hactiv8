import { useEffect } from "react";
import { useState } from "react";


function App() {
  const [currency, setCurrency] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const response = await fetch(
      "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=e06226a9f9b44fe29d869598da5f9117&symbols=cad,eur,idr,jpy,chf,gbp"
    );
    const data = await response.json();
    setCurrency(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
    console.log(currency);
  }, []);

  return (
    <>
      {!isLoading && (
        <div className="flex justify-center items-center min-h-screen">
          <table className="border-separate border-spacing-5">
            <thead>
              <tr>
                <th>Currency</th>
                <th>Buy</th>
                <th>Exchange Rate</th>
                <th>sell</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {Object.keys(currency.rates).map((key) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{(currency.rates[key] * 105) / 100}</td>
                  <td>{currency.rates[key]}</td>
                  <td>{(currency.rates[key] * 95) / 100}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default App;