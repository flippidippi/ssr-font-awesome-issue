import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faPencil } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

export default function Home() {
  return (
    <FontAwesomeIcon icon={faPencil} size='2x' transform='shrink-10 up-.5' mask={faComment} />
  )
}
