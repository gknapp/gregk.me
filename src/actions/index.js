import axios from "axios"

export const SEND_MESSAGE = "send_message"
const BAD_REQUEST = 400

export function sendMessage(values, next) {
  axios.post(
    "https://api.shiftleft.ltd/contact", values
  ).then(
    (response) => next(response.status)
  ).catch(
    () => next(BAD_REQUEST)
  )

  return {
    type: SEND_MESSAGE
  }
}
