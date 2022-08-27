import { Line } from "../styles/components/SeparatingLine";
import { SeparatingLineProps } from "../types/SeparatingLine";

export default function SeparatingLine({
  light,
  thin,
  always,
}: SeparatingLineProps) {
  return <Line light={light} thin={thin} always={always} data-testid="Line" />;
}
