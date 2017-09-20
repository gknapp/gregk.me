import "./css"
import "./assets"

import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import promise from "redux-promise"

import reducers from "./reducers"
import ContactForm from "./components/contact_form"

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <ContactForm />
  </Provider>,
  document.querySelector("#contact-form")
)
