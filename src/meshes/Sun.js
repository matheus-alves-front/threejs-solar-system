import * as THREE from 'three'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper'
import {
    SunTexture
} from '../textures/Textures'

export const SunMaterial = new THREE.MeshStandardMaterial({color: 'yellow'})
export const SunMesh = new THREE.Mesh(
    new THREE.SphereGeometry(10, 35, 35),
    SunMaterial
)
SunMesh.position.z = 0
SunMesh.rotation.x = -.2
SunMaterial.map = SunTexture

// Sun Light
// Sun Light
export const SunRectAreaLight1 = new THREE.RectAreaLight('#FFFFFF', 2, 25, 25)
export const SunRectAreaLight2 = new THREE.RectAreaLight('#FFFFFF', 2, 25, 25)
export const rectAreaLightHelper = new RectAreaLightHelper(SunRectAreaLight2)
// SunRectAreaLight1.position.x = SunMesh.position.x + 5
SunRectAreaLight1.position.z = SunMesh.position.z + 10 
SunRectAreaLight2.position.z = SunMesh.position.z - 10
SunRectAreaLight2.rotation.y = Math.PI 