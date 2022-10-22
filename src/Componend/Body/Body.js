import React from "react";
import Footer from "../Footer/Footer";
import HealthInfo from "../Health-Info/HealthInfo";
import Shop from "../shop/Shop";

const Body = () => {
  return (
    <div>
      <section>
        <HealthInfo></HealthInfo>
      </section>
      <section>
        <Shop></Shop>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default Body;
