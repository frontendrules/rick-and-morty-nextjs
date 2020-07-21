import axios from "axios"
import Head from "next/head"
import Link from "next/link"
import CharacterInfo from "../../components/CharacterInfo"
import Logo from "../../components/Logo"

function Character(props) {
  console.log(props)
  const { character } = props

  return (
    <div className="container">
      <Head>
        <title>{character && character.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <main>
        <CharacterInfo {...character} />
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

Character.getInitialProps = async ({ query }) => {
  let character = null
  console.log(`https://rickandmortyapi.com/api/character/${query.id}`)
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${query.id}`
    )
    character = response.data
  } catch (error) {
    console.error("Error: ", error)
  }

  return {
    character,
  }
}

export default Character
