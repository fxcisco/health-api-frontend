import React, { ReactNode, useState } from 'react';

interface SelectProps {
  name?: string;
  children: ReactNode;
  onChange?: (val: any) => void;
}
export const SelectInput = ({ name, children, onChange }: SelectProps) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState<string>('');
  const onClick = (e: any) => {
    e.preventDefault();
    setShow(!show);
  };
  const onKey = (e: any) => {
    if(e.keyCode === 13){
      e.preventDefault();
      setShow(!show);
    }
  }
  const onSelect = (value: string) => (e: any) => {
    e.preventDefault();
    setValue(value);
    setShow(false);
    if(onChange) onChange(value);
  };

  const elementList: any[] = [];
  const activeClass = show ? 'active' : '';

  const applyChildren = () => {
    const optionsList = React.Children.map(children, (child: any, index) => {
      if (child.type === 'option') {
        const props = child.props;
        const option = React.cloneElement(child, {
          onClick: onClick,
          className: 'test',
        });
        elementList.push(
          <button
            key={props.value}
            className='btn'
            onClick={onSelect(props.value)}
          >
            {props.children}
          </button>
        );
        return option;
      }
      return null;
    });
    return (
      <React.Fragment>
        <select
          value={value}
          name={name}
          onChange={() => true}
          onKeyDown={onKey}
          onMouseDown={onClick}
        >
          {optionsList}
        </select>
      </React.Fragment>
    );
  };

  return (
    <div className={`input-select  ${activeClass}`}>
      {applyChildren()}
      <div className="select-overlay" onClick={onClick}/>
      <ul className={`selector-options`}>{elementList}</ul>
    </div>
  );
};