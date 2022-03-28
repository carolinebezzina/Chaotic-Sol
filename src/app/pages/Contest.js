import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
init("Ao67OolbCtqiBlgLp");

export class Contest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validated: false,
        };
      }

  render() {

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        event.preventDefault();

        if (form.checkValidity() === false) {
          event.stopPropagation();
        }
        
        console.log(form);

        emailjs.sendForm('service_52hc2j5', 'template_y8nhlih', form, 'Ao67OolbCtqiBlgLp')
            .then(() => {
               alert('Your submission was received successfully!');
            }, () => {
               alert('Something went wrong. Please contact Xy.');
            });
    };

    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Logo Contest </h3>
        </div>
        <div className="row">
          <div className="col-lg-8 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <Form className="pt-3" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Your character name</Form.Label>
                        <Form.Control type="text" id="from_name" name="from_name" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Any notes / comments?</Form.Label>
                        <Form.Control id="message" name="message" as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Upload File</Form.Label>
                        <Form.Control id="logo_file" name="logo_file" type="file" required />
                    </Form.Group>
                    <div className="mt-3">
                        <Button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" type="submit">SUBMIT</Button>
                    </div>
                </Form>
              </div>
            </div>
          </div>
          </div>
      </div>
    )
  }
}

export default Contest
