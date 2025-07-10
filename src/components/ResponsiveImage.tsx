type ImageProps = {
  mobile: string;
  tablet: string;
  desktop: string;
  alt?: string;
};

export function ResponsiveImage({
  mobile,
  tablet,
  desktop,
  alt = "Vehicle",
}: ImageProps) {
  return (
    <picture
      style={{
        display: "block",
        width: "100%",
        aspectRatio: "16/9",
        overflow: "hidden",
      }}
    >
      <source media="(min-width:1024px)" srcSet={desktop} />
      <source media="(min-width:641px)" srcSet={tablet} />
      <img
        src={mobile}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.8s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
    </picture>
  );
}
