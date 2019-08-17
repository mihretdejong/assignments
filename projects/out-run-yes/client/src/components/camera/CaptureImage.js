import React, { Component } from 'react'
import Camera from 'react-html5-camera-photo'
import 'react-html5-camera-photo/build/css/index.css'

// https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API

class CaptureImage extends Component{
    constructor(){
        super()
        this.state = ({
            dataUri:[]
        })
    }
    
    captureImage(){
        // const context = this.vanvas.getContext("2d")
        // context.dtawImage(this.videoStream, 0, 0, 800, 600)
        // const imga = this.canvas.toDataURL('')
    }
    onTakePhoto(dataUri) {
        const imgUri = dataUri
        
        // save this in the local storage or db

        console.log('dataUri')
        
    }

    onCameraStart(stream){
        console.log('onCameraStart')
    }
    onCameraStop(){
        console.log('onCameraStop')
    }

    render(){
        return(
            <div>
                <Camera
                    /* imageType= {IMAGE_TYPES.JPG} */
                    isFullScreen = {true }
                    sizeFactor = { 1 }
                    onTakePhoto = { (dataUri) => {this.onTakePhoto(dataUri); }} 
                    onCameraStart = { (stream) => {this.onCameraStart(stream) ; }}
                    onCameraStop = { () => { this.onCameraStop()}}
                    />
            </div>
        )
    }
}



export default CaptureImage