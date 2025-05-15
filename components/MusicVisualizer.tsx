"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function MusicVisualizer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const audio = audioRef.current;
    if (!container || !audio) return;

    // 🎵 Randomize one of the three audio files
    const musicOptions = ["/music/music1.wav", "/music/music2.mp3", "/music/music3.mp3"];
    const randomMusic = musicOptions[Math.floor(Math.random() * musicOptions.length)];
    audio.src = randomMusic;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const createBlob = (size: number, color: THREE.Color) => {
      const geometry = new THREE.SphereGeometry(size, 16, 16);
      const material = new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 1.0,
        roughness: 0.3,
        metalness: 0.1,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
      mesh.userData = {
        speed: Math.random() * 0.001 + 0.0005,
        direction: new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize(),
      };
      scene.add(mesh);
      return mesh;
    };

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const pointLight = new THREE.PointLight(0xffffff, 1.5, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(ambientLight, pointLight);

    const blobs: THREE.Mesh[] = [];
    for (let i = 0; i < 100; i++) {
      const size = Math.random() * 0.02 + 0.01;
      const colorHex = Math.random() > 0.5 ? "#ff2e2e" : "#ffbe69";
      const color = new THREE.Color(colorHex);
      blobs.push(createBlob(size, color));
    }

    const onResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    let audioContext;
    let source;
    let analyser;
    
    if (!audio.mediaNode) {
      audioContext = new AudioContext();
      source = audioContext.createMediaElementSource(audio);
      analyser = audioContext.createAnalyser();
      source.connect(analyser);
      analyser.connect(audioContext.destination);
      analyser.fftSize = 256;
      audio.mediaNode = source;
    } else {
      audioContext = audio.mediaNode.context;
      analyser = audioContext.createAnalyser();
      audio.mediaNode.connect(analyser);
      analyser.connect(audioContext.destination);
      analyser.fftSize = 256;
    }

    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    let smoothedLevel = 0;
    let rotationAngle = 0;

    const animate = () => {
      analyser.getByteFrequencyData(dataArray);
      const avg = dataArray.reduce((sum, val) => sum + val, 0) / dataArray.length;
      const normalizedLevel = avg / 255;

      smoothedLevel += (normalizedLevel - smoothedLevel) * 0.2;

      blobs.forEach((blob) => {
        const scale = 1 + smoothedLevel * 0.8;
        blob.scale.set(scale, scale, scale);

        blob.rotation.y += 0.002 + smoothedLevel * 0.005;
        blob.position.add(blob.userData.direction.clone().multiplyScalar(blob.userData.speed));

        if (Math.abs(blob.position.x) > 1.5) blob.userData.direction.x *= -1;
        if (Math.abs(blob.position.y) > 1.5) blob.userData.direction.y *= -1;
        if (Math.abs(blob.position.z) > 1.5) blob.userData.direction.z *= -1;
      });

      rotationAngle += 0.001;
      camera.position.x = Math.sin(rotationAngle) * 2;
      camera.position.z = Math.cos(rotationAngle) * 2;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    const startAudio = () => {
      audioContext.resume();
      audio.play();
      window.removeEventListener("click", startAudio);
    };
    window.addEventListener("click", startAudio);

    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("click", startAudio);
      container.removeChild(renderer.domElement);
      audioContext.close();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen flex justify-center items-center"
      style={{ backgroundColor: "transparent" }}
    >
      <audio ref={audioRef} loop />
    </div>
  );
}
