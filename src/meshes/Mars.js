import * as THREE from 'three'
import {
    MarsTexture,
    EarthMoonTexture
  } from '../textures/Textures'

export const MarsMaterial = new THREE.MeshStandardMaterial()
export const MarsMesh = new THREE.Mesh(
    new THREE.SphereGeometry(2, 25, 25),
    MarsMaterial
)
MarsMesh.position.y = 1
MarsMesh.position.z = 3
MarsMesh.rotation.x = -.2
MarsMaterial.map = MarsTexture

export const MarsMoonMaterial = new THREE.MeshStandardMaterial()
MarsMoonMaterial.map = EarthMoonTexture

export const MarsMoon1Mesh = new THREE.Mesh(
    new THREE.SphereGeometry(1, 25, 25),
    MarsMoonMaterial
)
export const MarsMoon2Mesh = new THREE.Mesh(
    new THREE.SphereGeometry(.5, 25, 25),
    MarsMoonMaterial
)

// Animation 
const clock = new THREE.Clock()
export const animationMars = () =>
{
    const elapsedTime = clock.getElapsedTime()
    
    // 
    MarsMesh.rotation.y = elapsedTime * .5
    MarsMesh.position.x = Math.sin(elapsedTime * .15) * 80
    MarsMesh.position.z = Math.cos(elapsedTime * .15) * 80

    MarsMoon1Mesh.position.x = MarsMesh.position.x + (Math.sin(elapsedTime * .8) * 5)
    MarsMoon1Mesh.position.z = MarsMesh.position.z + (Math.cos(elapsedTime * .8) * 5)
    MarsMoon1Mesh.position.y = MarsMesh.position.y + (Math.cos(elapsedTime * .8) * 2)
    MarsMoon1Mesh.rotation.y = elapsedTime * - .8

    MarsMoon2Mesh.position.x = MarsMesh.position.x + (- Math.sin(elapsedTime * .7) * 3)
    MarsMoon2Mesh.position.z = MarsMesh.position.z + (- Math.cos(elapsedTime * .7) * 3)
    MarsMoon2Mesh.position.y = MarsMesh.position.y + (- Math.cos(elapsedTime * .7) * 5)
    MarsMoon2Mesh.rotation.y = elapsedTime * - .8

    // Call animation again on the next frame
    window.requestAnimationFrame(animationMars)
}
