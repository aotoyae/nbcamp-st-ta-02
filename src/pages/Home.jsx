import { useSelector } from "react-redux";
import List from "../components/List";
import InputArea from "../components/InputArea";

const Home = () => {
  const todos = useSelector((item) => item.todos);
  console.log(todos);

  return (
    <div>
      <InputArea />
      <List isActive={true} />
      <List isActive={false} />
    </div>
  );
};

export default Home;
