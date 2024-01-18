import { type StaticImageData } from 'next/image';

interface Props {
  title: string;
  date: string;
  time: string;
  description: string;
  bgImage: StaticImageData;
}
function HomeFoodCard({ title, date, time, description, bgImage }: Props) {
  const cardBgStyle = {
    backgroundImage: `url(${bgImage.src})`,
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
          <p className="home-food-card-info-content-intro">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default HomeFoodCard;
