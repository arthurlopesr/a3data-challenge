import { lighten } from "polished";
import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  max-width: 600px;
  height: 200px;

  position: relative;
  background-color: ${lighten(0.7, "#081C73")};
  border-radius: ${theme.borderRadius("xlg")};
  padding: ${theme.space(4)};

  ${theme.breakpoint("lg")} {
    width: 100%;
    height: 100%;
  }
`;

export const Wrapper = styled.div``;

export const PatientsName = styled.h1`
  font-size: 20px;
  font-weight: 400;
  color: ${theme.color("textColor")};
`;
export const MedicalProcedure = styled.h2`
  font-size: 15px;
  font-weight: 400;
  color: ${theme.color("textColor")};

  margin-top: ${theme.space(2)};
`;
export const SurgeryDate = styled.h2`
  font-size: 15px;
  font-weight: 400;
  color: ${theme.color("textColor")};

  margin-top: ${theme.space(2)};
`;
export const Hospital = styled.h2`
  font-size: 15px;
  font-weight: 400;
  color: ${theme.color("textColor")};

  margin-top: ${theme.space(2)};
`;
export const SurgicalRoom = styled.h2`
  font-size: 15px;
  font-weight: 400;
  color: ${theme.color("textColor")};

  margin-top: ${theme.space(2)};
`;
export const Observations = styled.h2`
  font-size: 15px;
  font-weight: 400;
  color: ${theme.color("textColor")};

  margin-top: ${theme.space(2)};
`;

export const EditButton = styled.button`
  cursor: pointer;
  position: absolute;
  svg {
    width: 18px;
    height: 18px;
  }
  background-color: ${lighten(0.7, "#081C73")};
  top: ${theme.space(4)};
  right: ${theme.space(10)};

  padding: ${theme.space(1)};
  line-height: 0;

  color: ${theme.color("primary")};
  border: none;

  transition: background-color 0.2s ease-in-out;
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  position: absolute;
  svg {
    width: 18px;
    height: 18px;
  }
  background-color: ${lighten(0.7, "#081C73")};
  top: ${theme.space(4)};
  right: ${theme.space(4)};

  padding: ${theme.space(1)};
  line-height: 0;

  color: ${theme.color("error")};
  border: none;

  transition: background-color 0.2s ease-in-out;
`;
