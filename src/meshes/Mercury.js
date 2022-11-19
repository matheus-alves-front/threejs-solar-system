import * as THREE from 'three'
import {
    MercuryTexture
  } from '../textures/Textures'

export const MercuryMaterial = new THREE.MeshStandardMaterial()
export const MercuryMesh = new THREE.Mesh(
    new THREE.SphereGeometry(1.5, 25, 25),
    MercuryMaterial
)
MercuryMesh.position.y = 1
MercuryMesh.position.z = 3
MercuryMesh.rotation.x = -.2
MercuryMaterial.map = MercuryTexture

// Animation 
const clock = new THREE.Clock()
export const animationMercury = () =>
{
    const elapsedTime = clock.getElapsedTime()
    
    // 
    MercuryMesh.rotation.y = elapsedTime
    MercuryMesh.position.x = Math.sin(elapsedTime * .5) * 20
    MercuryMesh.position.z = Math.cos(elapsedTime * .5) * 20

    // Call animation again on the next frame
    window.requestAnimationFrame(animationMercury)
}