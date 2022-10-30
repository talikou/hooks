import { ListItem, UnorderedList } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function ItemsList({ getItems }: any) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = getItems();
    setItems(newItems);
  }, [getItems]);

  return (
    <UnorderedList>
      {items.map((i) => (
        <ListItem key={i}>{i}</ListItem>
      ))}
    </UnorderedList>
  );
}
