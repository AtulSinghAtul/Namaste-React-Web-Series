import React, { useState, useEffect } from "react";

const About = () => {
  const [aboutData, setAboutData] = useState();

  useEffect(() => {
    fetchAboutData();
  }, []);

  async function fetchAboutData() {
    const data = await fetch("https://api.github.com/users/AtulSinghAtul");

    const json = await data.json();
    console.log(json);
    setAboutData(json);
  }

  const { name, location, avatar_url } = aboutData;

  return (
    <>
      <img src={avatar_url} />
      <h1>{name}</h1>
      <h2>{location}</h2>
    </>
  );
};

export default About;

// class About1 extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//     };
//   }

//   async componentDidMount() {
//     const data = await fetch("https://api.github.com/users/AtulSinghAtul");

//     const json = await data.json();
//     console.log(json);
//     this.setState({ json });
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//       </div>
//     );
//   }
// }
