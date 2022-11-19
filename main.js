import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
// Import Components
import { 
  EarthMesh, 
  EarthMoonMesh,
  animationEarth
} from './src/meshes/Earth'
import {
  SunMesh,
  SunRectAreaLight1,
  SunRectAreaLight2
} from './src/meshes/Sun'
// import Textures 
import {
  ParticlesStars,
} from './src/meshes/Stars'
// import Lights
import {
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
scene.add(pointLight, pointLightHelper)
scene.add(
  ParticlesStars,
  EarthMesh, 
  EarthMoonMesh,
  SunMesh
)
scene.add(
  SunRectAreaLight1, 
  SunRectAreaLight2
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
// controls.enabled = false

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

const animation = () =>
{
    const elapsedTime = clock.getElapsedTime()

    SunMesh.rotation.y = elapsedTime * .1

    // Update controls
    controls.update()

    // Camera Look At
    camera.lookAt(CameraLookAtClick.position)

    // if (CameraLookAtClick === SunMesh) {
    //   camera.position.z = SunMesh.position.z - 25
    // } else if (CameraLookAtClick === EarthMesh) {
    //   camera.position.z = EarthMesh.position.z - 10
    // }

    // Render
    renderer.render(scene, camera)

    // Call animation again on the next frame
    window.requestAnimationFrame(animation)
}

animation()
animationEarth()