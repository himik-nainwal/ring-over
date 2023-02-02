import "./TeamCard.scss";

export default function TeamCard({ member }) {
  return (
    <div className="team_card">
      <div className="profile">
        <img src={member.picture} alt={member.name} />
      </div>
      <div className="desc">
        <span>
          <h2 className="title">{member.name}</h2>
          <p className="position">{member.position}</p>
        </span>
        <span className="social">
          {member.contact.map((ele, index) => {
            return <img key={index} src={`../../images/${ele}`} alt="socials" />;
          })}
        </span>
      </div>
    </div>
  );
}
