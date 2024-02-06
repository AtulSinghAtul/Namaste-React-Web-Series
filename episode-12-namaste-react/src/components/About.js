import React from "react";
import userContext from "../utils/UserContext";

// const About = () => {
//   const [aboutData, setAboutData] = useState();

//   useEffect(() => {
//     fetchAboutData();
//   }, []);

//   async function fetchAboutData() {
//     const data = await fetch("https://api.github.com/users/AtulSinghAtul");

//     const json = await data.json();
//     console.log(json);
//     setAboutData(json);
//   }

//   const { name, location, avatar_url } = aboutData;

//   return (
//     <>
//       <img src={avatar_url} />
//       <h1>{name}</h1>
//       <h2>{location}</h2>
//     </>
//   );
// };

// export default About;

//! Creating class component
class About extends React.Component {
  constructor() {
    super();

    this.state = {
      userInfo: {
        name: "Dummy Name",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/AtulSinghAtul");

    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
  }

  render() {
    const { name, avatar_url, location } = this.state.userInfo;

    return (
      <div>
        {/* Using Context data in class component in old way  */}
        <userContext.Consumer>
          {({ userLoggedIn }) => <h1 className="font-bold">{userLoggedIn}</h1>}
        </userContext.Consumer>
        <img src={avatar_url} />
        <h1>{name}</h1>
        <p>{location}</p>
      </div>
    );
  }
}

export default About;
