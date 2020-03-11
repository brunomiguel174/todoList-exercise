import React, { Component } from "react";
class Main extends Component {
  constructor() {
    super();

    this.state = { someInput: "", list: [] };

    this.handleChange = event => {
      this.setState({ someInput: event.target.value });
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const { someInput, list } = this.state;
    const error = validateInputText(someInput);
    const newList = list;

    return (
      <main>
        <form className="form--main" onSubmit={this.handleSubmit}>
          <span>
            <input
              maxLength={30}
              className="input--main"
              name="some-input"
              value={someInput}
              onChange={this.handleChange}
              placeholder="write to enable the button"
            />
            <button className="style--button" disabled={error !== null}>
              Add 
            </button>
          </span>
        </form>

        <ul className="ul--main">
          {list.map((value, index) => (
            <li className="dinamic--li" key={index}>
              {value}{" "}
              <button onClick={() => this.deleteOneByOne(newList, index)}>
                {" "}
                ✖{" "}
              </button>
            </li>
          ))}
        </ul>

        <div className="div--main">
          <span>
            <button
              style={{
                visibility: this.state.list.length === 0 ? "hidden" : "visible"
              }}
              className="style--button"
              onClick={() => this.deleteAllElements(newList)}
            >
              Delete All
            </button>

            <button
              style={{
                visibility: this.state.list.length === 0 ? "hidden" : "visible"
              }}
              className="style--button"
              onClick={() => this.deleteLastElement(newList)}
            >
              Delete last element
            </button>
          </span>
        </div>
      </main>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(state => ({
      someInput: "",
      list: state.list.concat([state.someInput])
    }));
  }

  deleteLastElement(newList) {
    newList.pop();
    this.setState({ someInput: "", list: newList });
  }

  deleteOneByOne(newList, index) {
    newList.splice(index, 1);
    this.setState({ someInput: "", list: newList });
  }

  deleteAllElements(newList) {
    newList = [];
    this.setState({ someInput: "", list: newList });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(state => ({
      someInput: "",
      list: state.list.concat([state.someInput])
    }));
  }
}

/*Fiz esta função para conseguir jogar com o disabled do botao
 no form e caso futuramente prefira ter um erro mais visiviel ⤵️ */

function validateInputText(text) {
  if (text.length === 0) {
    return <h4>Write to enable the button</h4>;
  }
  return null;
}

export default Main;
