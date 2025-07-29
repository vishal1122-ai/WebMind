declare global {
  interface Window {
    THREE: any;
  }
}

export type AnimationType = "neural" | "liquid" | "matrix" | "geometric";

export class ThreeAnimationManager {
  private scene: any;
  private camera: any;
  private renderer: any;
  private animationObjects: any = {};
  private currentAnimation: AnimationType = "neural";
  private isPaused: boolean = false;
  private animationFrameId: number | null = null;

  private isDarkMode: boolean = true;

  constructor(container: HTMLElement) {
    if (typeof window === "undefined" || !window.THREE) return;

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Scene setup
    this.scene = new window.THREE.Scene();
    this.camera = new window.THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    );
    this.renderer = new window.THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    this.renderer.setSize(width, height);
    this.renderer.setClearColor(0x000000, 0);
    container.appendChild(this.renderer.domElement);

    this.camera.position.z = 5;

    // Handle resize
    window.addEventListener("resize", () => {
      const newWidth = container.offsetWidth;
      const newHeight = container.offsetHeight;
      this.camera.aspect = newWidth / newHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(newWidth, newHeight);
    });

    // Start animation loop
    this.animate();
  }

  setTheme(isDark: boolean) {
    this.isDarkMode = isDark;
    this.switchAnimation(this.currentAnimation);
  }

  switchAnimation(type: AnimationType) {
    this.currentAnimation = type;
    this.clearScene();

    switch (type) {
      case "neural":
        this.createNeuralNetwork();
        break;
      case "liquid":
        this.createLiquidWave();
        break;
      case "matrix":
        this.createMatrixRain();
        break;
      case "geometric":
        this.createGeometricTessellation();
        break;
    }
  }

  public pause() {
    this.isPaused = true;
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  public resume() {
    if (!this.isPaused) return;
    this.isPaused = false;
    this.animate();
  }

  private clearScene() {
    while (this.scene.children.length > 0) {
      const child = this.scene.children[0];
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach((material: any) => material.dispose());
        } else {
          child.material.dispose();
        }
      }
      this.scene.remove(child);
    }
  }

  private createNeuralNetwork() {
    if (!window.THREE) return;

    const nodeGeometry = new window.THREE.SphereGeometry(0.05, 16, 16);
    const nodeMaterial = new window.THREE.MeshBasicMaterial({
      color: this.isDarkMode ? 0x00d4ff : 0x8b5cf6,
      transparent: true,
      opacity: 0.8,
    });

    const nodes: any[] = [];
    const connections: any[] = [];

    // Create nodes
    for (let i = 0; i < 50; i++) {
      const node = new window.THREE.Mesh(nodeGeometry, nodeMaterial.clone());
      node.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4
      );
      node.userData = {
        originalY: node.position.y,
        speed: Math.random() * 0.02 + 0.01,
      };
      nodes.push(node);
      this.scene.add(node);
    }

    // Create connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position);
        if (distance < 2) {
          const lineGeometry = new window.THREE.BufferGeometry().setFromPoints([
            nodes[i].position.clone(),
            nodes[j].position.clone(),
          ]);
          const lineMaterial = new window.THREE.LineBasicMaterial({
            color: this.isDarkMode ? 0x00d4ff : 0x8b5cf6,
            transparent: true,
            opacity: 0.3,
          });
          const line = new window.THREE.Line(lineGeometry, lineMaterial);
          connections.push({ line, nodeA: nodes[i], nodeB: nodes[j] });
          this.scene.add(line);
        }
      }
    }

    this.animationObjects = { nodes, connections };
  }

  private createLiquidWave() {
    if (!window.THREE) return;

    const geometry = new window.THREE.PlaneGeometry(10, 6, 50, 30);
    const material = new window.THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: {
          value: new window.THREE.Color(this.isDarkMode ? 0x00d4ff : 0x8b5cf6),
        },
        color2: {
          value: new window.THREE.Color(this.isDarkMode ? 0x8b5cf6 : 0x00d4ff),
        },
      },
      vertexShader: `
        uniform float time;
        varying vec2 vUv;
        varying float vElevation;
        
        void main() {
          vUv = uv;
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          float elevation = sin(modelPosition.x * 2.0 + time) * 0.5;
          elevation += sin(modelPosition.y * 3.0 + time * 0.5) * 0.3;
          modelPosition.z += elevation;
          vElevation = elevation;
          
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectedPosition = projectionMatrix * viewPosition;
          gl_Position = projectedPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        varying float vElevation;
        
        void main() {
          vec3 color = mix(color1, color2, vElevation + 0.5);
          gl_FragColor = vec4(color, 0.3);
        }
      `,
      transparent: true,
      side: window.THREE.DoubleSide,
    });

    const mesh = new window.THREE.Mesh(geometry, material);
    this.scene.add(mesh);
    this.animationObjects = { mesh, material };
  }

  private createMatrixRain() {
    if (!window.THREE) return;

    const geometry = new window.THREE.BoxGeometry(0.1, 0.1, 0.1);
    const material = new window.THREE.MeshBasicMaterial({
      color: this.isDarkMode ? 0x00d4ff : 0x8b5cf6,
      transparent: true,
      opacity: 0.1,
    });

    const cubes: any[] = [];
    for (let i = 0; i < 20; i++) {
      const cube = new window.THREE.Mesh(geometry, material.clone());
      cube.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 3
      );
      cube.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      cubes.push(cube);
      this.scene.add(cube);
    }

    this.animationObjects = { cubes };
  }

  private createGeometricTessellation() {
    if (!window.THREE) return;

    const geometry = new window.THREE.ConeGeometry(0.2, 0.4, 3);
    const material = new window.THREE.MeshBasicMaterial({
      color: this.isDarkMode ? 0x00d4ff : 0x8b5cf6,
      transparent: true,
      opacity: 0.6,
      wireframe: true,
    });

    const shapes: any[] = [];
    for (let i = 0; i < 30; i++) {
      const shape = new window.THREE.Mesh(geometry, material.clone());
      shape.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 3
      );
      shape.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02,
        },
      };
      shapes.push(shape);
      this.scene.add(shape);
    }

    this.animationObjects = { shapes };
  }

  private animate = () => {
    if (this.isPaused) return;

    const time = Date.now() * 0.001;

    // Your existing animation logic here...
    if (this.currentAnimation === "neural" && this.animationObjects.nodes) {
      this.animationObjects.nodes.forEach((node: any) => {
        node.position.y =
          node.userData.originalY + Math.sin(time * node.userData.speed) * 0.3;
        node.material.opacity =
          0.5 + Math.sin(time * 2 + node.position.x) * 0.3;
      });

      this.animationObjects.connections.forEach((connection: any) => {
        const points = [
          connection.nodeA.position.clone(),
          connection.nodeB.position.clone(),
        ];
        connection.line.geometry.setFromPoints(points);
        connection.line.material.opacity =
          0.1 + Math.sin(time + connection.nodeA.position.x) * 0.2;
      });
    }

    if (this.currentAnimation === "liquid" && this.animationObjects.material) {
      this.animationObjects.material.uniforms.time.value = time;
    }

    if (this.currentAnimation === "matrix" && this.animationObjects.cubes) {
      this.animationObjects.cubes.forEach((cube: any) => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cube.material.opacity = 0.1 + Math.sin(time + cube.position.x) * 0.05;
      });
    }

    if (this.currentAnimation === "geometric" && this.animationObjects.shapes) {
      this.animationObjects.shapes.forEach((shape: any) => {
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;
        shape.material.opacity = 0.3 + Math.sin(time + shape.position.x) * 0.3;
      });
    }

    this.renderer.render(this.scene, this.camera);

    // Save frame ID so we can cancel it on pause
    this.animationFrameId = requestAnimationFrame(this.animate);
  };

  dispose() {
    this.clearScene();
    if (this.renderer) {
      this.renderer.dispose();
    }
  }
}
