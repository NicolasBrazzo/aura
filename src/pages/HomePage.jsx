import { Title } from "../components/Title";
import { Paragraf } from "../components/Paragraf";
import "../css/home.css";

export const HomePage = () => {
  return (
    <div className="main">
      <Title text={"AuraMeter"} type={"primary"} />
      <div className="card-main">
        <Title
          text={"Dove l’energia sociale prende forma."}
          type={"secondary"}
        />
        <Paragraf
          text={
            "Hai mai pensato: “Questa persona oggi ha proprio buona aura”? O al contrario: “No, questo merita di perdere almeno 10 punti aura subito”? Qui puoi farlo per davvero."
          }
        />
      </div>
      <div className="card-main">
        <Title text={"Cos'è AuraMeter?"} type={"secondary"} />
        <Paragraf
          text={
            "AuraMeter è il primo sito dove puoi aggiungere o togliere punti aura a chi vuoi: amici, celebrità, politici, il tuo ex, tua zia o anche te stesso (con moderazione eh). Ogni azione che fai (aggiungere o togliere aura) deve essere confermata da altri utenti per essere valida. Niente ingiustizie, solo pura democrazia dell’energia."
          }
        />
      </div>
    </div>
  );
};
