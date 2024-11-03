// src/components/ui/Card.tsx
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm border p-4 ${className}`}>
      {children}
    </div>
  );
};
