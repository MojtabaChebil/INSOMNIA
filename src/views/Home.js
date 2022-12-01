import { useState } from "react";
import WizardHorizontal from "../components/wizard/WizardHorizontal";
import FemmeEmoji from "@src/assets/images/avatars/femme.png";
import HommeEmoji from "@src/assets/images/avatars/homme.png";
import CardeImage from "../components/CardImage/CardeImage";

const Home = () => {
  const [gender, setGender] = useState(null);
  console.log(gender);

  const handleGendre = (data) => {
    setGender(data);
  };
  return (
    <div>
      {gender ? (
        <WizardHorizontal gender={gender}/>
      ) : (
        <div className="d-flex justify-content-center" style={{ gap: 30 }}>
          <CardeImage image={FemmeEmoji} handleGendre={handleGendre}>
            Femme
          </CardeImage>
          <CardeImage image={HommeEmoji} handleGendre={handleGendre}>
            Homme
          </CardeImage>
        </div>
      )}
    </div>
  );
};

export default Home;
