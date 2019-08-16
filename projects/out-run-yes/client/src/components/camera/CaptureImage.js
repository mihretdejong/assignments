import React, { Component } from 'react'
import Camera from 'react-html5-camera-photo'
import 'react-html5-camera-photo/build/css/index.css'


class CaptureImage extends Component{
    constructor(){
        super()
        this.state = ({
            dataUri:[]
        })
    }
    onTakePhoto(dataUri) {
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