// // react router dom import
// import { useParams } from "react-router-dom";

// // components
// import Test from "../components/Test";

// // hooks
// import { useFetch } from "../hooks/useFetch";
// import { useEffect } from "react";

// function Quiz() {
//   const { title } = useParams();
//   const {
//     data: quizzes,
//     isPending,
//     error,
//   } = useFetch(
//     `http://localhost:8888/quizzes?title=${title}`
//     // `https://online-json-server-api.up.railway.app/project/66589e8316aab5687eae3b28/quizzes?title=${title}`
//   );

//   useEffect(() => {
//     document.title = "Quiz" + " " + title;
//   }, [title]);

//   return (
//     <div className="quiz-container container">
//       {isPending && <h3>Loading...</h3>}
//       {error && <h3>Something went wrong</h3>}
//       {quizzes && <Test questions={quizzes[0]} />}
//     </div>
//   );
// }

// export default Quiz;


// react router dom import
import { useParams } from "react-router-dom";

// components
import Test from "../components/Test";

// hooks
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

// Environment variable for API URL
const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000/api/backend_data";

function Quiz() {
  const { title } = useParams();
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch(`${API_URL}/quizzes?title=${title}`);

  useEffect(() => {
    document.title = "Quiz" + " " + title;
  }, [title]);

  return (
    <div className="quiz-container container">
      {isPending && <h3>Loading...</h3>}
      {error && <h3>Something went wrong</h3>}
      {quizzes && <Test questions={quizzes[0]} />}
    </div>
  );
}

export default Quiz;


