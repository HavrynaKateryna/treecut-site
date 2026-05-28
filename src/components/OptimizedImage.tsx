type Props = {
  src: string;
  alt?: string;
  className?: string;
};

export default function OptimizedImage({
  src,
  alt = "",
  className,
}: Props) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      fetchPriority="low"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      }}
    />
  );
}