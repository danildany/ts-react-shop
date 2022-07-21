import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";
export function Store() {
  return (
    <>
      <div className="container-store">
        {storeItems.map((item, index) => (
          <div className="wrapper-product" key={index}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </>
  );
}
