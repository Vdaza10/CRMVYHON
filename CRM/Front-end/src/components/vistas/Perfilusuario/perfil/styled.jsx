import styled from "styled-components";
// fondo
export const Fondo = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #98c8f5;
`;

//Header y su contenido
export const Header = styled.header`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Cajaheader = styled.div`
  height: 90%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-bottom: 1px solid black;
  border-radius: 100px 100px 0px 0px;
  box-shadow: #0f0e0ef0 0px 4px 6px 0px;
  background-color: #fcfcfc;
`;
export const Parrafo1 = styled.button`
  height: 40px;
  width: 250px;
  font-size: 20px;
  border-radius: 0px 20px 0px 10px;
  background-color: #14141445;
  font-family: "Times New Roman", Times, serif;
  border: none;
  &:hover {
    color: black;
    cursor: pointer;
    background-color: #53baff;
    border-radius: 10px;
    border-radius: 0px 25px 0px 25px;
    font-family: "Times New Roman", Times, serif;
  }
`;
export const Main = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 90%;
`;

export const Container = styled.div`
  height: 95%;
  width: 90%;
  display: flex;
  background-color: #ffffff;
  box-shadow: #08080899 10px 12px 6px 1px;
  border-radius: 20px;
`;
export const ContainPerfil = styled.div`
  height: 100%;
  width: 28%;
  border-right: 1px solid gray;
  border-radius: 15px 15px 0px 0px;
`;
export const BoxImgPerfil = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Boxperfil = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const ImgPerfil = styled.div`
  height: 60%;
  width: 50%;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  background-color: #c5c3c3;
`;
export const InforPerfil = styled.div`
  width: 90%;
  height: 14%;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #eee9e6;
  &:hover {
    cursor: pointer;
    font-size: 18px;
  }
  display: flex;
`;
export const InforperfilLetra = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #727272d2;
  border-radius: 15px 0px 0px 15px;
  &:hover {
    background-color: #4a4d4b;
  }
`;

export const BoxInfo = styled.div`
  width: 80%;
  height: 100%;
`;
export const SectionInfor = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const HeaderInfor = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  border-bottom: 1px solid gray;
`;
export const EditButton = styled.button`
  width: 140px;
  height: 35px;
  border: none;
  margin-right: 5px;
  border-radius: 10px 20px 0px 10px;
  background-color: #918e8e;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    background-color: #3a3b3beb;
    border-radius: 5px 20px 0px 15px;
  }
`;
export const InfoPersonal = styled.div`
  height: 90%;
  width: 45%;
  display: flex;
  flex-direction: column;
  background-color: #fcfcfc;
`;
