import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'

export default function ConfigModal() {
  const [open, setOpen] = useState(true)
  const navigate = useNavigate()

  const modal = (
    <div style={{ position: 'fixed', left: 0, top: 0, width: '100%', height: '100%' }}>
      <div
        style={{ position: 'absolute', width: '100vw', height: '100vh', backgroundColor: '#0000006b' }}
        onClick={() => {
          setOpen(false)
          navigate('../')
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          zIndex: 1,
          width: 400,
          height: 300,
          backgroundColor: '#fff',
          left: 'calc(50% - 200px)',
          top: 'calc(50% - 150px)',
          padding: 16,
          border: '1px solid',
        }}
      >
        ConfigModal
      </div>
    </div>
  )
  return createPortal(<div>{open ? modal : null}</div>, document.body)
}
