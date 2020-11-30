import React from "react"

export function ErrorMessage({ children }: errorMessageProps): JSX.Element {
  return (
    <span style={{ marginLeft: "16px", marginTop: "4px", color: "red" }}>
      {children}
    </span>
  )
}

type errorMessageProps = {
  children?: any
}

type labelProps = {
  for: string
  children?: any
}

export function Label(props: labelProps) {
  return (
    <label
      htmlFor={props.for}
      style={{ marginLeft: "16px", marginTop: "32px", marginBottom: "4px" }}
    >
      {props.children}
    </label>
  )
}
