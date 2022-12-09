import { useRouter } from 'next/router'
import * as React from 'react'

export interface IDetailPostPageProps {}

export default function DetailPostPage(props: IDetailPostPageProps) {
  const route = useRouter()
  return (
    <div>
      <h1>This is a Detail post page</h1>
      <q>Query: {JSON.stringify(route.query)}</q>
    </div>
  )
}
