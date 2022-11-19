
import {SunMesh} from '../meshes/Sun'
import {MercuryMesh} from '../meshes/Mercury'
import {VenusMesh} from '../meshes/Venus'
import {EarthMesh} from '../meshes/Earth'
import {MarsMesh} from '../meshes/Mars'
import {JupiterMesh} from '../meshes/Jupiter'
import {SaturnMesh} from '../meshes/Saturn'
import {UranusMesh} from '../meshes/Uranus'
import {NeptuneMesh} from '../meshes/Neptune'

export let CameraLookAtClick = EarthMesh

const SunButton = document.querySelector('#lookSun')
SunButton.addEventListener('click', function() {
    CameraLookAtClick = SunMesh 
})

const MercuryButton = document.querySelector('#lookMercury')
MercuryButton.addEventListener('click', function() {
    CameraLookAtClick = MercuryMesh 
})

const VenusButton = document.querySelector('#lookVenus')
VenusButton.addEventListener('click', function() {
    CameraLookAtClick = VenusMesh 
})

const EarthButton = document.querySelector('#lookEarth')
EarthButton.addEventListener('click', function() {
    CameraLookAtClick = EarthMesh
})

const MarsButton = document.querySelector('#lookMars')
MarsButton.addEventListener('click', function() {
    CameraLookAtClick = MarsMesh 
})

const JupiterButton = document.querySelector('#lookJupiter')
JupiterButton.addEventListener('click', function() {
    CameraLookAtClick = JupiterMesh 
})

const SaturnButton = document.querySelector('#lookSaturn')
SaturnButton.addEventListener('click', function() {
    CameraLookAtClick = SaturnMesh 
})

const UranusButton = document.querySelector('#lookUranus')
UranusButton.addEventListener('click', function() {
    CameraLookAtClick = UranusMesh 
})

const NeptuneButton = document.querySelector('#lookNeptune')
NeptuneButton.addEventListener('click', function() {
    CameraLookAtClick = NeptuneMesh 
})