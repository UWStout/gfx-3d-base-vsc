// Disable type-checking as it reports incorrect errors
// @ts-nocheck

// Parent class
import MeshFactory from './MeshFactory'

// Base geometry factories
// TODO: Import factory classes as needed
import CubeFactory from './CubeFactory'

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

    // TODO: Create a hierarchical object for a humanoid character
    // - Each part of your humanoid should be a primitive object made with
    //   one of the MeshFactory classes (cubes, cylinders, and spheres)
    // - Set appropriate NAMES and TRANSFORMATIONS for each mesh
    // - Use the add() function of a mesh to create a hierarchy
    // - Do NOT attach all parts to a single root, you must build an
    //   intuitive skeletal hierarchy
    // - You MUST set appropriate pivot points for all joints
    //   > For full credit, arms and legs must move correctly when rotated

    // NOTE: There is a special function to help isolate the effects of scaling
    // - It is often the case that you don't want scale to be inherited
    // - If so, use MeshFactory.isolateScale() to do just that.
    // EXAMPLE: Given a mesh 'leftArm' with a scale that you do not want to affect the
    // left hand (a child of leftArm), do the following:
    //   leftArm = MeshFactory.isolateScale(leftArm)

    // TODO: Here is an example of how this works.
    //       BE SURE TO REMOVE THIS BEFORE YOU SUBMIT YOUR CODE!
    alert('WARNING: This is an example object. You should replace it with your ' +
      'own code and remove this warning and the example code.')

    // Build and transform four cube objects
    let cubeMaker = new CubeFactory()
    let cube1 = cubeMaker.generateMesh()
    cube1.name = 'Cube 1'
    cube1.transform.setScale(0.8, 0.8, 0.2)
    cube1.transform.setPosition(-1.1, -1.1, 0.0)

    let cube2 = cubeMaker.generateMesh()
    cube2.name = 'Cube 2'
    cube2.transform.setScale(0.8, 0.8, 0.2)
    cube2.transform.setPosition(1.1, -1.1, 0.0)

    let cube3 = cubeMaker.generateMesh()
    cube3.name = 'Cube 3'
    cube3.transform.setScale(0.8, 0.8, 0.2)
    cube3.transform.setPosition(1.1, 1.1, 0.0)

    let cube4 = cubeMaker.generateMesh()
    cube4.name = 'Cube 4'
    cube4.transform.setScale(0.8, 0.8, 0.2)
    cube4.transform.setPosition(-1.1, 1.1, 0.0)

    // Set four cubes as children of an empty root object
    root.name = 'Quad Window'
    root.transform.setScale(0.5, 0.5, 0.5)
    root.add(cube1)
    root.add(cube2)
    root.add(cube3)
    root.add(cube4)
    // TODO: REMOVE EXAMPLE CODE UP TO HERE BEFORE SUBMITTING

    // Return the completed mesh
    return root
  }
}

// Export the HumanoidFactory class for use in other modules
export default HumanoidFactory
