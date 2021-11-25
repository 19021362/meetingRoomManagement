import React from "react";
import { addParticipant, deleteParticipant, setParticipant } from "../data/participant";

export default class MultiEmails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            value: "",
            error: null
        };
    }




    handleKeyDown = evt => {
        if (["Enter", "Tab", ","].includes(evt.key)) {
            evt.preventDefault();

            var value = this.state.value.trim();
            console.log(value);
            if (value && this.isValid(value)) {
                addParticipant(value);
                this.setState({
                    items: [...this.state.items, this.state.value],
                    value: ""
                });

            }
        }
    };

    handleChange = evt => {
        this.setState({
            value: evt.target.value,
            error: null
        });
    };

    handleDelete = item => {
        deleteParticipant(item);
        this.setState({
            items: this.state.items.filter(i => i !== item)
        });

    };

    handlePaste = evt => {
        evt.preventDefault();

        var paste = evt.clipboardData.getData("text");
        var emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);

        if (emails) {
            var toBeAdded = emails.filter(email => !this.isInList(email));
            addParticipant(toBeAdded);
            this.setState({
                items: [...this.state.items, ...toBeAdded]
            });
        }
    };

    isValid(email) {
        let error = null;

        if (this.isInList(email)) {
            error = `${email} has already been added.`;
        }

        if (!this.isEmail(email)) {
            error = `${email} is not a valid email address.`;
        }

        if (error) {
            this.setState({ error });

            return false;
        }

        return true;
    }

    isInList(email) {
        return this.state.items.includes(email);
    }

    isEmail(email) {
        return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
    }

    render() {

        return (
            <>
                {this.state.items.map(item => (
                    <div className="tag-item" key={item}>
                        {item}
                        <button
                            type="button"
                            className="button"
                            onClick={() => this.handleDelete(item)}
                        >
                            &times;
                        </button>
                    </div>
                ))}

                <input
                    className={"input " + (this.state.error && " has-error")}
                    value={this.state.value}
                    placeholder="Type or paste email addresses and press `Enter`..."
                    onKeyDown={this.handleKeyDown}
                    onChange={this.handleChange}
                    onPaste={this.handlePaste}
                />

                {this.state.error && <p className="error">{this.state.error}</p>}
            </>
        );
    }
}

