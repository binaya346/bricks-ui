export interface ButtonProps {
  children?: React.ReactNode;
  type?: "primary" | "danger" | "warning" | "success" | "default" | "dashed";
  className?: string;
  size?: "large" | "small" | "medium";
  shape?: "circle" | "round";
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  href?: string;
  disabled?: boolean;
  block?: boolean;
}
export interface TooltipProps {
  children: React.ReactNode;
  placement?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "topRight"
    | "topLeft"
    | "bottomRight"
    | "bottomLeft"
    | "rightTop"
    | "rightBottom"
    | "leftTop"
    | "leftBottom";
  text: string;
}
export interface MainLayouts {
  children?: React.ReactNode;
}
