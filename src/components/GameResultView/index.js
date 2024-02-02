import {OptionImage, OptionListItem, GameOptionButton} from './styledComponents'

const GameResultView = props => {
  const {details, onClickGameView} = props
  const {imageUrl, id} = details

  const onUserChoice = () => {
    onClickGameView(id)
  }

  return (
    <OptionListItem>
      <GameOptionButton
        type="button"
        onClick={onUserChoice}
        data-testid={`${id.toLowerCase()}Button`}
      >
        <OptionImage src={imageUrl} alt={id} />
      </GameOptionButton>
    </OptionListItem>
  )
}

export default GameResultView
