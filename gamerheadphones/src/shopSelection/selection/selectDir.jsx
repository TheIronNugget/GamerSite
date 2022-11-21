import SelectItems from'./selectItems';

import './selectDir.scss';

const SelectDir = ({ selection }) => {
  return (
    <div className="selection-container">
        {selection.map((select) => (
            <SelectItems key={select.id} select={select} />
        ))}
    </div>
  );
};

export default SelectDir;