<script setup>

import * as THREE from "three";

// vue + three.js initate animate

import { onMounted, ref } from 'vue';

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"

// vue 不要DOM 

const containerRef = ref(null)

let controls = null;

let wheels = []

let carBody, frontCar, hoodCar, glassCar



// 透视相机 

const camera = new THREE.PerspectiveCamera(

  40,

  window.innerWidth / window.innerHeight,

  0.1, // 最近距离

  1000 // 最远距离

)

camera.position.set(3, 2, 2) // 相机位置



// scene

const scene = new THREE.Scene()

// 3D 高性能绘图在web 端的实现  OPENGL 

// WebGL 是OPENGL 在web 端的实现

// 还是太底层 ， three.js webgl 封装库 

const renderer = new THREE.WebGLRenderer({

  antialias: true,

  alpha: true

})

renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8)



const render = () => {

  requestAnimationFrame(render)

  renderer.render(scene, camera)

}

// 轮毂 材质

const wheelsMaterial = new THREE.MeshPhysicalMaterial({

  color: 0x424449,

  metalness: 1,

  roughness: 0.5

});

// 车身材质

const bodyMaterial = new THREE.MeshPhysicalMaterial({

  color: 0x424449,

  metalness: 1,

  roughness: 0.5,

  clearcoat: 1,

  clearcoatRoughness: 0

  //   map :carTexture

});

// 前挡风玻璃 

const frontMaterial = new THREE.MeshPhysicalMaterial({

  color: 0x424449,

  metalness: 1,

  roughness: 0.5,

  clearcoat: 1,

  clearcoatRoughness: 0

});

// 引擎盖

const hoodMaterial = new THREE.MeshPhysicalMaterial({

  color: 0x424449,

  metalness: 1,

  roughness: 0.5,

  clearcoat: 1,

  clearcoatRoughness: 0

});

// 玻璃

const glassMaterial = new THREE.MeshPhysicalMaterial({

  color: 0xffffff,

  metalness: 0,

  roughness: 0,

  transmission: 1,

  transparent: true

});





onMounted(() => {

  containerRef.value.appendChild(renderer.domElement);

  renderer.setClearColor('#000')

  scene.background = new THREE.Color(0xffffff)

  scene.environment = new THREE.Color(0xffffff)

  render()

  // 控制器  遥感镜头

  controls = new OrbitControls(camera, renderer.domElement);

  controls.update()

  // 网格地面  比例大小的参照物 

  const gridHelper = new THREE.GridHelper(10, 10)

  gridHelper.material.opacity = 0.2

  gridHelper.material.transparent = true;

  scene.add(gridHelper);



  const loader = new GLTFLoader(); // 模型加载器

  const dracoLoader = new DRACOLoader(); // 模型解压的编译器

  dracoLoader.setDecoderPath("../../public/roadSter/draco/gltf/");

  loader.setDRACOLoader(dracoLoader);

  loader.load("../../public/roadSter/model/bmw01.glb", gltf => {

    const bmw = gltf.scene;

    // 遍历模型 

    bmw.traverse(child => {

      console.log(child);

      // 形状/模型 +material  = 材质 Mesh  -> scene add 

      if (child.isMesh && child.name.includes("轮毂")) {

        child.material = wheelsMaterial;

        wheels.push(child)

      }

      if (child.isMesh && child.name.includes("Mesh002")) {

        carBody = child

        carBody.material = bodyMaterial

      }

      if (child.isMesh && child.name.includes("前脸")) {

        frontCar = child

        frontCar.material = frontMaterial

      }

      if (child.isMesh && child.name.includes("引擎盖_1")) {

        hoodCar = child;

        hoodCar.material = hoodMaterial;

      }

      if (child.isMesh && child.name.includes("挡风玻璃")) {

        glassCar = child

        glassCar.material = glassMaterial

      }



    })

    scene.add(bmw);





  })



  const light1 = new THREE.DirectionalLight(0xffffff, 1);

  light1.position.set(0, 0, 10);

  scene.add(light1);



  const light2 = new THREE.DirectionalLight(0xffffff, 1);

  light2.position.set(0, 0, -10);

  scene.add(light2);

  const light3 = new THREE.DirectionalLight(0xffffff, 1);

  light3.position.set(10, 0, 0);

  scene.add(light3);

  const light4 = new THREE.DirectionalLight(0xffffff, 1);

  light4.position.set(-10, 0, 0);

  scene.add(light4);

  const light5 = new THREE.DirectionalLight(0xffffff, 1);

  light5.position.set(0, 10, 0);

  scene.add(light5);

  const light6 = new THREE.DirectionalLight(0xffffff, 1);

  light6.position.set(5, 10, 0);

  scene.add(light6);

  const light7 = new THREE.DirectionalLight(0xffffff, 1);

  light7.position.set(0, 10, 5);

  scene.add(light7);

  const light8 = new THREE.DirectionalLight(0xffffff, 1);

  light8.position.set(0, 10, -5);

  scene.add(light8);

  const light9 = new THREE.DirectionalLight(0xffffff, 1);

  light9.position.set(-5, 10, 0);

  scene.add(light9);





})



const selectColor = color => {

  wheelsMaterial.color.set(color);

  bodyMaterial.color.set(color);

  frontMaterial.color.set(color);

  hoodMaterial.color.set(color);

}



let colors = [

  {

    name: "冷光银",

    color: "#424449"

  },

  {

    name: "经典黑",

    color: "black"

  },

  {

    name: "深海蓝",

    color: "#000f4a"

  },

  {

    name: "中国红",

    color: "#bd050f"

  },

  {

    name: "珍珠白",

    color: "white"

  }

];



</script>



<template>

  <div class="container" ref="containerRef"></div>

  <div class="home">

    <div class="content">

      <div class="words">选择车身颜色</div>

      <div class="select">

        <div class="select-item" v-for="(item, index) in colors" :key="index" @click="selectColor(item.color)">

          <div class="select-item-color" :style="{ background: item.color }"></div>

          <div class="select-item-name">{{ item.name }}</div>

        </div>

      </div>

    </div>

  </div>

</template>



<style lang="stylus" scoped>

.home {

  display: flex;

  .content-box {

    position: relative;

    // border: 1px solid #e8eaed;

  }

  .content {

    margin: 10px auto;



    .words {

      font-size: 20px;

      margin: 20px;

    }

  }

  .select {

    display: flex;

  }

  .select-item {

    margin: 5px;

    cursor: pointer;

  }

  .select-item-color {

    width: 30px;

    height: 30px;

    border: 1px solid #ccc;

    border-radius: 50px;

    margin-bottom: 10px;

  }

  .select-item-color-name {

    font-size: 14px;

  }

}



</style>
