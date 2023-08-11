const Person = ({review,nextPerson,prevPerson}) => {
 const{id,name,image,job,text}=review
  return (
    <div>
    <section key={id}>
      <img src={image} alt={name} style={{width:"250px",borderRadius:"50%",height:"250px"}} />
     <h1>{name}</h1>
     <h3>{job}</h3>
     <p>{text}</p>
     <button onClick = {nextPerson}>next person</button>
     <button onClick = {prevPerson}>prev person</button>
    </section>
    </div>
  )
}
export default Person