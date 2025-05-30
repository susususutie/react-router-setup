import { useNavigate } from 'react-router-dom'
import Modal from '../../components/Modal'

export default function ConfigModal() {
  const navigate = useNavigate()

  return (
    <Modal
      open
      onClose={() => {
        navigate('../')
      }}
      getContainer={() => document.getElementById('portal-root')}
    >
      <p style={{ height: 600 }}>ConfigModal</p>
    </Modal>
  )
}
