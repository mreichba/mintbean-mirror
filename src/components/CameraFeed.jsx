/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import React, { useEffect, useRef } from 'react'
import { Button } from 'react-bootstrap'

const CameraFeed = () => {
  const videoPlayer = useRef(null)
  const canvas = useRef(null)

  useEffect(() => {
    console.log(navigator.mediaDevices.enumerateDevices())
    async function getCamera() {
      console.log('enumerate devices:', navigator.mediaDevices.enumerateDevices())
      const cameras = await navigator.mediaDevices.enumerateDevices()
      processDevices(cameras)
    }
    getCamera()
  }, [])

  const processDevices = (devices) => {
    devices.forEach(device => {
      console.log('Device:', device.label)
      setDevice(device)
    })
  }

  const setDevice = async (device) => {
    const { deviceId } = device
    const stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: { deviceId } })
      .then(stream => videoPlayer.current.srcObject = stream)
      .catch(err => console.log(err))
    videoPlayer.current.play()
  }

  const turnCameraOff = () => {
    videoPlayer.current.srcObject.getVideoTracks().forEach(track => track.stop())
  }

  const turnCameraOn = async () => {
    const cameras = await navigator.mediaDevices.enumerateDevices()
    processDevices(cameras)
  }

  const takePhoto = () => {
    const context = canvas.current.getContext('2d')
    context.filter = 'hue-rotate(0deg) brightness(400%) contrast(1000%) saturate(1000%) '

    context.drawImage(videoPlayer.current, 0, 0, canvas.current.width, canvas.current.height)
  }


  return (
    <div className="c-camera-feed">
      <div className="c-camera-feed__viewer">
        <video ref={videoPlayer} width="680" heigh="510" />
      </div>
      <div className='buttons'>
        <Button className='button' onClick={() => turnCameraOff()}>Turn off Camera</Button>
        <Button className='button' onClick={() => turnCameraOn()}>Turn on Camera</Button>
        <Button className='button' onClick={() => takePhoto()}>Take photo!</Button>
      </div>
      <div className="c-camera-feed__stage">
        <canvas className='canvas' width="680" height="510px" ref={canvas} />
      </div>
    </div>
  )
}

export default CameraFeed
