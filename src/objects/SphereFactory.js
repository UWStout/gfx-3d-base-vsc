// Disable type-checking as it reports incorrect errors
// @ts-nocheck

// Import the three.js library and components needed
import * as THREE from 'three'

// Parent class
import MeshFactory from './MeshFactory'

/**
 * A class to build sphere meshes for use with Three.js
 **/
class SphereFactory extends MeshFactory {
  /**
   * Create a new sphere factory object that will use the given subdivision
   * parameters to generate unit spheres centered at (0, 0, 0).
   * @param {number} slices The number of subdivisions around the equator.
   * @param {number} stacks The number of subdivisions between the poles.
   **/
  constructor (slices, stacks) {
    super()
    this._count++
    this._name = `Sphere ${this._count}`
    this._slices = slices || 36
    this._stacks = stacks || 18
  }

  /**
   * Set the subdivisions around the equator of the sphere.
   * @param {number} newVal The number of subdivisions around the equator.
   **/
  set slices (newVal) {
    if (typeof newVal === 'number') {
      this._slices = newVal
    }
  }

  /**
   * Set the subdivisions between the poles of the sphere.
   * @param {number} newVal The number of subdivisions between the poles.
   **/
  set stacks (newVal) {
    if (typeof newVal === 'number') {
      this._stacks = newVal
    }
  }

  /**
   * Build and return a THREE.Geometry() object representing a sphere.
   * @override
   **/
  makeObjectGeometry () {
    // A fresh, empty Geometry object that will hold the mesh geometry
    let sphereGeom = new THREE.Geometry()

    // TODO: Copy in your code from project 3
    // Note: if you do not use spheres in your humanoid you can skip this step

    // Return finished geometry
    return sphereGeom
  }
}

// Export the SphereFactory class for use in other modules
export default SphereFactory
