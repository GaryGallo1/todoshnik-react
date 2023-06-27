import React from 'react';

export const ListItem = ({ text, completed, index, onToggleCompleted, onRemoveTask }) => {
  const toggleCompleted = () => {
    onToggleCompleted(index);
  };

  const removeTask = () => {
    if (global.confirm('Вы действительно хотите удалить?')) {
      onRemoveTask(index);
    }
  };

  return (
    <div className={`todo__list-item ${completed ? 'todo__list-item--completed' : ''}`}>
      <div onClick={toggleCompleted} className="todo__list-item-check">
        <svg
          width="10" 
          viewBox="0 0 10 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
        </svg>
      </div>
      <p>{text}</p>
      <div onClick={removeTask} className="todo__list-item-remove">
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.43434 0.26763C8.60579 0.0968096 8.83724 0.000672966 9.07865 3.51967e-06C9.32006 -0.000665926 9.55204 0.0941856 9.72442 0.264052C9.89681 0.433918 9.99575 0.665151 9.99987 0.907757C10.004 1.15036 9.91293 1.38485 9.74641 1.56052L4.85587 7.70484C4.77182 7.79584 4.67038 7.86886 4.55761 7.91955C4.44483 7.97023 4.32305 7.99754 4.19954 7.99984C4.07602 8.00214 3.95332 7.97938 3.83876 7.93293C3.72419 7.88647 3.62013 7.81727 3.53278 7.72947L0.292438 4.47138C0.202165 4.38683 0.12976 4.28488 0.0795416 4.1716C0.029323 4.05832 0.0023197 3.93603 0.000142992 3.81203C-0.00203372 3.68803 0.0206608 3.56487 0.0668722 3.44987C0.113084 3.33488 0.181865 3.23042 0.269114 3.14273C0.356363 3.05504 0.460292 2.98591 0.5747 2.93946C0.689108 2.89301 0.811652 2.8702 0.935022 2.87239C1.05839 2.87458 1.18006 2.90172 1.29277 2.95219C1.40547 3.00267 1.50691 3.07544 1.59103 3.16617L4.15635 5.74334L8.41107 0.294719C8.41866 0.285181 8.42684 0.276133 8.43557 0.26763H8.43434Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};
