import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function UsersCards() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const res = await fetch ("https://dummyjson.com/users");
    const responsejson = await res.json();
    setUsers(responsejson.users);
  }
  useEffect(() => {
    fetchUsers()
  }, []);
  return (  
<div>
  <div className="text-center hover:text-green-800 text-green-500">
    <h1 className=" text-3xl">Телефоны и аксессуары</h1>
    <h2 className="text-2xl">Горячие скидки</h2>
  </div>
  
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 p-5 ">
      {users.slice(0, 6).map((e) => (
        <div
          key={e.id}
          className="card bg-base-100 shadow-xl p-4 relative" >
        
          <FaHeart className="absolute top-3 right-3 text-2xl text-green-500" />

          <figure>
            <img
              src={e.image}
              alt={e.firstName}
              className="rounded-xl h-40 w-40 object-cover"
            />
          </figure>

          <div className="card-body p-0 pt-4 hover:text-green-800 text-green-500 " >
            <h2 className="card-title text-lg font-semibold">
              {e.firstName} {e.lastName}
            </h2>

            <p className=" hover:text-green-800 text-green-500">
              {e.address.city}, {e.address.state}
            </p>

            <p className="text-green-600 text-xl font-bold mt-1">
              {e.age * 100} ₽
            </p>

            <div className="flex items-center gap-2 mt-3">
              <div className="avatar">
                <div className="w-8 rounded-full">
                  <img src={e.image} alt="avatar" />
                </div>
              </div>
              <span className="text-sm text-gray-600">{e.username}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    <h1 className=" text-center mt-10 mb-3 text-2xl hover:text-green-800 text-green-500 ">Горячие скидки</h1>
     <div className="grid md:grid-cols-3 grid-cols-1 gap-5 p-5">
      {users.slice(3,15).map((e) => (
        <div
          key={e.id}
          className="card bg-base-100 shadow-xl p-4 relative" >
        
          <FaHeart className="absolute top-3 right-3 text-2xl text-green-500" />

          <figure>
            <img
              src={e.image}
              alt={e.firstName}
              className="rounded-xl h-40 w-40 object-cover"
            />
          </figure>

          <div className="card-body p-0 pt-4 hover:text-green-800 text-green-500">
            <h2 className="card-title text-lg font-semibold">
              {e.firstName} {e.lastName}
            </h2>

            <p className=" hover:text-green-800 text-green-500">
              {e.address.city}, {e.address.state}
            </p>

            <p className="text-green-600 text-xl font-bold mt-1">
              {e.age * 100} ₽
            </p>

            <div className="flex items-center gap-2 mt-3">
              <div className="avatar">
                <div className="w-8 rounded-full">
                  <img src={e.image} alt="avatar" />
                </div>
              </div>
              <span className="text-sm text-gray-600">{e.username}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
</div>
  );
}
