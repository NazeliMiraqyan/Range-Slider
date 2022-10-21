export type PostPreviewProps = Partial<{
  initialPrice: number;
  max: number;
  min: number;
  recommendedLimit: number;
  onChange: (value: number) => void;
}>;

export interface Itheme {
  colors: {
    dusty_gray: string;
    gray: string;
    dark_gray: string;
    black: string;
    red: string;
    blue: string;
    green: string;
  };
}
