import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

//! Class base Component
class About extends Component {
  constructor() {
    super();
    //console.log(" Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component Did Mount");
    //! componentDidMount is Best Place for API Call
  }

  render() {
    // const {}= this.state;
    //console.log(" Parent Render");
    return (
      <>
        <h1>About Class Component</h1>
        <UserClass name={"First"} email={"alok4298@gmail.com"} />
        {/* <UserClass name={"Third"} email={"alok4298@gmail.com"} /> */}
        <User name={"Second"} email={"alok4298@gmail.com"} />
      </>
    );
  }
}

//! Functional Component
// const About = () => {
//   return (
//     <>
//       <h1>About Us Page</h1>
//       {/* <User name={"Atul Singh"} email={"atul4298@gmail.com"} /> */}
//       <UserClass name={"Alok Singh"} email={"alok4298@gmail.com"} />
//     </>
//   );
// };

export default About;
