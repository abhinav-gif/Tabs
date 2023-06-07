import { useEffect, useState } from "react";
import Jobs from "./Jobs";
import Companies from "./Companies";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [activeId, setActiveId] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataObj = await fetch(url);
        const temp = await dataObj.json();
        setData(temp);
        setActiveId(temp[0].id);
      } catch (error) {
        console.log(error);
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (isError) {
    return <>error while fetching data</>;
  }
  return (
    <main className="jobs-center">
      <Jobs data={data} activeId={activeId} setActiveId={setActiveId} />
      {data.map((obj, index) => {
        if (obj.id === activeId) {
          return <Companies data={data} ind={index} key={obj} />;
        }
      })}
    </main>
  );
};
export default App;
