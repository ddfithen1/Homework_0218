var root = document.getElementById("root");

const Form = () => {
    return React.createElement("div", { id: "form", class: "jumbotron bg-primary" }, [
        React.createElement("input", { type: "text", class: "form-control", placeholder: "Email" }),
        React.createElement("input", { type: "text", class: "form-control", placeholder: "Zipcode" }),
        React.createElement("button", { class: "btn btn-light" }, "Submit")
    ]);
};

ReactDOM.render(React.createElement(Form), root);