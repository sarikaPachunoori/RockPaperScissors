import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import GameResultView from '../GameResultView'

import {
  Container,
  Names,
  ScoreCont,
  Score,
  Count,
  BoxInCont,
  FirstBoxCont,
  BottomContainer,
  GameOptionsList,
  Images,
  RulesCont,
  Rules,
  DisplayRules,
  PopupContainer,
  PopupImage,
  CloseCont,
  CloseIcon,
  DisplayResultsMainCont,
  ResultDisplayCont,
  ResultText,
  ResultDisplay,
  PlayAgainCont,
  PlayAgainBtn,
} from './styledComponents'

const gameStatusConstants = {
  inProgress: 'IN_PROGRESS',
  win: 'WIN',
  lost: 'LOST',
  draw: 'DRAW',
}

class Home extends Component {
  state = {
    score: 0,
    gameStatus: gameStatusConstants.inProgress,
    userChoice: '',
    oppChoice: '',
  }

  onClickPlayAgain = () => {
    this.setState({gameStatus: gameStatusConstants.inProgress})
  }

  onClickGameStart = id => {
    this.setState(
      {userChoice: id, oppChoice: this.oppChoiceView()},
      this.seeTheGameView,
    )
  }

  oppChoiceView = () => {
    const {choicesList} = this.props
    const gameChoicesList = choicesList.map(choice => choice.id)
    const randomIndex = Math.floor(Math.random() * 3)
    return gameChoicesList[randomIndex]
  }

  seeTheGameView = () => {
    const {userChoice, oppChoice} = this.state

    if (userChoice === oppChoice) {
      this.setState({gameStatus: gameStatusConstants.draw})
    } else if (userChoice === 'ROCK') {
      if (oppChoice === 'SCISSORS') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'PAPER') {
      if (oppChoice === 'ROCK') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'SCISSORS') {
      if (oppChoice === 'PAPER') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    }
  }

  renderGameInProgressView = () => {
    const {choicesList} = this.props
    return (
      <GameOptionsList>
        {choicesList.map(each => (
          <GameResultView
            details={each}
            key={each.id}
            onClickGameView={this.onClickGameStart}
          />
        ))}
      </GameOptionsList>
    )
  }

  renderGameWonView = () => {
    const {oppChoice, userChoice} = this.state
    const {choicesList} = this.props

    const userChoiceObjectLIST = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObject = userChoiceObjectLIST[0]

    const gameChoiceObjectLIST = choicesList.filter(
      choice => choice.id === oppChoice,
    )
    const gameChoiceObject = gameChoiceObjectLIST[0]

    return (
      <DisplayResultsMainCont>
        <ResultDisplayCont>
          <ResultDisplay>
            <ResultText>YOU</ResultText>
            <Images src={userChoiceObject.imageUrl} alt="your choice" />
          </ResultDisplay>
          <ResultDisplay>
            <ResultText>OPPONENT</ResultText>
            <Images src={gameChoiceObject.imageUrl} alt="opponent choice" />
          </ResultDisplay>
        </ResultDisplayCont>
        <PlayAgainCont>
          <ResultText>YOU WON</ResultText>
          <PlayAgainBtn onClick={this.onClickPlayAgain}>
            Play Again
          </PlayAgainBtn>
        </PlayAgainCont>
      </DisplayResultsMainCont>
    )
  }

  renderGameLostView = () => {
    const {oppChoice, userChoice} = this.state
    const {choicesList} = this.props
    const userChoiceObjectLIST = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObject = userChoiceObjectLIST[0]

    const gameChoiceObjectLIST = choicesList.filter(
      choice => choice.id === oppChoice,
    )
    const gameChoiceObject = gameChoiceObjectLIST[0]

    return (
      <DisplayResultsMainCont>
        <ResultDisplayCont>
          <ResultDisplay>
            <ResultText>YOU</ResultText>
            <Images src={userChoiceObject.imageUrl} alt="your choice" />
          </ResultDisplay>
          <ResultDisplay>
            <ResultText>OPPONENT</ResultText>
            <Images src={gameChoiceObject.imageUrl} alt="opponent choice" />
          </ResultDisplay>
        </ResultDisplayCont>
        <PlayAgainCont>
          <ResultText>YOU LOSE</ResultText>
          <PlayAgainBtn onClick={this.onClickPlayAgain}>
            Play Again
          </PlayAgainBtn>
        </PlayAgainCont>
      </DisplayResultsMainCont>
    )
  }

  renderGameDrawView = () => {
    const {oppChoice, userChoice} = this.state
    const {choicesList} = this.props
    const userChoiceObjectLIST = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObject = userChoiceObjectLIST[0]

    const gameChoiceObjectLIST = choicesList.filter(
      choice => choice.id === oppChoice,
    )
    const gameChoiceObject = gameChoiceObjectLIST[0]

    return (
      <DisplayResultsMainCont>
        <ResultDisplayCont>
          <ResultDisplay>
            <ResultText>YOU</ResultText>
            <Images src={userChoiceObject.imageUrl} alt="your choice" />
          </ResultDisplay>
          <ResultDisplay>
            <ResultText>OPPONENT</ResultText>
            <Images src={gameChoiceObject.imageUrl} alt="opponent choice" />
          </ResultDisplay>
        </ResultDisplayCont>
        <PlayAgainCont>
          <ResultText>IT IS DRAW</ResultText>
          <PlayAgainBtn onClick={this.onClickPlayAgain}>
            Play Again
          </PlayAgainBtn>
        </PlayAgainCont>
      </DisplayResultsMainCont>
    )
  }

  renderGameView = () => {
    const {gameStatus} = this.state
    switch (gameStatus) {
      case gameStatusConstants.inProgress:
        return this.renderGameInProgressView()
      case gameStatusConstants.win:
        return this.renderGameWonView()
      case gameStatusConstants.lost:
        return this.renderGameLostView()
      case gameStatusConstants.draw:
        return this.renderGameDrawView()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state

    return (
      <Container>
        <FirstBoxCont>
          <BoxInCont>
            <Names>
              ROCK <br /> PAPER
              <br /> SCISSORS
            </Names>
          </BoxInCont>
          <ScoreCont>
            <Score>Score</Score>
            <Count>{score}</Count>
          </ScoreCont>
        </FirstBoxCont>
        <BottomContainer>{this.renderGameView()} </BottomContainer>
        <RulesCont>
          <Popup
            modal
            trigger={
              <Rules onClick={this.togglePopup} type="button">
                RULES
              </Rules>
            }
            closeOnEscape
            window
          >
            {close => (
              <>
                <DisplayRules>
                  <PopupContainer>
                    <CloseCont>
                      <CloseIcon type="button" onClick={() => close()}>
                        <RiCloseLine />
                      </CloseIcon>
                      <PopupImage
                        src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                        alt="rules"
                      />
                    </CloseCont>
                  </PopupContainer>
                </DisplayRules>
              </>
            )}
          </Popup>
        </RulesCont>
      </Container>
    )
  }
}

export default Home
