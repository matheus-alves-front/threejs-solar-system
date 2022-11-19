import * as THREE from 'three'
import {
    UranusTexture,
    EarthMoonTexture
  } from '../textures/Textures'

export const UranusMaterial = new THREE.MeshStandardMaterial()
export const UranusMesh = new THREE.Mesh(
    new THREE.SphereGeometry(5, 25, 25),
    UranusMaterial
)
UranusMesh.position.y = 1
UranusMesh.position.z = 3
UranusMesh.rotation.x = -.2
UranusMaterial.map = UranusTexture

export const UranusMoonMaterial = new THREE.MeshStandardMaterial()
UranusMoonMaterial.map = EarthMoonTexture

export const UranusMoon1Mesh = new THREE.Mesh(
    new THREE.SphereGeometry(2, 25, 25),
    UranusMoonMaterial
)
export const UranusMoon2Mesh = new THREE.Mesh(
    new THREE.SphereGeometry(1, 25, 25),
    UranusMoonMaterial
)

// Animation 
const clock = new THREE.Clock()
export const animationUranus = () =>
{
    const elapsedTime = clock.getElapsedTime()
    
    // 
    UranusMesh.rotation.y = elapsedTime * .5
    UranusMesh.position.x = Math.sin(elapsedTime * .08) * 200
    UranusMesh.position.z = Math.cos(elapsedTime * .08) * 200

    UranusMoon1Mesh.position.x = UranusMesh.position.x + (Math.sin(elapsedTime * .8) * 12)
    UranusMoon1Mesh.position.z = UranusMesh.position.z + (Math.cos(elapsedTime * .8) * 12)
    UranusMoon1Mesh.position.y = UranusMesh.position.y + (Math.cos(elapsedTime * .8) * 5)
    UranusMoon1Mesh.rotation.y = elapsedTime * - .8

    UranusMoon2Mesh.position.x = UranusMesh.position.x + (- Math.sin(elapsedTime * .7) * 8)
    UranusMoon2Mesh.position.z = UranusMesh.position.z + (- Math.cos(elapsedTime * .7) * 8)
    UranusMoon2Mesh.position.y = UranusMesh.position.y + (- Math.cos(elapsedTime * .7) * 10)
    UranusMoon2Mesh.rotation.y = elapsedTime * - .8

    // Call animation again on the next frame
    window.requestAnimationFrame(animationUranus)
}
