import Link from "next/link"

export default function CharacterList({ characters }) {
  return (
    <div className="grid">
      {characters.map((character) => {
        return (
          <Link key={character.id} href={`/character/${character.id}`}>
            <a>
              <div className="character">
                <div className="image-container">
                  <img src={character.image} />
                </div>
                <p className="name">{character.name}</p>
              </div>
            </a>
          </Link>
        )
      })}

      <style jsx>{`
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 100vw;
          margin-top: 1rem;
        }

        .character {
          border: 1px solid #ddd;
          border-radius: 4px;
          margin: 8px;
          box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);
        }

        .character img {
          border-radius: 4px 4px 0px 0px;
          max-width: 100%;
          transition: all 0.3s ease;
        }

        .image-container {
          max-width: 250px;
          max-height: 250px;
          overflow: hidden;
        }

        .character img:hover {
          transform: scale(1.2);
        }
        a {
          text-decoration: none;
          color: black;
        }
        .name {
          padding: 8px;
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}
