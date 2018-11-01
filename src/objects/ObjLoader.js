// Disable type-checking as it reports incorrect errors
// @ts-nocheck

// Import the three.js library and components needed
import * as THREE from 'three'
import 'three/examples/js/loaders/OBJLoader'
import '../helpers/localOBJLoader'

// Used to wrap the resulting geometry for use in a MeshWidget
import MeshFactory from './MeshFactory'
import Transform from '../helpers/Transform'

// A traditional JavaScript object with static functions used
// to load and parse an OBJ file from the local computer and
// convert it to a format for use by our MeshWidget.
let ObjLoader = {
  // Start the loading of a local obj file
  // NOTE: This requires the use of the 'localOBJLoader' in addition to
  // the usual OBJLoader that is part of Three.js
  loadAndAddOBJ: (fileBlob) => {
    console.log('Loading OBJ Model ...')
    let loader = new THREE.OBJLoader()
    loader.load2(fileBlob, ObjLoader.parseOBJResults)
  },

  // Parse the resulting obj Mesh loaded from the local computer
  parseOBJResults: (objHierarchy) => {
    // Extract all the geometry groups
    let mergedBBox = new THREE.Box3()
    mergedBBox.min.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
    mergedBBox.max.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE)

    // Rebuild geometry in proper format
    let geometryRoot = ObjLoader.convertObjHierarchy(objHierarchy, mergedBBox)
    geometryRoot.frustumCulled = false

    // Compute scale and center
    let boundingSphere = new THREE.Sphere()
    boundingSphere = mergedBBox.getBoundingSphere(boundingSphere)
    let scale = 1.1 / boundingSphere.radius
    let center = boundingSphere.center

    // Setup for use in MatrixWidget
    geometryRoot.transform = new Transform(geometryRoot)
    geometryRoot.matrixAutoUpdate = false

    // Normalize geometry
    geometryRoot.transform.setPosition(-center.x, -center.y, -center.z)
    geometryRoot.transform.setScale(scale, scale, scale)

    // Pass geometry to the 'ready' event callback
    ObjLoader.geometryReady(geometryRoot)
  },

  // Convert the hierarchy of the returned mesh into the format
  // expected by the MeshWidget object. Also computes a bounding
  // box for the entire hierarchy and stores it in mergedBBox.
  convertObjHierarchy: (objHierarchy, mergedBBox) => {
    // Build an empty Object3D to hold the new hierarchy
    let meshHierarchy = new THREE.Object3D()

    // Process all the children
    objHierarchy.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        // Convert child to standard 'Geometry'
        let newChild = MeshFactory.wrapGeometryWithMesh(
          new THREE.Geometry().fromBufferGeometry(child.geometry)
        )

        // Post-process the Geometry
        newChild.geometry.mergeVertices()
        newChild.geometry.computeBoundingBox()
        mergedBBox.union(newChild.geometry.boundingBox)

        // Add as child
        meshHierarchy.add(newChild)
      }
    })

    // Return the converted hierarchy
    return meshHierarchy
  },

  // Find the length of the diagonal of the bounding box
  findPrincipleAxisLength: (bbox) => {
    let lengths = [
      bbox.max.x - bbox.min.x,
      bbox.max.y - bbox.min.y,
      bbox.max.z - bbox.min.z
    ]

    return Math.sqrt(lengths[0] * lengths[0] +
      lengths[1] * lengths[1] + lengths[2] * lengths[2])
  },

  // Check if the 'onGeometryReady' function is set and call it if so.
  // NOTE: This is usally set in main.js or interface.js
  geometryReady: (geometry) => {
    if (ObjLoader.onGeometryReady) {
      // Pass to interface
      ObjLoader.onGeometryReady(geometry)
    } else {
      console.error('No ObjLoader geometry ready event handler')
    }
  }
}

// Export the ObjLoader object for use in other modules
export default ObjLoader
