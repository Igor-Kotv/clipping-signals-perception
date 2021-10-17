import styled from "styled-components";
import { Value } from "../common/text";

interface Props {
  onInput: (value: number) => void;
  onMouseUp?: () => void;
  label: string;
  maxValue: number;
  minValue: number;
  value: number;
  step?: number;
  disabled?: boolean;
}

const Wrapper = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
  gap: 0.5rem;
  margin-top: auto;
`;

const Container = styled.div`
  width: 14rem;
  display: flex;
  flex-direction: column;
`;

const Slider: React.FC<Props> = ({
  onInput,
  label,
  maxValue,
  minValue,
  value,
  onMouseUp,
  step = 1,
  disabled = false,
}: Props) => {
  return (
    <Wrapper>
      <Value>{value}</Value>
      <Container>
        <label htmlFor="slider" id="durln">
          {label}
        </label>
        <input
          type="range"
          min={minValue}
          step={step}
          max={maxValue}
          id="slider"
          value={value}
          onInput={(event: React.FormEvent<HTMLInputElement>) =>
            onInput(+event.currentTarget.value)
          }
          onMouseUp={onMouseUp}
          disabled={disabled}
        />
      </Container>
    </Wrapper>
  );
};

export default Slider;
