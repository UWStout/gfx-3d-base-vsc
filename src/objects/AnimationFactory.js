// Disable type-checking as it reports incorrect errors
// @ts-nocheck

// Will use the humanoid Factory
import HumanoidFactory from './HumanoidFactory'

/**
 * A class to animate the humanoid mesh.
 **/
class AnimationFactory {
  /**
   * Create a new humanoid factory object.
   **/
  constructor () {
    this._humanoidMaker = new HumanoidFactory()
  }

  /**
   * Extract references to nodes in the hierarchy that contain a particular sub-name
   * in their name parameter.
   *
   * @param {AnimatableMesh} humanoid The hierarchical mesh to Traverse
   * @param {string} subName The name to match and extract from the hierarchy
   * @return {Array} An array of references to meshes in the hierarchy that contain
   *    the specified subName in their name parameter.
   **/
  extractNamedNodes (humanoid, subName) {
    // An array to hold the extracted node
    let nodes = []

    // Traverse the entire hierarchy
    humanoid.traverse((node) => {
      // If the name contains the given sub-name, then grab it
      // Note: we ignore ones with 'Geom' because those are from isolateScale
      if (node.name.includes(subName) && !node.name.includes('Geom')) {
        nodes.push(node)
      }
    })

    // Return an array of the extracted nodes
    return nodes
  }

  generateWalk () {
    // Create a new humanoid object using your factory
    let humanoid = this._humanoidMaker.generateMesh()
    humanoid.name = `Walking ${humanoid.name}`

    // TODO: Make it walk. Below is an example of how to code this
    // Keep in mind, your y and z values may need to be different.

    // humanoid.transform.setPosition(0, 0.2, 5)
    // humanoid.saveKeyframe(0)
    // humanoid.transform.setPosition(0, 0.2, -5)
    // humanoid.saveKeyframe(120)

    // Return the animated humanoid
    return humanoid
  }

  generateOther () {
    // Create a new humanoid object using your factory
    let humanoid = this._humanoidMaker.generateMesh()
    humanoid.name = `Walking ${humanoid.name}`

    // TODO: Make it do something else!

    // Return the animated robot
    return humanoid
  }
}

// Export the HumanoidFactory class for use in other modules
export default AnimationFactory
