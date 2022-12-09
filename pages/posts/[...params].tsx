import { useRouter } from 'next/router'
import * as React from 'react'

export interface IParamsPageProps {}

export default function ParamsPage(props: IParamsPageProps) {
  const route = useRouter()
  return (
    <div>
      <h1>This is Params Page</h1>
      <h2>Query: {JSON.stringify(route.query)}</h2>
    </div>
  )
}
