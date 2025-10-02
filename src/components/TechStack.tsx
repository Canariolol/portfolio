"use client";
import { useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, Billboard } from "@react-three/drei";
import * as THREE from "three";
import {
  SiTypescript, SiJavascript, SiReact, SiVite, SiNextdotjs, SiTailwindcss, SiMui,
  SiPython, SiFastapi, SiFlask, SiNodedotjs,
  SiFirebase, SiGooglecloud, SiPostgresql,
  SiGithub, SiGithubactions, SiDocker,
  SiN8N, SiGooglegemini, SiOpenai, SiClaude,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { useLanguage } from "@/context/LanguageContext";

const icons = [
  { name: "TypeScript", icon: <SiTypescript size={128} className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript size={128} className="text-yellow-400" /> },
  { name: "React", icon: <SiReact size={128} className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs size={128} /> },
  { name: "Vite", icon: <SiVite size={128} className="text-purple-500" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={128} className="text-teal-400" /> },
  { name: "MUI", icon: <SiMui size={128} className="text-blue-600" /> },
  { name: "Python", icon: <SiPython size={128} className="text-blue-500" /> },
  { name: "FastAPI", icon: <SiFastapi size={128} className="text-green-500" /> },
  { name: "Flask", icon: <SiFlask size={128} /> },
  { name: "Node.js", icon: <SiNodedotjs size={128} className="text-green-600" /> },
  { name: "Google Cloud", icon: <SiGooglecloud size={128} className="text-red-500" /> },
  { name: "Firebase", icon: <SiFirebase size={128} className="text-yellow-600" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={128} className="text-blue-700" /> },
  { name: "Docker", icon: <SiDocker size={128} className="text-blue-500" /> },
  { name: "GitHub", icon: <SiGithub size={128} /> },
  { name: "GitHub Actions", icon: <SiGithubactions size={128} className="text-blue-400" /> },
  { name: "Gemini", icon: <SiGooglegemini size={128} className="text-blue-500" /> },
  { name: "OpenAI", icon: <SiOpenai size={128} className="text-green-500" /> },
  { name: "Claude", icon: <SiClaude size={128} className="text-orange-400" /> },
  { name: "GCP Vertex AI", icon: <SiGooglecloud size={128} className="text-red-500" /> },
  { name: "n8n", icon: <SiN8N size={128} className="text-purple-600" /> },
  { name: "Z.ai (GLM)", icon: <VscCode size={128} /> },
];

interface IconProps {
  id: number;
  name: string;
  position: THREE.Vector3;
  icon: React.ReactNode;
  selected: number | null;
  setSelected: (id: number | null) => void;
}

function Icon({ id, name, position, icon, selected, setSelected }: IconProps) {
  const isSelected = selected === id;

  return (
    <Billboard position={position}>
      <Html center distanceFactor={10} transform>
        <div
          className={`p-3 cursor-pointer bg-white/10 backdrop-blur-md rounded-lg transition-all duration-300 ease-in-out ${isSelected ? "scale-125 bg-white/20" : "hover:scale-110"}`}
          onClick={() => setSelected(isSelected ? null : id)}
        >
          <div className="w-32 h-32 flex items-center justify-center text-white">
            {icon}
          </div>
          {isSelected && (
            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xl bg-gray-800 text-white rounded-md whitespace-nowrap">
              {name}
            </span>
          )}
        </div>
      </Html>
    </Billboard>
  );
}

function Cloud({ count = 4, radius = 20 }) {
  const [selected, setSelected] = useState<number | null>(null);

  const points = useMemo(() => {
    const temp = [];
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      temp.push(new THREE.Vector3(x, y, z).multiplyScalar(radius).multiply(new THREE.Vector3(1.5, 1, 1.5)));
    }
    return temp;
  }, [count, radius]);

  return (
    <group>
      {points.map((pos, i) => {
        const { name, icon } = icons[i % icons.length];
        return (
          <Icon
            key={i}
            id={i}
            name={name}
            position={pos}
            icon={icon}
            selected={selected}
            setSelected={setSelected}
          />
        );
      })}
    </group>
  );
}

const copy = {
  es: {
    tag: "Tecnología",
    title: "Mi Stack",
    subtitle: "Herramientas que uso a diario | Arrastra y clickea ;).",
  },
  en: {
    tag: "Technology",
    title: "My Stack",
    subtitle: "Tools I use daily (drag and click).",
  },
};

export default function TechStack() {
  const { language } = useLanguage();
  const text = copy[language];

  return (
    <div className="w-full h-[600px] relative z-10">
      <div className="text-center mb-6">
        <p className="text-xs uppercase tracking-[0.3em] text-sky-500 mb-3">
          <br /><br />
          {text.tag}
        </p>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
          <span className="relative inline-block">
            <span className="absolute inset-x-0 -bottom-2 h-3 bg-gradient-to-r from-sky-200 to-transparent dark:from-sky-500/20 dark:to-transparent rounded-full" />
            <span className="relative text-sky-600 dark:text-sky-400">{text.title}</span>
          </span>
        </h3>
      </div>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        {text.subtitle}
      </p>
      <Canvas camera={{ position: [0, 0, 40], fov: 90 }}>
        <ambientLight intensity={0.8} />
        <pointLight intensity={1} position={[0, 0, 0]} />
        <Cloud count={icons.length} radius={20} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </div>
  );
}
