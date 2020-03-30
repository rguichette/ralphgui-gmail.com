import React, { Component } from 'react'
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


export default class TestBreak extends Component {
    static defaultProps = {
        width: 900,
        height: 900
    }

    constructor(props){
        super(props)

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, this.props.width/this.props.height, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer();
        this.controls = new OrbitControls( this.camera, this.renderer.domElement );

        this.handleResize = this.handleResize.bind(this)

   




    }



componentDidMount(){
console.log("props",this.props);

    this.renderer.setSize( this.props.width, this.props.height );
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild( this.renderer.domElement );


    var cube = this.createMesh(this.scene)
    // this.scene.add( cube );
    this.camera.position.z = 5;
    var animate =() => {
      requestAnimationFrame( animate );
    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;
      if(!this.renderer){
          return
      }
      this.renderer.render( this.scene, this.camera );
    };
    animate(this.renderer);
    window.addEventListener('resize', this.handleResize, false)
    // this.renderer.render( this.scene, this.camera );
}


createMesh(scene){
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    return cube;
}
handleResize = () => {
    
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  
}
    render() {
        return (
            <div ref={ref => (this.mount = ref)} />
        )
    }
}





