import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"
import { connect } from "react-redux"

import FormField from "./form_field"
import { sendMessage } from "../actions"

import "aos/dist/aos.css"
import AOS from "aos"

class ContactForm extends Component {
  constructor(props) {
    super(props)
    AOS.init()

    this.state = {
      submitted: false,
      error: false
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  componentWillReceiveProps() {
    AOS.refresh()
  }

  onSubmit(values) {
    this.props.sendMessage(values, (httpCode) => {
      let state = {
        submitted: true
      }

      if (httpCode !== 200) {
        state = {state, ...{ error: true }}
      }

      this.setState(state)
    })
  }

  renderResponse(message) {
    return (
      <div className="response" data-aos="fade-up">
        {message}
      </div>
    )
  }

  render() {
    const { handleSubmit } = this.props
    const { submitted, error } = this.state

    if (submitted) {
      if (error) {
        return this.renderResponse(
          "Sorry, there was an problem sending your message :("
        )
      }

      return this.renderResponse("Thanks for your message!")
    }

    return (
      <form role="form" onSubmit={handleSubmit(this.onSubmit)} noValidate>
        <Field label="Name" name="name" component={FormField} delay="0" />
        <Field label="E-mail address" name="email" component={FormField} delay="150" />
        <Field label="Message" name="body" type="textarea" component={FormField} delay="300" />
        <div className="form-group" data-aos="fade-up" data-aos-delay="425">
          <div className="g-recaptcha" data-sitekey="6LdsczEUAAAAADLap7YTrY-5VblRxL4GW1b4RR3m"></div>
        </div>
        <button type="submit" className="btn btn-custom-1"
          data-aos="fade-up" data-aos-delay="500" data-aos-offset="200">
          <i className="icon-bullhorn icon-before"></i> Send Message
        </button>
      </form>
    )
  }

}

const validate = values => {
  const errors = {}

  if (!values.name) {
    errors.name = "Please enter your name"
  }

  if (!values.email) {
    errors.email = "Please enter your e-mail address"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please enter a valid e-mail address"
  }

  if (!values.message || values.message.length < 10) {
    errors.message = "Please enter a message"
  }

  return errors
}

export default reduxForm({
  form: "ContactGreg",
  validate
})(
  connect(null, { sendMessage })(ContactForm)
)
