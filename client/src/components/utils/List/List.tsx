import React from "react";
import "./List.css";
interface ListProps {
  data: any[];
  children: React.FC<any>;
}
function List(props: ListProps) {
  if (props.data.length === 0) return null;
  const ListItem = props.children
  
  return (
    <div className="list">
      {props.data.map((item) => {
        return (
          <div className="list-item" key={"list "+"list item"+JSON.stringify(item)}>
            {/* //ListItem is props.children */}
            <ListItem data={item} />
          </div>
        );
      })}
    </div>
  );
}

export default List;
