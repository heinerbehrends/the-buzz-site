import { hasuraRequest } from "../src/utils/hasura"

// initialize all songs with a title and count of 0
exports.handler = async event => {
  const { songs } = JSON.parse(event.body)
  const data = await hasuraRequest({
    query: `mutation InsertOrUpdateHearts($songs: [buzz_hearts_insert_input!]!) {
    hearts: insert_buzz_hearts(objects: $songs, on_conflict: {constraint: buzz_hearts_pkey, update_columns: title}) {
      returning {
        count
        title
      }
    }
  }
  `,
    variables: { songs },
  })
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}
