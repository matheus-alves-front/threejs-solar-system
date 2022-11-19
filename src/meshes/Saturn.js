import * as THREE from 'three'
import {
    SaturnTexture,
    SaturnRingTexture
  } from '../textures/Textures'

export const SaturnMaterial = new THREE.MeshStandardMaterial()
export const SaturnMesh = new THREE.Mesh(
    new THREE.SphereGeometry(5, 25, 25),
    SaturnMaterial
)
SaturnMesh.position.z = 0
SaturnMesh.rotation.x = -.2
SaturnMaterial.map = SaturnTexture

export const SaturnRingMaterial = new THREE.MeshStandardMaterial()
SaturnRingMaterial.side = THREE.DoubleSide
SaturnRingMaterial.map = SaturnRingTexture
SaturnRingMaterial.alphaMap = SaturnRingTexture
SaturnRingMaterial.transparent = true

export const SaturnRingMesh = new THREE.Mesh(
    new THREE.RingGeometry(6, 10, 30),
    SaturnRingMaterial
)
SaturnRingMesh.position.y = SaturnMesh.position.y
SaturnRingMesh.rotation.x = Math.PI / 2
SaturnRingMesh.rotation.y = Math.PI / 4

// Animation 
const clock = new THREE.Clock()
export const animationSaturn = () =>
{
    const elapsedTime = clock.getElapsedTime()
    
    
    SaturnMesh.rotation.y = elapsedTime * .5
    SaturnMesh.position.x = Math.sin(elapsedTime * .1) * 160
    SaturnMesh.position.z = Math.cos(elapsedTime * .1) * 160
    SaturnRingMesh.position.x = SaturnMesh.position.x
    SaturnRingMesh.position.y = SaturnMesh.position.y
    SaturnRingMesh.position.z = SaturnMesh.position.z

    SaturnRingMesh.rotation.z = elapsedTime
    // Call animation again on the next frame
    window.requestAnimationFrame(animationSaturn)
}
