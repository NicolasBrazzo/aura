import { Title } from "./Title";
import { Paragraf } from "./Paragraf";

export const HomePage = () => {
  return (
    <div style={{border: "2px solid red"}}>
      <Title text={"Aura"} type={"primary"} />
      <Paragraf text={"yoo bro "} />
    </div>
  );
};
