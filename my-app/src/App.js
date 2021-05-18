
import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    fullName: "Abdelkader Manoubi",
    profession: "Engineer",
    bio: "Electromecanical engineer and Full Stack Developer",
    image: "https://scontent.ftun9-1.fna.fbcdn.net/v/t31.18172-8/28162157_1041048369366655_8932871896041038714_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=SgCwK_3Vn70AX_m4aU-&_nc_ht=scontent.ftun9-1.fna&oh=4be2614fd76387dad8aeaf1cab164a2b&oe=60C8457E",
    show: true,
    cnt: 0,
  };

  handleClick = () => {
    this.setState({ show: !this.state.show });
  };
  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        cnt: prevState.cnt + 1,
      }));
    },1000);
  }

  render() {
    return (
      <div className="pos app">
        <div className="box">
          {this.state.show && (
            <div className="inf">
              <div className="pos profImg">
                <img src={this.state.image} alt="" />
              </div>
              <section className="pos">
                <h1>{this.state.fullName}</h1>
                <h3>{this.state.profession}</h3>
                <p>{this.state.bio}</p>
                <div className="count">
                  Count: {this.state.cnt}{" "}
                  sec
                </div>
              </section>
            </div>
          )}
          <button type="button" className="btn" onClick={this.handleClick}>
            Show Me
          </button>
        </div>
      
       
      </div>
    );
  }
}
export default App;