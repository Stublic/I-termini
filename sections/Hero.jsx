import styles from "../styles";
import "../styles/globals.css";
import { Header } from "../components";
import { headerSpa, headerMain } from "../constants";

const Hero = () => {
  return (
    <>
    {
            headerMain.map((feature, index) =>(
              <Header
              key={feature.title}
              {...feature}
              />
            ))
          }
    </>
  );
};

export default Hero;
