/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: grafi (https://sketchfab.com/zdenkoroman)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/sprandi-shoe-sneakers-3d-scan-12b3e16baabc4d5783700f09efb88cee
title: Sprandi Shoe Sneakers 3D scan
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Shoe2(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/shoe-draco-2.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, -0.25, -0.03]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.mesh_0.geometry} material={materials.material_0} scale={[5,5,5]}/>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/shoe-draco-2.glb')
