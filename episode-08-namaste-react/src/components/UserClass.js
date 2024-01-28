import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    //! creating state variable
    this.state = {
      userInfo: {
        name: "DummyName",
      },
      // count: 0,
      // count1: 1,
      // count2: 2,
    };

    //console.log(this.props.name + " Child Constructor Called");
  }

  async componentDidMount() {
    // this.timer = setInterval(() => {
    //   console.log("NAMASTE REACT OP");
    // }, 1000);

    //console.log(this.props.name + "Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/AtulSinghAtul");

    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.count !== prevState.count ||
      this.state.count !== prevState.count
    ) {
      // code
    }

    //console.log("Component Did Update Call");
  }

  componentWillUnmount() {
    //console.log("Component Will Unmount Call");
    //clearInterval(this.timer);
  }

  render() {
    //console.log(this.props.name + " Child Render is Called");
    // const { name, email } = this.props;
    // const { count, count1, count2 } = this.state;
    const { name, avatar_url } = this.state.userInfo;
    // debugger;
    return (
      <>
        <h2>Name: {name} </h2>
        <img src={avatar_url} />
        {/* <h3>Count: {count}</h3>
        <h3>Count: {count1}</h3>
        <h3>Count: {count2}</h3> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count + 4,
            });
          }}
        >
          Increase Value
        </button> */}
      </>
    );
  }
}

export default UserClass;
