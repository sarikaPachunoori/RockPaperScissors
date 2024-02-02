import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #223a5f;
  min-height: 100vh;
  padding: 30px;
`

export const FirstBoxCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 20vh;
  width: 90%;
  margin-left: 90px;
  margin-top: 50px;
  border: 2px solid #ffff;
  border-radius: 10px;
`
export const BoxInCont = styled.div`
  display: block;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
  margin-left: 30px;
`
export const Names = styled.h1`
  color: white;
  font-size: 28px;
  font-family: 'Bree Serif';
  font-weight: 400;
`
export const ScoreCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 120px;
  background-color: #ffff;
  border-radius: 10px;
  font-family: 'Bree Serif';
  margin-right: 25px;
`
export const Score = styled.p`
  color: #223a5f;
  font-size: 25px;
  font-weight: 300;
  line-height: 0;
`
export const Count = styled.p`
  color: #223a5f;
  font-size: 40px;
  line-height: 0;
  font-weight: bold;
  font-family: 'Roboto';
`
export const BottomContainer = styled.div`
  position: relative;
  display: block;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 550px; /* Set the desired width */
  margin-bottom: 20px;
  margin-top: 40px;
`
export const GameOptionsList = styled.ul`
  padding-left: 0px;
  margin-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 480px;
  flex-wrap: wrap;
`
export const ImgBtn = styled.button`
  border: none;
  background-color: transparent;
  width: 12vw;
  height: 25vh;
  margin: 20px;
`

export const Images = styled.img`
  height: 10vw;
  width: 20vh;
  cursor: pointer;
`
export const RulesCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
`
export const Rules = styled.button`
  height: 50px;
  width: 100px;
  background-color: #ffff;
  text-align: center;
  border: none;
  border-radius: 8px;
  color: #223;
  cursor: pointer;
  font-family: 'Bree serif';
  font-size: 18px;
`
export const DisplayRules = styled.div`
  display: flex;
  flex-direction: column;
`
export const CloseCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 80vh;
  width: 40vw;
  background-color: #fff;
  position: fixed;
`

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`
export const CloseIcon = styled.button`
  font-size: 28px;
  text-align: end;
  background-color: transparent;
  cursor: pointer;
  border: none;
`

export const PopupImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  margin-top: 20px;
  margin-right: 30px;
`
export const ChoiceBtn = styled.button`
  height: 20vh;
  width: 10vw;
  margin: 20px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`
export const DisplayResultsMainCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
  padding: 20px;
  align-items: center;
`
export const ResultText = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Roboto';
  text-align: center;
`

export const ResultDisplayCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
  width: 100%;
`
export const ResultValue = styled.p`
  font-size: 25px;
  font-family: 'Roboto';
`
export const ResultDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-family: 'Roboto';
`
export const PlayAgainCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PlayAgainBtn = styled.button`
  height: 40px;
  width: 100px;
  background-color: #fff;
  border: none;
  border-radius: 8px;
  color: #223;
  font-family: 'Roboto';
  text-align: center;
  font-size: 18px;
  cursor: pointer;
`
