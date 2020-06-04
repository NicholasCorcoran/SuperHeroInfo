import * as React from "react";
import "../../App.css";
import { searchTitle } from "../../http";
//import { useHistory } from "react-router";

interface SearchInfo {
  mal_id: number | undefined;
  name: string;
}

export const Home: React.FC = () => {
  const [data, setData] = React.useState<Array<SearchInfo>>([]);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    searchTitle().then(setData);
  }, []);

  // let history = useHistory();

  return (
    <div className="App">
      <div>
        {data.map((x: SearchInfo, index: number) => (x.mal_id, x.name))}
      </div>
    </div>
  );
};
