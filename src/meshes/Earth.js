import * as THREE from 'three'
import {
    GalaxyFloorTexture,
    EarthTexture,
    EarthMoonTexture
  } from '../textures/Textures'

export const EarthMaterial = new THREE.MeshStandardMaterial()
export const EarthMesh = new THREE.Mesh(
    new THREE.SphereGeometry(3, 25, 25),
    EarthMaterial
)
EarthMesh.position.y = 1
EarthMesh.position.z = 3
EarthMesh.rotation.x = -.2
EarthMaterial.map = EarthTexture

export const EarthMoonMaterial = new THREE.MeshStandardMaterial()
export const EarthMoonMesh = new THREE.Mesh(
    new THREE.SphereGeometry(1, 25, 25),
    EarthMoonMaterial
)
EarthMoonMaterial.map = EarthMoonTexture

// Animation 
const clock = new THREE.Clock()
export const animationEarth = () =>
{
    const elapsedTime = clock.getElapsedTime()
    
    // 
    EarthMesh.rotation.y = elapsedTime * .5
    EarthMesh.position.x = Math.sin(elapsedTime * .1) * 50
    EarthMesh.position.z = Math.cos(elapsedTime * .1) * 50

    EarthMoonMesh.position.x = EarthMesh.position.x + (Math.sin(elapsedTime * .8) * 5)
    EarthMoonMesh.position.z = EarthMesh.position.z + (Math.cos(elapsedTime * .8) * 5)
    EarthMoonMesh.position.y = EarthMesh.position.y + (Math.cos(elapsedTime * .8) * 2)
    EarthMoonMesh.rotation.y = elapsedTime * - .8

    // Call animation again on the next frame
    window.requestAnimationFrame(animationEarth)
}
