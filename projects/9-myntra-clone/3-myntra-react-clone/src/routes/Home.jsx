import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";
const Home = () => {
  const items = useSelector((store) => store.items);
  console.log("got items", items);

  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <HomeItem item={item} key={item.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
