import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function StarField() {
    const ref = useRef<THREE.Points>(null!);
    const count = 500;

    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            arr[i * 3] = (Math.random() - 0.5) * 60;
            arr[i * 3 + 1] = (Math.random() - 0.5) * 60;
            arr[i * 3 + 2] = (Math.random() - 0.5) * 30;
        }
        return arr;
    }, []);

    useFrame((_, d) => {
        ref.current.rotation.y += d * 0.015;
        ref.current.rotation.x += d * 0.004;
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial color="#ff2d78" size={0.055} sizeAttenuation transparent opacity={0.55} />
        </points>
    );
}

function DistortBlob() {
    const ref = useRef<THREE.Mesh>(null!);
    useFrame(({ clock }) => {
        ref.current.rotation.y = clock.getElapsedTime() * 0.18;
        ref.current.rotation.x = clock.getElapsedTime() * 0.08;
    });
    return (
        <Float speed={1.4} floatIntensity={1} rotationIntensity={0.3}>
            <mesh ref={ref} position={[4.5, 0.5, -7]}>
                <sphereGeometry args={[2, 64, 64]} />
                <MeshDistortMaterial
                    color="#ff2d78"
                    wireframe
                    distort={0.45}
                    speed={2}
                    transparent
                    opacity={0.18}
                />
            </mesh>
        </Float>
    );
}

function CyanRing() {
    const ref = useRef<THREE.Mesh>(null!);
    useFrame((_, d) => {
        ref.current.rotation.x += d * 0.06;
        ref.current.rotation.z += d * 0.04;
    });
    return (
        <Float speed={0.8} floatIntensity={0.6}>
            <mesh ref={ref} position={[-5.5, 1.5, -9]}>
                <torusGeometry args={[2.5, 0.06, 16, 100]} />
                <meshStandardMaterial color="#00d4ff" transparent opacity={0.22} emissive="#00d4ff" emissiveIntensity={0.4} />
            </mesh>
        </Float>
    );
}

function AmberDodeca() {
    const ref = useRef<THREE.Mesh>(null!);
    useFrame((_, d) => {
        ref.current.rotation.x += d * 0.09;
        ref.current.rotation.y += d * 0.12;
    });
    return (
        <Float speed={1.1} floatIntensity={0.8}>
            <mesh ref={ref} position={[-1, -3, -6]}>
                <dodecahedronGeometry args={[1.4, 0]} />
                <meshStandardMaterial color="#ffb800" wireframe transparent opacity={0.2} emissive="#ffb800" emissiveIntensity={0.3} />
            </mesh>
        </Float>
    );
}

const ThreeBackground = () => (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 12], fov: 58 }} gl={{ antialias: true, alpha: true }}>
            <ambientLight intensity={0.2} />
            <pointLight position={[8, 8, 8]} intensity={1} color="#ff2d78" />
            <pointLight position={[-8, -6, 6]} intensity={0.7} color="#00d4ff" />
            <pointLight position={[0, 5, -5]} intensity={0.5} color="#ffb800" />
            <StarField />
            <DistortBlob />
            <CyanRing />
            <AmberDodeca />
        </Canvas>
    </div>
);

export default ThreeBackground;
