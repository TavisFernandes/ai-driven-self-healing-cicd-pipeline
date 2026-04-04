import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * Full-viewport Three.js background — wireframe icosahedron + gold particle field.
 */
export default function AurumCanvas() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const gold = 0xd4af37
    const geometry = new THREE.IcosahedronGeometry(2, 0)
    const material = new THREE.MeshPhongMaterial({
      color: 0x050505,
      emissive: gold,
      emissiveIntensity: 0.2,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    })
    const crystal = new THREE.Mesh(geometry, material)
    scene.add(crystal)

    const partCount = 500
    const partGeom = new THREE.BufferGeometry()
    const posArray = new Float32Array(partCount * 3)
    for (let i = 0; i < partCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20
    }
    partGeom.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    const partMat = new THREE.PointsMaterial({
      size: 0.02,
      color: gold,
      transparent: true,
      opacity: 0.5,
    })
    const particles = new THREE.Points(partGeom, partMat)
    scene.add(particles)

    const light1 = new THREE.PointLight(gold, 1, 100)
    light1.position.set(10, 10, 10)
    scene.add(light1)
    const light2 = new THREE.DirectionalLight(0xffffff, 0.2)
    light2.position.set(-5, -5, 5)
    scene.add(light2)

    camera.position.z = 8

    let mouseX = 0
    let mouseY = 0
    const onMove = (e) => {
      mouseX = e.clientX / window.innerWidth - 0.5
      mouseY = e.clientY / window.innerHeight - 0.5
    }
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('resize', onResize)

    let frame = 0
    const animate = () => {
      frame = requestAnimationFrame(animate)
      crystal.rotation.y += 0.001
      const targetX = mouseX * 2
      const targetY = -mouseY * 2
      crystal.position.x += (targetX - crystal.position.x) * 0.05
      crystal.position.y += (targetY - crystal.position.y) * 0.05
      particles.rotation.y += 0.0005
      particles.position.y += Math.sin(Date.now() * 0.001) * 0.002
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', onResize)
      geometry.dispose()
      material.dispose()
      partGeom.dispose()
      partMat.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden
    />
  )
}
