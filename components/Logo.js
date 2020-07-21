import * as React from "react"

function Logo(props) {
  return (
    <svg
      width={519.418}
      height={156.807}
      viewBox="-9.709 -3.404 519.418 156.807"
      style={{
        background: "0 0",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__editing-glowing-gradient"
          x1={0.815}
          x2={0.185}
          y1={0.889}
          y2={0.111}
        >
          <stop offset={0} stopColor="#0a7142" />
          <stop offset={1} stopColor="#13a365" />
        </linearGradient>
        <filter
          id="prefix__editing-glowing"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation={10} />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#prefix__editing-glowing)">
        <path
          d="M30.98-9.54q-.84.71-2.15 1.12-1.31.42-3.04.42-2.3 0-3.81-.58-1.5-.57-1.95-1.98-1.79-5.63-2.94-9.12-1.15-3.49-1.79-6.11h-.32q-.2 3.77-.29 6.88-.1 3.1-.13 6.05-.03 2.94-.13 5.95-.09 3.01-.29 6.65-.83.32-2.17.55-1.35.22-2.69.22-2.82 0-4.38-.89-1.57-.9-1.57-3.27l1.85-32.64q.52-.83 2.24-1.79 1.73-.96 4.87-.96 3.39 0 5.31 1.06 1.92 1.05 2.82 3.42.57 1.54 1.24 3.52.68 1.98 1.35 4.1.67 2.11 1.31 4.19l1.15 3.74h.32q1.54-5.37 3.07-10.4 1.54-5.02 2.82-8.41.96-.52 2.46-.87 1.51-.35 3.36-.35 3.14 0 5.12.93 1.99.93 2.31 2.65.25 1.28.54 3.94.29 2.66.61 5.98.32 3.33.64 7.04.32 3.72.61 7.14.29 3.42.48 6.27.19 2.85.25 4.39-1.08.64-2.27.92-1.18.29-3.04.29-2.43 0-4.09-.83-1.67-.83-1.8-3.26-.38-6.98-.48-12.55-.09-5.57-.28-9.34h-.32q-.64 2.49-1.86 6.27-1.22 3.78-2.94 9.66zm23.1-30.2q0-2.44 1.63-4.1 1.63-1.66 4.32-1.66 2.69 0 4.32 1.66 1.63 1.66 1.63 4.1 0 2.43-1.63 4.09-1.63 1.67-4.32 1.67-2.69 0-4.32-1.67-1.63-1.66-1.63-4.09zm11.39 13.63V-.06q-.7.12-2.08.35-1.37.22-2.78.22-1.41 0-2.53-.19-1.12-.19-1.89-.77-.77-.57-1.18-1.57-.42-.99-.42-2.59v-26.05l2.08-.35q1.38-.22 2.79-.22 1.4 0 2.52.19t1.89.77q.77.57 1.19 1.57.41.99.41 2.59zm24.45 2.62q-1.6 0-3.04.51-1.44.52-2.5 1.51-1.05.99-1.69 2.46-.64 1.47-.64 3.46 0 3.97 2.27 5.95t5.54 1.98q1.92 0 3.32-.44 1.41-.45 2.5-.96 1.28.89 1.92 1.95.64 1.05.64 2.53 0 2.62-2.5 4.06Q93.25.96 88.83.96q-4.03 0-7.29-1.18-3.27-1.19-5.6-3.33Q73.6-5.7 72.32-8.7q-1.28-3.01-1.28-6.66 0-4.22 1.38-7.39 1.37-3.17 3.74-5.22t5.47-3.07q3.11-1.02 6.56-1.02 4.61 0 7.11 1.66 2.49 1.66 2.49 4.29 0 1.21-.57 2.27-.58 1.06-1.35 1.82-1.09-.51-2.62-.99-1.54-.48-3.33-.48zm33.92 7.62l10.24 10.24q-.32 3.01-1.76 4.61-1.44 1.6-4.19 1.6-2.05 0-3.65-1-1.6-.99-3.46-3.36l-6.33-7.93V-.06l-2.08.35q-1.38.22-2.79.22-1.4 0-2.52-.19t-1.89-.77q-.77-.57-1.19-1.57-.41-.99-.41-2.59v-37.05q.7-.2 2.08-.42 1.37-.22 2.78-.22 1.41 0 2.53.19 1.12.19 1.89.77.77.57 1.18 1.56.42 1 .42 2.6v16.89l11.01-11.26q3.32 0 5.34 1.47t2.02 3.71q0 .96-.32 1.76t-1 1.63q-.67.84-1.72 1.76-1.06.93-2.47 2.15l-3.71 3.2zm54.72-8.32q1.22-.51 2.27-.74 1.06-.22 2.15-.22 1.53 0 2.49.45.96.44 1.51 1.24.54.8.73 1.89.19 1.09.19 2.37 0 5.18-2.62 9.86l4.93 4.73q-.13 2.43-1.67 3.97Q187.01.9 184.9.9q-2.56 0-5-2.44l-1.21-1.15q-2.37 1.73-5.41 2.72-3.04.99-6.75.99-3.78 0-6.66-.99-2.88-.99-4.86-2.72-1.99-1.73-3.01-4.06-1.02-2.34-1.02-5.09 0-2.37.7-4.22.7-1.86 1.86-3.27 1.15-1.41 2.56-2.4 1.4-.99 2.88-1.63-1.28-1.54-1.83-3.26-.54-1.73-.54-3.27 0-1.98.83-3.71t2.37-3.01q1.53-1.28 3.74-1.98 2.21-.71 5.03-.71 4.03 0 5.69 1.44 1.67 1.44 1.67 3.68 0 1.09-.42 2.12-.42 1.02-1.25 1.85-.7-.32-1.63-.51-.93-.19-1.95-.19-1.67 0-2.75.51-1.09.51-1.09 1.86 0 .96.83 1.95t2.05 2.21l8.19 7.93q.32-1.41.48-3.33.16-1.92.16-4.41zm-17.34 11.65q0 2.24 1.5 3.74t4.45 1.5q1.28 0 2.69-.35 1.4-.35 2.68-1.18l-8.19-8.26q-1.53.71-2.33 1.92-.8 1.22-.8 2.63zm62.01 0h-3.39V-.26q-.7.2-2.21.39-1.5.19-2.97.19-1.48 0-2.6-.22-1.12-.23-1.85-.8-.74-.58-1.12-1.6-.39-1.03-.39-2.69v-30.15q0-1.34.74-2.08.74-.73 2.02-1.18 2.17-.77 5.05-1.12 2.88-.35 6.15-.35 8.83 0 13.31 3.71t4.48 10.05q0 3.97-2.05 6.78-2.05 2.82-4.86 4.35 2.3 3.14 4.54 5.89 2.24 2.75 3.52 4.99-.64 2.24-2.34 3.43-1.69 1.18-3.8 1.18-1.41 0-2.44-.32-1.02-.32-1.79-.89-.77-.58-1.41-1.41-.64-.83-1.21-1.79l-5.38-8.64zm-3.45-8.52h4.09q2.43 0 3.84-1.24 1.41-1.25 1.41-3.68 0-2.44-1.57-3.68-1.57-1.25-4.96-1.25-.96 0-1.53.06-.58.07-1.28.19v9.6zm59.26 5.51q0 3.97-1.22 7.07-1.21 3.1-3.42 5.22-2.21 2.11-5.28 3.2-3.07 1.08-6.85 1.08-3.77 0-6.85-1.15-3.07-1.15-5.28-3.29-2.2-2.15-3.42-5.22-1.22-3.07-1.22-6.91 0-3.78 1.22-6.85t3.42-5.22q2.21-2.14 5.28-3.29 3.08-1.15 6.85-1.15 3.78 0 6.85 1.18t5.28 3.33q2.21 2.14 3.42 5.21 1.22 3.08 1.22 6.79zm-22.4 0q0 3.9 1.5 5.98 1.51 2.08 4.2 2.08 2.68 0 4.12-2.11t1.44-5.95q0-3.84-1.47-5.92t-4.16-2.08q-2.69 0-4.16 2.08-1.47 2.08-1.47 5.92zm38.59-6.34V-.06q-.64.19-2.01.38-1.38.19-2.85.19-1.41 0-2.53-.19-1.12-.19-1.89-.77-.77-.57-1.18-1.57-.42-.99-.42-2.59v-19.2q0-1.47.55-2.53.54-1.05 1.56-1.88 1.03-.84 2.53-1.51 1.51-.67 3.23-1.18 1.73-.51 3.59-.8 1.85-.29 3.71-.29 3.07 0 4.86 1.18 1.8 1.19 1.8 3.88 0 .89-.26 1.76-.26.86-.64 1.56-1.34 0-2.75.13t-2.75.39q-1.35.25-2.53.54-1.19.29-2.02.67zm26.31 1.54v9.66q0 1.67 1.05 2.37 1.06.7 2.98.7.96 0 1.98-.16 1.03-.16 1.79-.41.58.7 1 1.57.41.86.41 2.08 0 2.43-1.82 3.96Q327.1.96 322.5.96q-5.64 0-8.68-2.56t-3.04-8.32v-27.39q.71-.19 2.02-.42 1.31-.22 2.78-.22 2.82 0 4.39.99 1.57.99 1.57 4.19v4.1h8.38q.38.7.74 1.76.35 1.05.35 2.33 0 2.24-.99 3.24-1 .99-2.66.99h-5.82zm19.58 12.41q-.7-1.6-1.5-3.58t-1.67-4.54q-.86-2.56-1.79-5.86-.93-3.3-1.95-7.58.89-.9 2.4-1.57 1.5-.67 3.29-.67 2.24 0 3.72.92 1.47.93 2.17 3.49l5.06 17.6h.25q.77-2.17 1.51-4.73.73-2.56 1.44-5.28.7-2.72 1.31-5.44.61-2.72 1.06-5.35 2.3-1.21 5.05-1.21 2.24 0 3.71.96 1.48.96 1.48 3.32 0 1.73-.45 4-.45 2.28-1.19 4.84-.73 2.56-1.72 5.28-1 2.72-2.08 5.34-1.09 2.62-2.24 4.96-1.16 2.34-2.24 4.19-1.8 3.14-3.33 5.12-1.54 1.99-2.95 3.11-1.4 1.12-2.81 1.53-1.41.42-2.95.42-2.68 0-4.35-1.6-1.66-1.6-1.98-4.16 2.05-1.6 4.09-3.55 2.05-1.96 3.72-4-1.09-.32-2.34-1.51-1.25-1.18-2.72-4.45z"
          fill="url(#prefix__editing-glowing-gradient)"
          transform="translate(65.005 103.415)"
        />
      </g>
      <style />
    </svg>
  )
}

export default Logo