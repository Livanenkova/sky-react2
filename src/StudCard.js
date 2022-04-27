function StudCard({ name, text, surname}) {
  return (
    <>
      <hr />
      <div className="name">{name}</div>
      <div className="card">{text}</div>
      <div className="surname">{surname}</div>
      <hr />
    </>
  )
}

export default StudCard
