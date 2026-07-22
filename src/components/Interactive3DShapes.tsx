'use client';

import { motion } from 'framer-motion';

export default function Interactive3DShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* 3D Wireframe Cube 1 */}
      <motion.div
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-12 right-12 w-24 h-24 border-2 border-amber-600/20 rounded-2xl opacity-40 shadow-lg shadow-amber-500/10 backdrop-blur-3xs"
        style={{ perspective: 800, transformStyle: 'preserve-3d' }}
      />

      {/* Floating 3D Gold Orb Sphere 2 */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 left-8 w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500/15 via-indigo-500/10 to-transparent border border-amber-500/20 blur-2xs opacity-60"
      />

      {/* Floating 3D Polyhedron Diamond 3 */}
      <motion.div
        animate={{
          rotateZ: [0, 180, 360],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-16 right-1/4 w-20 h-20 border border-indigo-900/15 rounded-3xl rotate-45 opacity-30 bg-gradient-to-br from-indigo-500/5 to-amber-500/5"
      />
    </div>
  );
}
