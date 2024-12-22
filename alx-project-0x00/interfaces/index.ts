export interface PillProps {
  title: string
}



export interface ButtonProps {
  title: string; // Button text
  className?: string; // Tailwind CSS classes for styles
  onClick?: () => void; // Optional click handler
}