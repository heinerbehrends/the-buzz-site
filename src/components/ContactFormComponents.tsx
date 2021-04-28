import React from "react"

export function ErrorMessage({ children }: errorMessageProps): JSX.Element {
  return (
    <span
      style={{
        marginLeft: "16px",
        marginTop: "8px",
        color: "var(--primary-color)",
      }}
    >
      {children}
    </span>
  )
}

interface errorMessageProps {
  children?: any
}

interface labelProps {
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
