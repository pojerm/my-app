import React from "react";
import './newsletter.css'
import { Form } from "../Form/Form";
import { Button } from "../Button/Button";
import { Title } from "../Title/Title";
import { Subtitle } from "../Subtitle/Subtitle";
import { List } from "../List/List";
import { Image } from "../Image/Image";

export const Newsletter = () => {
  return (
    <div className="container">
      <div className="card-image">
        <Image />
      </div>
      <div className="card-body">
        <Title />
        <Subtitle />
        <List />
        <Form />
        <Button />
      </div>
    </div>
  );
};