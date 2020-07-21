import axios from "axios"
import Head from "next/head"
import Link from "next/link"
import CharacterList from "../components/CharacterList"
import Logo from "../components/Logo"

function Home(props) {
  const { characters } = props
  return (
    <div className="container">
      <Head>
        <title>Mick & Rorty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <main>
        <CharacterList characters={characters} />
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

export async function getStaticProps() {
  let characters = null
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character/"
    )
    characters = response.data.results
  } catch (error) {
    console.error("Error: ", error)
  }

  return {
    props: {
      characters,
    },
  }
}

export default Home
