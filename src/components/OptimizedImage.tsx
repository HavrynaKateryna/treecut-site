import { useState } from "react";

type Props = {
  src: string;
  alt?: string;
  className?: string;
  priority?: "high" | "low";
};

export default function OptimizedImage({
  src,
  alt = "",
  className,
  priority = "low",
}: Props) {
  const [error, setError] = useState(false);

  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {!error ? (
        <img
          src={src}
          alt={alt}
          loading={priority === "high" ? "eager" : "lazy"}
          decoding="async"
          onError={() => setError(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#111",
            color: "#fff",
            fontSize: "14px",
          }}
        >
          Image failed to load
        </div>
      )}
    </div>
  );
}