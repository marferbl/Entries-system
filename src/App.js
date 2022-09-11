import { useEffect, useState } from "react";
import axios from "axios";
import EmployeeList from "./components/views/employee-list";
import { config } from "./utils/axios-config";

function App() {
  const [employeeList, setEmployeeList] = useState();

  useEffect(() => {
    getEntries();
  }, []);

  const getEntries = () => {
    axios.get(process.env.REACT_APP_BASE_URL, config).then((res) => setEmployeeList(res.data.data));
  };

  return (
    <div className="App">
      <EmployeeList employeeList={employeeList} getEntries={getEntries} />
    </div>
  );
}

export default App;
