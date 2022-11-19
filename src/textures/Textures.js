import * as THREE from 'three'

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
export const GalaxyFloorTexture = textureLoader.load('/textures/space-galaxy-background.jpg')
export const EarthTexture = textureLoader.load('/textures/fullmapb.jpeg')
export const EarthMoonTexture = textureLoader.load('/textures/moonmap1k.jpg')
export const SunTexture = textureLoader.load('/textures/Sun-texture.jpg')

// Textures Configurations
GalaxyFloorTexture.repeat.set(2,2)
GalaxyFloorTexture.wrapS = THREE.RepeatWrapping
GalaxyFloorTexture.wrapT = THREE.RepeatWrapping
GalaxyFloorTexture.minFilter = THREE.NearestMipMapNearestFilter
GalaxyFloorTexture.magFilter = THREE.NearestFilter 
GalaxyFloorTexture.generateMipmaps = false

EarthTexture.wrapS = THREE.RepeatWrapping
EarthTexture.wrapT = THREE.RepeatWrapping
EarthTexture.minFilter = THREE.NearestMipMapNearestFilter
EarthTexture.magFilter = THREE.NearestFilter 
EarthTexture.generateMipmaps = false

SunTexture.wrapS = THREE.RepeatWrapping
SunTexture.wrapT = THREE.RepeatWrapping
SunTexture.minFilter = THREE.NearestMipMapNearestFilter
SunTexture.magFilter = THREE.NearestFilter 
SunTexture.generateMipmaps = false
 