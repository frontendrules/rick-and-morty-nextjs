export default function CharacterInfo({ name, species, image }) {
  return (
    <div className="grid">
      <div className="image-container">
        <img src={image} />
        <h1>{name}</h1>
      </div>

      <style jsx>{``}</style>
    </div>
  )
}
