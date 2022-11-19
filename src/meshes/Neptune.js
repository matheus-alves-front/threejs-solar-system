import * as THREE from 'three'
import {
    NeptuneTexture,
    EarthMoonTexture
  } from '../textures/Textures'

export const NeptuneMaterial = new THREE.MeshStandardMaterial()
export const NeptuneMesh = new THREE.Mesh(
    new THREE.SphereGeometry(5, 25, 25),
    NeptuneMaterial
)
NeptuneMesh.position.y = 1
NeptuneMesh.position.z = 3
NeptuneMesh.rotation.x = -.2
NeptuneMaterial.map = NeptuneTexture

export const NeptuneMoonMaterial = new THREE.MeshStandardMaterial()
NeptuneMoonMaterial.map = EarthMoonTexture

export const NeptuneMoon1Mesh = new THREE.Mesh(
    new THREE.SphereGeometry(2, 25, 25),
    NeptuneMoonMaterial
)
export const NeptuneMoon2Mesh = new THREE.Mesh(
    new THREE.SphereGeometry(1, 25, 25),
    NeptuneMoonMaterial
)

// Animation 
const clock = new THREE.Clock()
export const animationNeptune = () =>
{
    const elapsedTime = clock.getElapsedTime()
    
    // 
    NeptuneMesh.rotation.y = elapsedTime * .5
    NeptuneMesh.position.x = Math.sin(elapsedTime * .06) * 240
    NeptuneMesh.position.z = Math.cos(elapsedTime * .06) * 240

    NeptuneMoon1Mesh.position.x = NeptuneMesh.position.x + (Math.sin(elapsedTime * .8) * 12)
    NeptuneMoon1Mesh.position.z = NeptuneMesh.position.z + (Math.cos(elapsedTime * .8) * 12)
    NeptuneMoon1Mesh.position.y = NeptuneMesh.position.y + (Math.cos(elapsedTime * .8) * 5)
    NeptuneMoon1Mesh.rotation.y = elapsedTime * - .8

    NeptuneMoon2Mesh.position.x = NeptuneMesh.position.x + (- Math.sin(elapsedTime * .7) * 8)
    NeptuneMoon2Mesh.position.z = NeptuneMesh.position.z + (- Math.cos(elapsedTime * .7) * 8)
    NeptuneMoon2Mesh.position.y = NeptuneMesh.position.y + (- Math.cos(elapsedTime * .7) * 10)
    NeptuneMoon2Mesh.rotation.y = elapsedTime * - .8

    // Call animation again on the next frame
    window.requestAnimationFrame(animationNeptune)
}
