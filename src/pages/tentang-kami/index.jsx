import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import AboutUs4 from "../../components/About-Us4";
import LightLayout from "../../layouts/light";

// import Services3 from "../../components/Services3";
// import Skills2 from "../../components/Skills2";
// import Testimonials1 from "../../components/Testimonials1";
// import Team2 from "../../components/Team2";

const About = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <LightLayout>
      <PageHeader
        title="Tentang Kami"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "Tentang Kami", url: "/tentang-kami" },
        ]}
        image={"/assets/img/bg-team.jpg"}
      />
      <AboutUs4 />
      {/* <Services3 bigTitle grid />
      <Testimonials1 bigTitle />
      <Team2 />
      <Skills2 /> */}
    </LightLayout>
  );
};

export default About;
