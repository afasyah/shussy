import * as THREE from 'three';
import Experience from '../Experience';
import Sizes from './Sizes';
import Camera from './Camera';

/*
 *  Renderer class for Three.JS. It will render the WebGL experience to the DOM
 *  @constructor
 *    | experience: Experience
 *    | sizes: Sizes
 *    | scene: Scene
 *    | canvas: HTMLCanvasElement
 *    | camera: Camera
 *    | renderer: THREE.WebGLRenderer | null
 */
export class Renderer {
   private experience: Experience;
   private sizes: Sizes;
   private scene: THREE.Scene;
   private canvas: HTMLCanvasElement | undefined;
   private camera: Camera;
   public instance: THREE.WebGLRenderer | null;

   constructor() {
      this.experience = new Experience();
      this.canvas = this.experience.canvas;
      this.sizes = this.experience.sizes;
      this.scene = this.experience.scene;
      this.camera = this.experience.camera;

      this.setInstance();
   }

   setInstance() {
      this.instance = new THREE.WebGLRenderer({
         canvas: this.canvas,
         antialias: true,
         alpha: true,
      });
      this.instance.physicallyCorrectLights = true;
      this.instance.outputEncoding = THREE.sRGBEncoding;
      this.instance.toneMapping = THREE.CineonToneMapping;
      this.instance.toneMappingExposure = 1.75;
      this.instance.shadowMap.enabled = true;
      this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
      this.instance.setSize(this.sizes.width, this.sizes.height);
      this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
   }

   resize() {
      this.instance.setSize(this.sizes.width, this.sizes.height);
      this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
   }

   update() {
      this.instance.render(this.scene, this.camera.orthographicCamera);
   }
}

export default Renderer;
