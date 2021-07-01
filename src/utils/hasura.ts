import fetch from "node-fetch"

export async function hasuraRequest({
  query,
  variables,
}: {
  query: string
  variables: {}
}) {
  const result = await fetch(process.env.HASURA_URL as string, {
    method: "POST",
    headers: {
      "X-Hasura-Admin-Secret": process.env.HASURA_ADMIN_SECRET as string,
    },
    body: JSON.stringify({ query, variables }),
  }).then(response => response.json())

  if (!result || !result.data) {
    console.error(result)
    return []
  }
  return result.data
}
