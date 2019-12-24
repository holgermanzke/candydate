import React from "react";
import styled from "@emotion/styled";
import Image from "./candidateDetails/Image";
import Name from "./candidateDetails/CandidateName";
import Profession from "./candidateDetails/Profession";
import Experience from "./candidateDetails/Experience";
import Specials from "./candidateDetails/Specials";
import ContactDetails from "./candidateDetails/ContactDetails";

const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-items: center;
`;

export default function CandidateDetails({
  candSrc,
  alt,
  candName,
  candProfession,
  candExperience,
  candSpecial1,
  candSpecial2,
  candEMail,
  candPhone,
  candStreet,
  candCity
}) {
  return (
    <>
      <Container>
        <Image imgSrc={candSrc} alt={alt} />
        <Name name={candName} />
        <Profession profession={candProfession} />
        <Experience experience={candExperience} />
        <Specials special1={candSpecial1} special2={candSpecial2} />
        <ContactDetails
          email={candEMail}
          phone={candPhone}
          street={candStreet}
          city={candCity}
        />
      </Container>
    </>
  );
}