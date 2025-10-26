import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Color, Group, MeshPhysicalMaterial, MathUtils } from "three";
import { OrbitControls, Environment } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";

function Bubble({ seed, isAnimating }: { seed: number; isAnimating: boolean }) {
	const ref = useRef<Group>(null!);
	const matRef = useRef<MeshPhysicalMaterial>(null!);
	const rand = Math.sin(seed) * 0.5 + 0.5;
	const hue = (seed * 0.137) % 1;
	const bubbleColor = new Color().setHSL(hue, 0.85, 0.75);

	useFrame((_state, delta) => {
		if (!ref.current) return;
		if (isAnimating) {
			ref.current.position.y += delta * (0.25 + rand * 0.3);
			ref.current.rotation.y += delta * 0.05;
			if (ref.current.position.y > 6) {
				ref.current.position.y = -2;
				ref.current.position.x = (Math.random() - 0.5) * 8;
				ref.current.position.z = (Math.random() - 0.5) * 8;
			}
		}
		const progress = (ref.current.position.y + 2) / 8;
		const opacity = 0.15 + Math.sin(Math.PI * progress) * 0.45;
		if (matRef.current) matRef.current.opacity = opacity;
	});

	return (
		<group
			ref={ref}
			position={[
				(Math.random() - 0.5) * 8,
				Math.random() * 4 - 2,
				(Math.random() - 0.5) * 8,
			]}
			scale={0.5}
		>
			<mesh>
				<sphereGeometry args={[0.5, 128, 128]} />
				<meshPhysicalMaterial
					ref={matRef}
					color={bubbleColor}
					transparent
					opacity={0}
					roughness={0.05}
					clearcoat={1}
					transmission={1}
					iridescence={1}
					iridescenceIOR={1.6}
					iridescenceThicknessRange={[50, 1200]}
					envMapIntensity={2}
					toneMapped={false}
				/>
			</mesh>
		</group>
	);
}

function Bubbles({ isAnimating }: { isAnimating: boolean }) {
	return (
		<>
			{Array.from({ length: 90 }, () => (
				<Bubble
					key={crypto.randomUUID()}
					seed={Math.random() * 100}
					isAnimating={isAnimating}
				/>
			))}
		</>
	);
}

function InteractiveBubbles({ isAnimating }: { isAnimating: boolean }) {
	const groupRef = useRef<Group>(null!);
	const targetRot = useRef({ x: 0, y: 0 });

	useThree(({ size }) => {
		const handleMove = (e: PointerEvent) => {
			const x = (e.clientX / size.width) * 2 - 1;
			const y = (e.clientY / size.height) * 2 - 1;
			targetRot.current.x = y * 0.3;
			targetRot.current.y = x * 0.3;
		};
		window.addEventListener("pointermove", handleMove);
		return () => window.removeEventListener("pointermove", handleMove);
	});

	useFrame(() => {
		if (!groupRef.current || !isAnimating) return;
		groupRef.current.rotation.x = MathUtils.lerp(
			groupRef.current.rotation.x,
			targetRot.current.x,
			0.05
		);
		groupRef.current.rotation.y = MathUtils.lerp(
			groupRef.current.rotation.y,
			targetRot.current.y,
			0.05
		);
	});

	return (
		<group ref={groupRef}>
			<Bubbles isAnimating={isAnimating} />
		</group>
	);
}

export default function BubbleScene() {
	const [isAnimating, setIsAnimating] = useState(true);
	const [opacity, setOpacity] = useState(1);

	useEffect(() => {
		let fadeInterval: NodeJS.Timeout | null = null;

		// 5秒後にフェードアウト開始
		const fadeTimer = setTimeout(() => {
			setIsAnimating(false);
			// フェードアウトアニメーション（1秒かけて）
			let fadeOpacity = 1;
			fadeInterval = setInterval(() => {
				fadeOpacity -= 0.05;
				if (fadeOpacity <= 0) {
					fadeOpacity = 0;
					if (fadeInterval) clearInterval(fadeInterval);
				}
				setOpacity(fadeOpacity);
			}, 50);
		}, 5000);

		return () => {
			clearTimeout(fadeTimer);
			if (fadeInterval) clearInterval(fadeInterval);
		};
	}, []);

	return (
		<Canvas
			style={{
				position: "fixed",
				inset: 0,
				zIndex: 0,
				width: "100vw",
				height: "100vh",
				background: "#2b8dff",
				opacity: opacity,
				transition: "opacity 0.05s ease-out",
				pointerEvents: opacity === 0 ? "none" : "auto",
			}}
			camera={{ position: [0, 2, 8], fov: 60 }}
		>
			<ambientLight intensity={0.6} />
			<directionalLight position={[5, 8, 5]} intensity={0.4} />
			<OrbitControls makeDefault enablePan={false} />
			<InteractiveBubbles isAnimating={isAnimating} />
			<Environment preset="sunset" blur={0.8} />
		</Canvas>
	);
}
