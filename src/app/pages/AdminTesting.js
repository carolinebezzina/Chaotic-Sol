import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import WidgetBot from '@widgetbot/react-embed'

export class AdminTesting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            errorMessage: ""
        };
      }

  render() {

    const logins = [
        {
          username: "AdminXy",
          password: "Sol14"
        }
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        var { username, password } = document.forms[0];

        const userData = logins.find((user) => user.username === username.value);

        if (userData) {
            if (userData.password !== password.value) {
                this.setState({
                    errorMessage: "Invalid username or password.",
                })
            } else {
                this.setState({
                    errorMessage: "",
                    authenticated: true
                })
            }
        } else {
            this.setState({
                errorMessage: "Invalid username or password."
            })
        }
      };

    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
                {this.state.authenticated ? 
                <div className="col-lg-4 mx-auto">
                    <iframe src="https://discord.com/widget?id=854489617260478476&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </div>
                    : <div className="col-lg-4 mx-auto">
                        <div className="card text-left py-5 px-4 px-sm-5">
                            <h6 className="font-weight-light">Sign in to continue.</h6>
                            <Form className="pt-3" onSubmit={handleSubmit}>
                                <Form.Group className="d-flex search-field">
                                    <Form.Control id="username" type="text" placeholder="Username" size="lg" className="h-auto" />
                                </Form.Group>
                                <Form.Group className="d-flex search-field">
                                    <Form.Control id="password" type="password" placeholder="Password" size="lg" className="h-auto" />
                                </Form.Group>
                                <Form.Text>{this.state.errorMessage}</Form.Text>
                                <div className="mt-3">
                                    <Button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" type="submit">SIGN IN</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                }
          </div>
        </div>  
      </div>
    )
  }
}

export default AdminTesting
