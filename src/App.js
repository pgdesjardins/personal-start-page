import "./styles.css";
import data from "./Data";
import Group from "./comp/Group";

export default function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        {data.map((group) => (
          <Group {...group} key={group.name} />
        ))}
      </div>
    </div>
  );
}
