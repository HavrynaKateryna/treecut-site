import { useState, useMemo } from "react";

type Props = {
  src: string;
  alt?: string;
  className?: string;

  /** ключ для генерации responsive вариантов (если есть) */
  widths?: number[];

  /** важно ли изображение (hero / above the fold) */
  priority?: "high" | "low";

  /** blur placeholder */
  blur?: string;
};

export default function OptimizedImage({
  src,
  alt = "",
  className,
  widths = [480, 768, 1024, 1440],
  priority = "low",
  blur,
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // 👉 srcSet (если у тебя нет CDN — просто fallback на src)
  const srcSet = useMemo(() => {
    return widths
      .map((w) => `${src}?w=${w} ${w}w`)
      .join(", ");
  }, [src, widths]);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        background: "#0b0b0b",
      }}
    >
      {/* BLUR PLACEHOLDER */}
      {blur && !loaded && (
        <img
          src={blur}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(20px)",
            transform: "scale(1.1)",
            transition: "opacity 0.4s ease",
          }}
        />
      )}

      {/* MAIN IMAGE */}
      {!error && (
        <img
          src={src}
          srcSet={srcSet}
          sizes="(max-width: 768px) 100vw, 50vw"
          alt={alt}
          loading={priority === "high" ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority}

          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}

          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",

            opacity: loaded ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />
      )}

      {/* ERROR FALLBACK */}
      {error && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            background: "#111",
            fontSize: 14,
          }}
        >
          Image failed to load
        </div>
      )}
    </div>
  );
}