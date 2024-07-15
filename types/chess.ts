export type BoardOrientation = "white" | "black";


export type Arrow = [string, string];
export type Move = {
  color: string;
  from: string;
  to: string;
  flags: string;
  piece: string;
  san: string;
  captured?: string;
  promotion?: string;
};

