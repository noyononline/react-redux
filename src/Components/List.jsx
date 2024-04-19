import React from "react";
import { useSelector, useDispatch } from "react-redux";
const List = () => {
  const data = useSelector((state) => state.Information.posts);

  console.log(data);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <div>
          <span>Name</span>
          <span>Email</span>
        </div>
      </div>
      <ul>
        {data.map((p) => (
          <>
            <li key={p.name} className="border-b-2">
              <span className="mr-8">{p.name}</span>
              <span className="mr-8">{p.email}</span>
              <button
                className="mr-8"
                onClick={() => {
                  dispatch({ type: "DELETE", payload: p.name });
                }}
              >
                delete
              </button>
              <button
                className="mr-8"
                onClick={() => {
                  const payload = { name: p.name, email: p.email };
                  dispatch({ type: "UPDATE", payload });
                }}
              >
                Update
              </button>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default List;
