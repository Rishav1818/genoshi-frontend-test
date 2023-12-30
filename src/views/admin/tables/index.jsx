import CheckTable from "./components/CheckTable";

import { columnsDataCheck, columnsDataColumns } from "./variables/columnsData";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataColumns from "./variables/tableDataColumns.json";
import ColumnsTable from "./components/ColumnsTable";

const Tables = () => {
  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        />
      </div>

      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2"></div>
    </div>
  );
};

export default Tables;
