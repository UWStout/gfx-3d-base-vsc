// Disable type-checking as it reports incorrect errors
// @ts-nocheck

// Parent class
import MeshFactory from './MeshFactory'

// Base geometry factories
// TODO: Import factory classes as needed to make your humanoid
// Note: make sure you complete the code in those files as well!!

/**
 * A class to build a representation of robitic skeletal bipedal character
 * for use with Three.js.  Do not call makeObjectGeometry() on this class
 * as it is left abstract. Use generateMesh() instead.
 **/
class HumanoidFactory extends MeshFactory {
  /**
   * Create a new humanoid factory object.
   **/
  constructor () {
    super()
    this._name = 'Humanoid'
  }

  /**
   * Build and return a THREE.Mesh() object representing a bipedal robot.
   * @override
   * @return {THREE.Mesh} A decorated mesh structure for use with MeshWidget
   **/
  generateMesh () {
    // Empty root object for the entire humanoid character
    let root = MeshFactory.generateEmptyNode('Humanoid')

    // TODO: Copy in your code from project 3
    // Feel free to change your humanoid from project 3 as long at is still has
    // the minimal skeletal structure required for a walk.

    // Return the completed mesh
    return root
  }
}

// Export the HumanoidFactory class for use in other modules
export default HumanoidFactory
