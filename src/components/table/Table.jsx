import "./table.scss";

const Table = () => {
  return (
    <div className="table">
      <div className="container">
        <div className="table_wrapper">
          <div className="table_wrapper_heading">
            <h2>Electrical Characteristics</h2>
          </div>
          <div className="table_wrapper_inner">
            <table>
              <tbody>
                <tr>
                  <td className="col1">Model Number</td>
                  <td>R325P</td>
                  <td>R330P</td>
                  <td>R335P</td>
                </tr>
                <tr>
                  <td className="col1">Minimum Power At STC(Pmax)</td>
                  <td>325</td>
                  <td>330</td>
                  <td>335</td>
                </tr>
                <tr>
                  <td className="col1">Optimal Operating Voltage(Vmp)</td>
                  <td>38.16</td>
                  <td>38.16</td>
                  <td>38.16</td>
                </tr>
                <tr>
                  <td className="col1">Optimal Operating Current(Imp)</td>
                  <td>8.52</td>
                  <td>8.65</td>
                  <td>8.79</td>
                </tr>
                <tr>
                  <td className="col1">Open Circuit Voltage(Voc)</td>
                  <td>46.20</td>
                  <td>46.20</td>
                  <td>46.20</td>
                </tr>
                <tr>
                  <td className="col1">Short Circuit Current(Isc)</td>
                  <td>8.90</td>
                  <td>9.04</td>
                  <td>9.18</td>
                </tr>
                <tr>
                  <td className="col1">Module Efficiency(%)</td>
                  <td>16.75</td>
                  <td>17.00</td>
                  <td>17.25</td>
                </tr>
                <tr>
                  <td className="col1">Cell Type & No. of Cell</td>
                  <td colSpan={3}>Poly 72 Full Cells</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="note">
            Note: (irradiances of 1000 W/m², spectrum AM 1.5 and cell
            temperature of 25°C)
          </div>
        </div>
      </div>
    </div>
  );
};
export default Table;
