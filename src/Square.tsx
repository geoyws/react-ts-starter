export interface SquareProp {
  value: number;
}

export default function Square(prop: SquareProp) {
  return <div>I am a square that has a value of {prop.value}.</div>;
}

// something
