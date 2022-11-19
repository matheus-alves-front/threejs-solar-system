import * as THREE from 'three'
import {
    JupiterTexture,
    EarthMoonTexture
  } from '../textures/Textures'

export const JupiterMaterial = new THREE.MeshStandardMaterial()
export const JupiterMesh = new THREE.Mesh(
    new THREE.SphereGeometry(5, 25, 25),
    JupiterMaterial
)
JupiterMesh.position.y = 1
JupiterMesh.position.z = 3
JupiterMesh.rotation.x = -.2
JupiterMaterial.map = JupiterTexture

export const JupiterMoonMaterial = new THREE.MeshStandardMaterial()
JupiterMoonMaterial.map = EarthMoonTexture

export const JupiterMoon1Mesh = new THREE.Mesh(
    new THREE.SphereGeometry(2, 25, 25),
    JupiterMoonMaterial
)
export const JupiterMoon2Mesh = new THREE.Mesh(
    new THREE.SphereGeometry(1, 25, 25),
    JupiterMoonMaterial
)

// Animation 
const clock = new THREE.Clock()
export const animationJupiter = () =>
{
    const elapsedTime = clock.getElapsedTime()
    
    // 
    JupiterMesh.rotation.y = elapsedTime * .5
    JupiterMesh.position.x = Math.sin(elapsedTime * .12) * 120
    JupiterMesh.position.z = Math.cos(elapsedTime * .12) * 120

    JupiterMoon1Mesh.position.x = JupiterMesh.position.x + (Math.sin(elapsedTime * .8) * 12)
    JupiterMoon1Mesh.position.z = JupiterMesh.position.z + (Math.cos(elapsedTime * .8) * 12)
    JupiterMoon1Mesh.position.y = JupiterMesh.position.y + (Math.cos(elapsedTime * .8) * 5)
    JupiterMoon1Mesh.rotation.y = elapsedTime * - .8

    JupiterMoon2Mesh.position.x = JupiterMesh.position.x + (- Math.sin(elapsedTime * .7) * 8)
    JupiterMoon2Mesh.position.z = JupiterMesh.position.z + (- Math.cos(elapsedTime * .7) * 8)
    JupiterMoon2Mesh.position.y = JupiterMesh.position.y + (- Math.cos(elapsedTime * .7) * 10)
    JupiterMoon2Mesh.rotation.y = elapsedTime * - .8

    // Call animation again on the next frame
    window.requestAnimationFrame(animationJupiter)
}
