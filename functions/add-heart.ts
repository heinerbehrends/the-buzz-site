import { hasuraRequest } from "../src/utils/hasura"

exports.handler = async event => {
  const { title } = JSON.parse(event.body)
  const data = await hasuraRequest({
    query: `
      mutation UpdateHeartCount($title: String!) {
        updated: update_buzz_hearts_by_pk(pk_columns: {title: $title}, _inc: {count: 1}) {
          count
          title
        }
      }
    `,
    variables: { title },
  })

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}
