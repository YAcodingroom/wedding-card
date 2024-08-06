import ImageLayer from "./ImageLayer";
import Home from "../main/Home";
import Story from "../main/Story";
import Carousel from "../main/Carousel";
import Infomation from "../main/Infomation";
import Rsvp from "../main/Rsvp";
import Form from "../main/Form";

function Main() {
  return (
    <main>
      <ImageLayer bgImage="bg-main">
        <Home />
      </ImageLayer>

      <Story />
      <Carousel />
      <Infomation />

      <ImageLayer bgImage="bg-rsvp">
        <Rsvp />
      </ImageLayer>

      <Form />
    </main>
  );
}

export default Main;
