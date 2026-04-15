import "./Card.css";

type Cards = {
  title: string;
  detail: string;
  price: number;
};

const Card = ({ title, detail, price }: Cards) => {
  return (
      <div className="card">
        <div className="titles">{title}</div>
        <div className="detail">{detail}</div>
        <div>
          <span className="prices">Harga : </span>
          <span>Rp.{price.toLocaleString("id-ID")}</span>
        </div>
      </div>
  );
};

export default Card;
