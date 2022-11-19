import * as THREE from 'three'

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
// SUN
export const SunTexture = textureLoader.load('/textures/Sun-texture.jpg')
SunTexture.wrapS = THREE.RepeatWrapping
SunTexture.wrapT = THREE.RepeatWrapping
SunTexture.minFilter = THREE.NearestMipMapNearestFilter
SunTexture.magFilter = THREE.NearestFilter 
SunTexture.generateMipmaps = false

// Mercury
export const MercuryTexture = textureLoader.load('/textures/Mercury-texture.jpg')
MercuryTexture.wrapS = THREE.RepeatWrapping
MercuryTexture.wrapT = THREE.RepeatWrapping
MercuryTexture.minFilter = THREE.NearestMipMapNearestFilter
MercuryTexture.magFilter = THREE.NearestFilter 
MercuryTexture.generateMipmaps = false

// Venus
export const VenusTexture = textureLoader.load('/textures/Venus-texture.jpg')
VenusTexture.wrapS = THREE.RepeatWrapping
VenusTexture.wrapT = THREE.RepeatWrapping
VenusTexture.minFilter = THREE.NearestMipMapNearestFilter
VenusTexture.magFilter = THREE.NearestFilter 
VenusTexture.generateMipmaps = false

// Earth
export const EarthTexture = textureLoader.load('/textures/Earth-texture.jpeg')
EarthTexture.wrapS = THREE.RepeatWrapping
EarthTexture.wrapT = THREE.RepeatWrapping
EarthTexture.minFilter = THREE.NearestMipMapNearestFilter
EarthTexture.magFilter = THREE.NearestFilter 
EarthTexture.generateMipmaps = false

export const EarthAlphaTexture = textureLoader.load('/textures/Earth-new-texture.jpg')
EarthAlphaTexture.wrapS = THREE.RepeatWrapping
EarthAlphaTexture.wrapT = THREE.RepeatWrapping
EarthAlphaTexture.minFilter = THREE.NearestMipMapNearestFilter
EarthAlphaTexture.magFilter = THREE.NearestFilter 
EarthAlphaTexture.generateMipmaps = false

export const EarthMoonTexture = textureLoader.load('/textures/Earth-moon-texture.jpg')
EarthMoonTexture.wrapS = THREE.RepeatWrapping
EarthMoonTexture.wrapT = THREE.RepeatWrapping
EarthMoonTexture.minFilter = THREE.NearestMipMapNearestFilter
EarthMoonTexture.magFilter = THREE.NearestFilter 
EarthMoonTexture.generateMipmaps = false

// Mars
export const MarsTexture = textureLoader.load('/textures/Mars-texture.jpg')
MarsTexture.wrapS = THREE.RepeatWrapping
MarsTexture.wrapT = THREE.RepeatWrapping
MarsTexture.minFilter = THREE.NearestMipMapNearestFilter
MarsTexture.magFilter = THREE.NearestFilter 
MarsTexture.generateMipmaps = false

// Jupiter
export const JupiterTexture = textureLoader.load('/textures/Jupiter-texture.jpg')
JupiterTexture.wrapS = THREE.RepeatWrapping
JupiterTexture.wrapT = THREE.RepeatWrapping
JupiterTexture.minFilter = THREE.NearestMipMapNearestFilter
JupiterTexture.magFilter = THREE.NearestFilter 
JupiterTexture.generateMipmaps = false

// Saturn
export const SaturnTexture = textureLoader.load('/textures/Saturn-texture.jpg')
SaturnTexture.wrapS = THREE.RepeatWrapping
SaturnTexture.wrapT = THREE.RepeatWrapping
SaturnTexture.minFilter = THREE.NearestMipMapNearestFilter
SaturnTexture.magFilter = THREE.NearestFilter 
SaturnTexture.generateMipmaps = false

export const SaturnRingTexture = textureLoader.load('/textures/Saturn-ring-texture2.jpg')
SaturnRingTexture.repeat.set(3,2)
SaturnRingTexture.offset.x = 1
SaturnRingTexture.offset.y = 1
SaturnRingTexture.wrapS = THREE.RepeatWrapping
SaturnRingTexture.wrapT = THREE.RepeatWrapping
SaturnRingTexture.minFilter = THREE.NearestMipMapNearestFilter
SaturnRingTexture.magFilter = THREE.NearestFilter 
SaturnRingTexture.generateMipmaps = false

// Uranus
export const UranusTexture = textureLoader.load('/textures/Uranus-texture.jpg')
UranusTexture.wrapS = THREE.RepeatWrapping
UranusTexture.wrapT = THREE.RepeatWrapping
UranusTexture.minFilter = THREE.NearestMipMapNearestFilter
UranusTexture.magFilter = THREE.NearestFilter 
UranusTexture.generateMipmaps = false

export const NeptuneTexture = textureLoader.load('/textures/Neptune-texture.jpg')
NeptuneTexture.wrapS = THREE.RepeatWrapping
NeptuneTexture.wrapT = THREE.RepeatWrapping
NeptuneTexture.minFilter = THREE.NearestMipMapNearestFilter
NeptuneTexture.magFilter = THREE.NearestFilter 
NeptuneTexture.generateMipmaps = false
// Textures Configurations
 

 
