import React from "react"

const FormField = function(field) {
  const { type = "text" , meta: { touched, error } } = field
  let input = null

  if (type == "textarea") {
    input = <textarea className="form-control" rows="7"
              placeholder={field.label} {...field.input}></textarea>
  } else {
    input = <input className="form-control" type="text" placeholder={field.label} {...field.input} />
  }

  return (
    <div className="form-group" data-aos="fade-up" data-aos-delay={field.delay}>
      <label className="sr-only" htmlFor={field.name}>{field.placeholder}</label>
      {input}
      <div className="help-block text-missing">{touched ? error : ""}</div>
    </div>
  )
}

export default FormField
