import List from "../components/List";

const Home = () => {
  return (
    <div>
      <form>
        <input type="text" />
        <input type="text" />
        <button>추가하기</button>
      </form>
      <List />
      <List />
    </div>
  );
};

export default Home;
