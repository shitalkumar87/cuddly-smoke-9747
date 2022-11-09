
import  SimpleImageSlider from "react-simple-image-slider";
import {Text } from "@chakra-ui/react"
const images = [
  { url: "https://files.myglamm.com/site-images/original/Homepage-desktop---1920-x-527.png" },
  { url: "https://files.myglamm.com/site-images/original/popxo1920x527.gif" },
  { url: "https://files.myglamm.com/site-images/original/Manish1920x527.jpg" },
  { url: "https://files.myglamm.com/site-images/original/Homepage-1920x527_3.jpeg" },
  
];

const Imageslider = () => {
  return (
    <Text marginTop="20px" marginLeft="2px" >
      <SimpleImageSlider
        
        width={1230}
        height={404}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </Text>
  );
}

export default Imageslider