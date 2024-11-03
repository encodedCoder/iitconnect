// src/components/ui/Avatar.tsx
interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "User avatar",
  size = "md",
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full overflow-hidden bg-gray-200`}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-primary text-primary-foreground">
          {alt.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
};
