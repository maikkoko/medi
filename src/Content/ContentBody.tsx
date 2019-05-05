import React from "react";
import faker from "faker";
import "./ContentBody.css";
import { CheckIcon, ErrorIcon } from "./Verified";

interface Data {
  displayImage: string;
  displayName: string;
  checkActive: boolean;
  errorActive: boolean;
}

const ContentBody: React.FC = () => {
  const cardlist = () => {
    var cards: any = [];
    for (var i = 0; i < 6; i++) {
      const data: Data = {
        displayImage: `https://i.pravatar.cc/100?u=${i}`,
        displayName: faker.name.findName(),
        checkActive: faker.random.boolean(),
        errorActive: faker.random.boolean()
      };

      cards.push(<Card key={i} {...data} />);
    }

    return cards;
  };

  return (
    <div className="content__body">
      <h3>
        Today <span>(15 Appointments)</span>
      </h3>
      <ul>{cardlist()}</ul>
    </div>
  );
};

interface CardProps extends Data {}

const Card: React.FC<CardProps> = ({
  displayName,
  displayImage,
  checkActive,
  errorActive
}) => {
  const displayImageStyle = {
    backgroundImage: `url('${displayImage})`
  };

  return (
    <li className="card">
      <div>
        <div className="card__display-image" style={displayImageStyle} />
        <div className="card__details">
          <p className="display-name">{displayName}</p>
          <p className="display-label">Consultation</p>
          <div className="indicators">
            <CheckIcon active={checkActive} size={32} />
            <ErrorIcon active={errorActive} size={32} />
          </div>
        </div>
      </div>
      <div className="timestamps">
        <h4>03:30 PM</h4>
        <p>26/03/2019</p>
      </div>
      <button>View More</button>
    </li>
  );
};

export default ContentBody;
