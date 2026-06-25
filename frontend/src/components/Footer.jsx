import { Primary } from "./footer/PrimaryFooter";
import { Secondary } from "./footer/SecondFooter";
import { ThirdFooter } from "./footer/ThirdFooter";

export const Footer = () => {
  return (
    <>
      <footer>
        <Primary />
        <Secondary />
        <ThirdFooter />
      </footer>
    </>
  );
};
