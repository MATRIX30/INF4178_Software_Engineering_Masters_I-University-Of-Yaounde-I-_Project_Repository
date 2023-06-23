import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import User from "models/User";
import { getProjects } from "api";

export default function Feed({ currentuser }) {
  const [projectsList, setProjectsList] = useState([]);
  // const [user, setUser] = useState(null);
  const [displayAlert, setDisplayAlert] = useState(true);
  const [errorRequest, setErrorRequest] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProjectList();
  }, []);

  const getProjectList = async () => {
    try {
      const response = await getProjects();
      const sortedProjects = response.data.sort((a, b) => {
        // Tri par ordre décroissant (les plus récents en premier)
        return new Date(b.date_created) - new Date(a.date_created);
      });
      setProjectsList(sortedProjects);
      // console.log(response.data);
      // console.log(projectsList);

      setLoading(false);
      setErrorRequest(null);
      setDisplayAlert(true);
    } catch (error) {
      setLoading(false);
      setErrorRequest(error);
      setDisplayAlert(true);
      console.log(error);
    }
  };

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share
          userId={currentuser.id}
          userProfile={currentuser.profile.name}
          userPhoto={currentuser.photo}
          projects={projectsList}
          // setProjects={setProjects}
        />
        {/* <Post /> */}
        {/* <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post /> */}
      </div>
    </div>
  );
}
