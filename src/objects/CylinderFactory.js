// Disable type-checking as it reports incorrect errors
// @ts-nocheck

// Import the three.js library and components needed
import * as THREE from 'three'

// Parent class
import MeshFactory from './MeshFactory'

/**
 * A class to build cylinder meshes for use with Three.js
 **/
class CylinderFactory extends MeshFactory {
  /**
   * Create a new cylinder Factory object that will use the given subdivision
   * parameter to generate unit cylinders centered at (0, 0, 0) aligned with Y.
   * @param {number} slices The number of subdivisions around the central axis.
   **/
  constructor (slices) {
    super()
    this._count++
    this._name = `Cylinder ${this._count}`
    this._slices = slices || 18
  }

  /**
   * Set the subdivisions around the outside of the cylinder.
   * @param {number} newVal The number of subdivisions around the central axis.
   **/
  set slices (newVal) {
    if (typeof newVal === 'number') {
      this._slices = newVal
    }
  }

  /**
   * Build and return a THREE.Geometry() object representing a cylinder.
   * @override
   * @return {THREE.Geometry} The raw geometry structure (not wrapped with Mesh)
   **/
  makeObjectGeometry () {
    // A fresh, empty Geometry object that will hold the mesh geometry
    let cylGeom = new THREE.Geometry()

    // TODO: Copy in your code from project 3
    // Note: if you do not use cylinders in your humanoid you can skip this step

    // Return finished geometry
    return cylGeom
  }
}

// Export the CylinderFactory class for use in other modules
export default CylinderFactory
