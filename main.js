import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
// Import Components
import {
  SunMesh,
  SunRectAreaLight1,
  SunRectAreaLight2
} from './src/meshes/Sun'
import { 
  MercuryMesh, 
  animationMercury
} from './src/meshes/Mercury'
import { 
  VenusMesh, 
  animationVenus
} from './src/meshes/Venus'
import { 
  EarthMesh, 
  EarthMoonMesh,
  animationEarth
} from './src/meshes/Earth'
import { 
  MarsMesh, 
  MarsMoon1Mesh,
  MarsMoon2Mesh,
  animationMars
} from './src/meshes/Mars'
import { 
  JupiterMesh, 
  JupiterMoon1Mesh,
  JupiterMoon2Mesh,
  animationJupiter
} from './src/meshes/Jupiter'
import { 
  SaturnMesh,
  SaturnRingMesh,
  animationSaturn
} from './src/meshes/Saturn'

import { 
  UranusMesh, 
  UranusMoon1Mesh,
  UranusMoon2Mesh,
  animationUranus
} from './src/meshes/Uranus'

import { 
  NeptuneMesh, 
  NeptuneMoon1Mesh,
  NeptuneMoon2Mesh,
  animationNeptune
} from './src/meshes/Neptune'

// import Textures 
import {
  ParticlesStars,
} from './src/meshes/Stars'
// import Lights
import {
  ambientLight,
  pointLight,
  pointLightHelper
} from './src/lights/PointLightsGalaxy'
// import animations
import { CameraLookAtClick } from './src/utils/lookAtAnimation'

/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas#app')

/**
 * Scene
 */
const scene = new THREE.Scene()
// Scene Adds
scene.add(
  ambientLight,
  pointLight, 
  pointLightHelper
)
scene.add(
  ParticlesStars,
  SunMesh
)
scene.add(
  SunRectAreaLight1, 
  SunRectAreaLight2
)
scene.add(
  MercuryMesh,
  VenusMesh
)
scene.add(
  EarthMesh, 
  EarthMoonMesh
)
scene.add(
  MarsMesh,
  MarsMoon1Mesh,
  MarsMoon2Mesh
)
scene.add(
  JupiterMesh,
  JupiterMoon1Mesh,
  JupiterMoon2Mesh
)
scene.add(
  SaturnMesh,
  SaturnRingMesh
)
scene.add(
  UranusMesh,
  UranusMoon1Mesh,
  UranusMoon2Mesh
)
scene.add(
  NeptuneMesh, 
  NeptuneMoon1Mesh,
  NeptuneMoon2Mesh,
)



/**
 * CAMERA
 * -----------
*/
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}
const camera = new THREE.PerspectiveCamera(95, sizes.width / sizes.height, 0.1, 10000)
camera.position.x = 0
camera.position.y = 15
camera.position.z = -15
scene.add(camera)

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * CONTROLS
 * -----------
*/
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enabled = false

/**
 * RENDERER
 * -----------
*/
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor('#000000')

renderer.render(scene, camera)

/**
 * ANIMATIONS
 * -----------
*/
const clock = new THREE.Clock()
let previousTime = 0

const animation = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    SunMesh.rotation.y = elapsedTime * .1

    // Update controls
    // controls.update()

    // // Camera Look At
    camera.lookAt(CameraLookAtClick.position)
    if (CameraLookAtClick === SunMesh) {
      camera.position.x = CameraLookAtClick.position.x
      camera.position.y = CameraLookAtClick.position.y
      camera.position.z = CameraLookAtClick.position.z - 25
    } else if (CameraLookAtClick === JupiterMesh || CameraLookAtClick === SaturnMesh || CameraLookAtClick === UranusMesh || CameraLookAtClick === NeptuneMesh) {
      camera.position.x = CameraLookAtClick.position.x + (-Math.sin(deltaTime * .3) * 15)
      camera.position.y = CameraLookAtClick.position.y + 5
      camera.position.z = CameraLookAtClick.position.z + (-Math.cos(deltaTime * .3) * 15)
    } else {
      camera.position.x = CameraLookAtClick.position.x + (-Math.sin(deltaTime * .3) * 10)
      camera.position.y = CameraLookAtClick.position.y + 5
      camera.position.z = CameraLookAtClick.position.z + (-Math.cos(deltaTime * .3) * 10)
    }

    // Render
    renderer.render(scene, camera)

    // Call animation again on the next frame
    window.requestAnimationFrame(animation)
}

animation()
animationEarth()
animationMercury()
animationVenus()
animationMars()
animationJupiter()
animationSaturn()
animationUranus()
animationNeptune()