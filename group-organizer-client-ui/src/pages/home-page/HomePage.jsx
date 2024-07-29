import { useEffect, useState } from "react";
import "./homePage.css";
import { getHealth } from "../../services/healthServices";

export const HomePage = () => {
  const [health, setHealth] = useState({});

  useEffect(() => {
    // runs when page loads
    checkHealth();
  }, []);

  const checkHealth = async () => {
    const healthData = await getHealth();
    setHealth(healthData.data);
    console.log("health is:", health.data);
  };

  return (
    <div className="home-page">
      <pre>{JSON.stringify(health, null, 2)}</pre>
      <h2>this is my page</h2>
      {!health.data ? (
        <div>Loading ...</div>
      ) : (
        <div>
          <ul>
            {health.data.map((d, i) => (
              <li key={i}>{d.NickName}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
