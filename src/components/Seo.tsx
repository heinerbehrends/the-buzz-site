import React from "react"
import { Helmet } from "react-helmet"
export default function Seo() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title itemProp="name" lang="en">
        We're The Buzz
      </title>
      <meta name="description" content="New Wave from Groningen" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="The Buzz -  New Wave from Groningen" />
      <meta property="og:url" content="https://werethebuzz.com/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="The Buzz plays songs inspired by the 1980's"
      />
      <meta
        property="og:image"
        content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png"
      />
      <link rel="canonical" href="http://werethebuzz.com" />
    </Helmet>
  )
}
