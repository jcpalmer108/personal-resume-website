import { Line } from '../styles/components/SeparatingLine'

type SeparatingLineProps = {
  thin?: boolean,
  light?: boolean
}

export default function SeparatingLine({ light, thin }: SeparatingLineProps) {
  return (<Line light={light} thin={thin} data-testid="Line" />)
}