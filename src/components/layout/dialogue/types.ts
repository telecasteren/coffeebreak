export interface DialogueProps {
  className: string;
  buttonText: string;
  title: string;
  content: string;
  subcontent?: string;
  media?: {
    src: string;
    alt: string;
  }[];
  urls?: {
    title: string;
    src: string;
  }[];
}

export interface ControllersProps {
  onClick: () => void;
  direction: "prev" | "next";
  disabled: boolean;
}
