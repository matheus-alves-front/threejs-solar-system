import * as THREE from 'three'

/**
* Particles
*/
// Geometry
const particlesGeometry = new THREE.BufferGeometry()
const count = 50000
const positions = new Float32Array(count * 3)
const colors = new Float32Array(count * 3)
for (let i = 0; i < count; i++) {
   positions[i] = (Math.random() - .5) * 200
   colors[i] = Math.random()
}
particlesGeometry.setAttribute(
   'position',
   new THREE.BufferAttribute(positions, 3)
)
particlesGeometry.setAttribute(
   'color',
   new THREE.BufferAttribute(colors, 3)
)
// Material
const particlesMaterial = new THREE.PointsMaterial()
particlesMaterial.vertexColors = true // pras cores randomizadas
particlesMaterial.size = .1
particlesMaterial.sizeAttenuation = true
particlesMaterial.transparent = true
particlesMaterial.depthWrite = false
// Points
export const ParticlesStars = new THREE.Points(particlesGeometry, particlesMaterial)
