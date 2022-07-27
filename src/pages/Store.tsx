import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";
export function Store() {
  return (
    <>
      <div className="container-store">
        {storeItems.map((item, index) => (
          <StoreItem {...item} key={index} />
        ))}
      </div>
    </>
  );
}
