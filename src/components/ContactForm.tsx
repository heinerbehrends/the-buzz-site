import React from "react"
import { useForm } from "react-hook-form"
import { Label, ErrorMessage } from "./ContactFormComponents"
import {
  NetlifyFormStyled,
  FlexColumnContainer,
  InputStyled,
} from "../styles/contactFormStyles"

export function NetlifyForm({ children, ...rest }): JSX.Element {
  return (
    <form
      method="POST"
      data-netlify="true"
      encType="application/x-www-form-urlencoded"
      name="contact-form"
      id="contact"
      action="/succes"
      {...rest}
    >
      {children}
    </form>
  )
}

export default function ContactForm(): JSX.Element {
  const { register, errors } = useForm({
    mode: "onChange",
    shouldFocusError: true,
  })

  return (
    <NetlifyFormStyled>
      {/* hidden form field neccessary for netlify form submission */}
      <input type="hidden" name="form-name" value="contact-form" />
      <FlexColumnContainer>
        <Label for="name">Name</Label>
        <InputStyled
          type="text"
          name="name"
          placeholder="Your name"
          ref={register({ required: true, minLength: 2, maxLength: 30 })}
        />
        {errors.name ? (
          <ErrorMessage>This is a required field.</ErrorMessage>
        ) : null}
        <Label for="email">Email</Label>
        <InputStyled
          type="email"
          name="email"
          placeholder="Your email address"
          ref={register({
            required: "This is a required field.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Ongeldige e-mail adres.",
            },
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <Label for="message">Message</Label>
        <InputStyled
          as="textarea"
          name="message"
          form="contact"
          ref={register({
            required: true,
            minLength: 12,
            maxLength: 2000,
          })}
          placeholder="Your message"
          rows={6}
        ></InputStyled>
        {errors.message && (
          <ErrorMessage>Het bericht is te kort of te lang</ErrorMessage>
        )}
        <InputStyled
          as="button"
          type="submit"
          style={{
            marginTop: "64px",
          }}
        >
          SEND
        </InputStyled>
      </FlexColumnContainer>
    </NetlifyFormStyled>
  )
}
