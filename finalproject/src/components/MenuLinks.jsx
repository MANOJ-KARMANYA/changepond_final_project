// import { Link } from "react-router-dom";
// import { useFetch } from "../hooks/useFetch";

// function MenuLinks() {
//   const {
//     data: quizzes,
//     isPending,
//     error,
//   } = useFetch(
//     "http://localhost:8888/quizzes"
//     // "https://online-json-server-api.up.railway.app/project/66589e8316aab5687eae3b28/quizzes"
//   );

//   console.log(isPending, error);
//   return (
//     <div>
//       {isPending && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}
//       <div className="menu-list">
//         {quizzes &&
//           quizzes.map((item) => {
//             return (
//               <Link
//                 key={item.title}
//                 to={`/quiz/${item.title}`}
//                 className="menu-item header-logo"
//               >
//                 <figure style={{ backgroundColor: item.color }}>
//                   <img src={item.icon} alt="" />
//                 </figure>
//                 <span>{item.title}</span>
//               </Link>
//             );
//           })}
//       </div>
//     </div>
//   );
// }

// export default MenuLinks;


import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

// Environment variable for API URL
const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000/api/backend_data";

function MenuLinks() {
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch(`${API_URL}/quizzes`);

  console.log(isPending, error);

  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <div className="menu-list">
        {quizzes &&
          quizzes.map((item) => {
            return (
              <Link
                key={item.title}
                to={`/quiz/${item.title}`}
                className="menu-item header-logo"
              >
                <figure style={{ backgroundColor: item.color }}>
                  <img src={item.icon} alt="" />
                </figure>
                <span>{item.title}</span>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default MenuLinks;
