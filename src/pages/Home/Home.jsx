import React from "react";
import { Helmet } from "react-helmet-async";
import "swiper/css";
import "swiper/css/pagination";

import Headline from "../../components/Sections/Headline/Headline";
import Highlight from "../../components/Sections/Highlight/Highlight";
import Sponsors from "../../components/Sections/Sponsors/Sponsors";
import Categories from "../../components/Sections/Categories/Categories";
import Localization from "../../components/Sections/Localization";
import Contact from "../../components/Sections/Contact/Contact";
import Divider from "../../components/Sections/Divider/Divider";

function Home() {
  return (
    <main>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Descrição da minha página para buscadores."
        />
      </Helmet>
      <Headline />
      <Divider />
      <Highlight />
      <Sponsors />
      <Categories />
      <Divider />
      <Localization />
      <Contact />
    </main>
  );
}

export default Home;
