import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Dropdown } from "react-bootstrap";
import styled from "styled-components";
import { Sample } from "../data";
import { selectSample } from "./slice";

interface Props {
  data: Sample[];
  disabled?: boolean;
}

const DropDownTitle = styled.span`
  display: inline-block;
  width: 8rem;
  text-align: left;
  padding-left: 0.5rem;
  user-select: none;
`;

const DropDownMenu: React.FC<Props> = ({ data, disabled }: Props) => {
  const dispatch = useDispatch();
  const [selectedSampleName, setSelectedSampleName] = useState<string>(
    data[0].name
  );

  useEffect(() => {
    if (!disabled) {
      dispatch(selectSample(data[0].name));
    }
  }, [disabled, data, dispatch]);

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="outline-secondary"
        disabled={disabled}
        id="dropdown-basic"
      >
        <DropDownTitle>{selectedSampleName}</DropDownTitle>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {data.map((item) => (
          <Dropdown.Item
            key={item.name}
            onClick={() => {
              setSelectedSampleName(item.name);
              dispatch(selectSample(item.name));
            }}
          >
            <DropDownTitle>{item.name}</DropDownTitle>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDownMenu;
