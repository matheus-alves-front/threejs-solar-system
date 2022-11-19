import * as THREE from 'three'
import {
    VenusTexture
  } from '../textures/Textures'

export const VenusMaterial = new THREE.MeshStandardMaterial()
export const VenusMesh = new THREE.Mesh(
    new THREE.SphereGeometry(2, 25, 25),
    VenusMaterial
)
VenusMesh.position.y = 1
VenusMesh.position.z = 3
VenusMesh.rotation.x = -.2
VenusMaterial.map = VenusTexture

// Animation 
const clock = new THREE.Clock()
export const animationVenus = () =>
{
    const elapsedTime = clock.getElapsedTime()
    
    // 
    VenusMesh.rotation.y = elapsedTime
    VenusMesh.position.x = Math.sin(elapsedTime * .3) * 40
    VenusMesh.position.z = Math.cos(elapsedTime * .3) * 40

    // Call animation again on the next frame
    window.requestAnimationFrame(animationVenus)
}