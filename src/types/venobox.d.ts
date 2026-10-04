declare module "venobox" {
  export interface VenoBoxOptions {
    selector?: string;
    autoplay?: boolean;
    bgcolor?: string;
    border?: string;
    customClass?: string | false;
    fitView?: boolean;
    focusItem?: boolean;
    infinigall?: boolean;
    maxWidth?: string;
    navigation?: boolean;
    navKeyboard?: boolean;
    navTouch?: boolean;
    navSpeed?: number;
    numeration?: boolean;
    overlayClose?: boolean;
    overlayColor?: string;
    popup?: string | false;
    ratio?: "1x1" | "4x3" | "16x9" | "21x9" | "full";
    share?: boolean;
    shareStyle?: "block" | "pill" | "transparent" | "bar";
    spinColor?: string;
    spinner?: string;
    titleattr?: string;
    titlePosition?: "top" | "bottom";
    titleStyle?: string;
    toolsBackground?: string;
    initialScale?: number;
    transitionSpeed?: number;
    onInit?: (venobox: VenoBoxInstance) => void;
  }

  export interface VenoBoxInstance {
    open: (link?: Element | null) => void;
    close: () => void;
    next: () => void;
    prev: () => void;
    settings: VenoBoxOptions;
  }

  const VenoBox: new (options?: VenoBoxOptions) => VenoBoxInstance;

  export default VenoBox;
}

declare module "venobox/src/venobox.esm.js" {
  export interface VenoBoxOptions {
    selector?: string;
    autoplay?: boolean;
    bgcolor?: string;
    border?: string;
    customClass?: string | false;
    fitView?: boolean;
    focusItem?: boolean;
    infinigall?: boolean;
    maxWidth?: string;
    navigation?: boolean;
    navKeyboard?: boolean;
    navTouch?: boolean;
    navSpeed?: number;
    numeration?: boolean;
    overlayClose?: boolean;
    overlayColor?: string;
    popup?: string | false;
    ratio?: "1x1" | "4x3" | "16x9" | "21x9" | "full";
    share?: boolean;
    shareStyle?: "block" | "pill" | "transparent" | "bar";
    spinColor?: string;
    spinner?: string;
    titleattr?: string;
    titlePosition?: "top" | "bottom";
    titleStyle?: string;
    toolsBackground?: string;
    initialScale?: number;
    transitionSpeed?: number;
    onInit?: (venobox: VenoBoxInstance) => void;
  }

  export interface VenoBoxInstance {
    open: (link?: Element | null) => void;
    close: () => void;
    next: () => void;
    prev: () => void;
    settings: VenoBoxOptions;
  }

  const VenoBox: new (options?: VenoBoxOptions) => VenoBoxInstance;

  export default VenoBox;
}