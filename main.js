import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'

// Import Components
import {
  EarthMaterial, 
  EarthMesh, 
  EarthMoonMaterial,
  EarthMoonMesh
} from './src/Earth'

/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas#app')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const galaxyFloorTexture = textureLoader.load('/textures/space-galaxy-background.jpg')
const EarthTexture = textureLoader.load('/textures/fullmapb.jpeg')
const EarthMoonTexture = textureLoader.load('/textures/moonmap1k.jpg')

galaxyFloorTexture.repeat.set(2,2)
galaxyFloorTexture.wrapS = THREE.RepeatWrapping
galaxyFloorTexture.wrapT = THREE.RepeatWrapping
galaxyFloorTexture.minFilter = THREE.NearestMipMapNearestFilter
galaxyFloorTexture.magFilter = THREE.NearestFilter 
galaxyFloorTexture.generateMipmaps = false

EarthTexture.wrapS = THREE.RepeatWrapping
EarthTexture.wrapT = THREE.RepeatWrapping
EarthTexture.minFilter = THREE.NearestMipMapNearestFilter
EarthTexture.magFilter = THREE.NearestFilter 
EarthTexture.generateMipmaps = false

// Environment Map
const CubeTextureLoader = new THREE.CubeTextureLoader()
// sempre positive negative, x,y,z
// const environmentMapTexture = CubeTextureLoader.load([
//     '/textures/environmentMaps/0/px.jpg',
//     '/textures/environmentMaps/0/nx.jpg',
//     '/textures/environmentMaps/0/py.jpg',
//     '/textures/environmentMaps/0/ny.jpg',
//     '/textures/environmentMaps/0/pz.jpg',
//     '/textures/environmentMaps/0/nz.jpg',
// ])


// LIGHTS
const pointLight = new THREE.PointLight('#FFFFFF', 2, 0)
const pointLightHelper = new THREE.PointLightHelper(pointLight, .5)
scene.add(pointLight, pointLightHelper)

pointLight.position.set(0,2,0)

// CAMERAS
// Criar Camera
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}
const camera = new THREE.PerspectiveCamera(95, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 15
camera.position.z = -15
scene.add(camera)
camera.lookAt(EarthMesh)


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

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
 
/**
 * COMPONENTS
 * -----------
 * Earth
*/
EarthMesh.position.y = 1
EarthMesh.position.z = 3
EarthMesh.rotation.x = -.2
EarthMaterial.map = EarthTexture

// EarthMoon
EarthMoonMaterial.map = EarthMoonTexture
// Floor
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(50, 50),
  new THREE.MeshStandardMaterial({
      map: galaxyFloorTexture
  })
)

floor.rotation.x = - Math.PI * 0.5
floor.position.y = -5
scene.add(EarthMesh, EarthMoonMesh, floor)


// RENDERER
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor('#000000')

console.log(controls)

renderer.render(scene, camera)

// Animations
const clock = new THREE.Clock()
EarthMoonMesh.position.y = 1
const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    
    EarthMesh.rotation.y = elapsedTime * .5
    EarthMesh.position.x = Math.sin(elapsedTime * .1) * 20
    EarthMesh.position.z = Math.cos(elapsedTime * .1) * 20
    EarthMoonMesh.position.x = EarthMesh.position.x + (Math.sin(elapsedTime * .8) * 5)
    EarthMoonMesh.position.z = EarthMesh.position.z + (Math.cos(elapsedTime * .8) * 5)
    EarthMoonMesh.position.y = EarthMesh.position.y + (Math.cos(elapsedTime * .8) * 2)
    EarthMoonMesh.rotation.y = elapsedTime * - .8

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()