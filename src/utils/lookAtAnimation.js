
import {EarthMesh} from '../meshes/Earth'
import {SunMesh} from '../meshes/Sun'

export let CameraLookAtClick = EarthMesh

const SunButton = document.querySelector('#lookSun')
SunButton.addEventListener('click', function() {
    CameraLookAtClick = SunMesh 
})

const EarthButton = document.querySelector('#lookEarth')
EarthButton.addEventListener('click', function() {
    CameraLookAtClick = EarthMesh
})
