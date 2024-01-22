import './index.css'

const ThumbnailItem = props => {
  const {thumbDetails, thumbnaiImageClicked} = props
  const {thumbnailUrl} = thumbDetails

  const onClickThumbnail = () => {
    thumbnaiImageClicked(thumbnailUrl)
  }

  return (
    <li className="thumbnail-list">
      <button
        className="thumbnail-button"
        type="button"
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ThumbnailItem
