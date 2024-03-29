interface Props {
  title: string;
  date: string;
  time: string;
  description: string;
  bgImage: string;
}
function HomeFoodCard({ title, date, time, description, bgImage }: Props) {
  const cardBgStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div
      className="home-food-card"
      style={cardBgStyle}
    >
      <div className="home-food-card-info">
        <div className="home-food-card-info-content">
          <div className="home-food-card-info-content-title">
            <h5>{title}</h5>
            <div className="home-food-card-info-content-title-time">
              <span>{date}</span>
              <span>{time}</span>
            </div>
          </div>
          <p className="text-sm lg:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default HomeFoodCard;
