import * as THREE from 'three'

export const EarthMaterial = new THREE.MeshStandardMaterial()

export const EarthMesh = new THREE.Mesh(
    new THREE.SphereGeometry(3, 25, 25),
    EarthMaterial
)

export const EarthMoonMaterial = new THREE.MeshStandardMaterial()

export const EarthMoonMesh = new THREE.Mesh(
    new THREE.SphereGeometry(1, 25, 25),
    EarthMoonMaterial
)