import * as THREE from 'three'

// LIGHTS
export const pointLight = new THREE.PointLight('#FFFFFF', 2, 0)
export const pointLightHelper = new THREE.PointLightHelper(pointLight, .5)

export const ambientLight = new THREE.AmbientLight('#FFFFFF', .1)

pointLight.position.set(0,2,0)
