import { React, useState, useEffect } from "react";
import TheSpinners from "../components/TheSpinners";
const Aboutpage = () => {
  const [loading, setLoading] = useState(false);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <>
      <h1 className="font-bold text-2xl mb-3">about</h1>
      <div className="p-6 bg-white rounded-md shadow-sm">
        <p className="text-xl font-bold">Fetch data testing</p>
        {loading ? (
          <TheSpinners />
        ) : (
          users.map((users, index) => (
            <div key={index}>
              {users.id} {users.title}
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Aboutpage;
