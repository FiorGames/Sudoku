import { Head } from 'inertia-kaioken-adapter'

export default function Home(props: { version: number }) {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <div className="container">
        <div className="title">AdonisJS {props.version} x Inertia x Kaioken</div>

        <span>
          Learn more about AdonisJS and Inertia.js by visiting the{' '}
          <a href="https://docs.adonisjs.com/guides/inertia">AdonisJS documentation</a>.
        </span>
      </div>
    </>
  )
}