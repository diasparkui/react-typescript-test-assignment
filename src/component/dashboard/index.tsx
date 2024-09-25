
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import leftIcon from "../../assets/images/left-icon.svg";
import RightIcon from "../../assets/images/right-icon.svg";
import "./index.scss";
const Dashboard = () => {
  const options = {
    chart: {
      type: 'column',
      height: 400,
    },
    title: {
      text: ''
    },
    series: [
      {
        showInLegend: false,
        color: '#4472C4',
        data: [400, 800, 300, 200, 900, 400, 700, 600, 300, 200, 400, 400, 400, 800, 300, 200, 900, 400, 700, 600, 300, 200, 400, 400]
      },
      {
        showInLegend: false,
        color: '#4472C4',
        data: [800, 200, 300, 400, 500, 600, 500, 300, 600, 400, 200, 800, 800, 200, 300, 400, 500, 600, 500, 300, 600, 400, 200, 800,]
      },
      {
        showInLegend: false,
        color: '#ED7D31',
        data: [700, 600, 900, 500, 400, 800, 700, 600, 900, 500, 400, 500, 700, 600, 900, 500, 400, 800, 700, 600, 900, 500, 400, 500,]
      },
      {
        showInLegend: false,
        color: '#ED7D31',
        data: [800, 200, 300, 400, 500, 600, 500, 300, 600, 400, 200, 300, 800, 200, 300, 400, 500, 600, 500, 300, 600, 400, 200, 300,]
      },
      {
        showInLegend: false,
        color: '#ED7D31',
        data: [700, 600, 900, 500, 400, 800, 700, 600, 900, 500, 400, 800, 700, 600, 900, 500, 400, 800, 700, 600, 900, 500, 400, 800,]
      },
      {
        showInLegend: false,
        color: '#A5A5A5',
        data: [800, 200, 300, 400, 500, 600, 500, 300, 600, 400, 200, 400, 800, 200, 300, 400, 500, 600, 500, 300, 600, 400, 200, 400,]
      },
      {
        showInLegend: false,
        color: '#FFC000',
        data: [700, 600, 900, 500, 400, 800, 700, 600, 900, 500, 400, 600, 700, 600, 900, 500, 400, 800, 700, 600, 900, 500, 400, 600,]
      },
    ],
    xAxis: [{
      labels: {
        enabled: false
      },
      plotLines: [
        {
          width: 2,
          color: "#A09B9B",
          zIndex: 5,
        },
        {
          width: 2,
          color: "#A09B9B",
          zIndex: 5,
        }

      ]
    }]
  };
  return (
    <div className='dashboard-wrapper'>
      <div className="table-wrapper" style={{}}>
        <table cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th className='first-child-col'> <button className='arrow-button'>  <img src={leftIcon} alt="icon" title="icon" /></button> </th>
              <th> Year 2023 </th>
              <th> Year 2024 </th>
              <th> Year 2023 </th>
              <th> Year 2024 </th>
              <th> Year 2023 </th>
              <th> Year 2024 </th>
              <th> Year 2023 </th>
              <th> Year 2024 </th>
              <th> Year 2023 </th>
              <th> Year 2024 </th>
              <th> Year 2023 </th>
              <th> Year 2024 </th>
              <th> Year 2023 </th>
              <th> Year 2024 </th>
              <th> Year 2023 </th>
              <th> Year 2024 </th>
              <th> Year 2023 </th>
              <th> Year 2024 </th>
              <th> Year 2023 </th>
              <th> Year 2024 </th>
              <th> Year 2023 </th>
              <th> Year 2024 </th>
              <th> Year 2023 </th>
              <th> Year 2024 </th>
              <th className='last-child-col'> <button className='arrow-button'> <img src={RightIcon} alt="icon" title="icon" /> </button> </th>
            </tr>
          </thead>
          <tbody>
            <tr className='year-row'>
              <td></td>
              <td>$601.13 </td>
              <td>$601.13 </td>
              <td>$601.13 </td>
              <td>$601.13 </td>
              <td>$601.13 </td>
              <td>$601.13 </td>
              <td>$601.13 </td>
              <td>$601.13 </td>
              <td>$601.13 </td>
              <td>$601.13 </td>
              <td>$601.13 </td>
              <td>$601.13 </td>
              <td>$601.13 </td>
              <td>$601.13 </td>
              <td>$601.13 </td>
              <td>$601.13 </td>
              <td>$601.13 </td>
              <td>$601.13 </td>
              <td>$601.13 </td>
              <td>$601.13 </td>
              <td>$601.13 </td>
              <td>$601.13 </td>
              <td>$601.13 </td>
              <td>$601.13 </td>
              <td></td>
            </tr>
            <tr className='graph-row'>
              <td colSpan={25}>
                <HighchartsReact highcharts={Highcharts} options={options} />
              </td>
            </tr>
            <tr className='month-row'>
              <td></td>
              <td colSpan={2}>January</td>
              <td colSpan={2}>February</td>
              <td colSpan={2}>March</td>
              <td colSpan={2}>April</td>
              <td colSpan={2}>May</td>
              <td colSpan={2}>June</td>
              <td colSpan={2}>July</td>
              <td colSpan={2}>August</td>
              <td colSpan={2}>September</td>
              <td colSpan={2}>October</td>
              <td colSpan={2}>November</td>
              <td colSpan={2}>December</td>
            </tr>
            <tr>
              <td> <div className='color-shap-wrapp'> <span className='color-shap' style={{ backgroundColor: "#4472C4" }}></span> CBG </div> </td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
            </tr>
            <tr>
              <td> <div className='color-shap-wrapp'> <span className='color-shap' style={{ backgroundColor: "#ED7D31" }}></span> FM </div> </td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
            </tr>
            <tr>
              <td> <div className='color-shap-wrapp'> <span className='color-shap' style={{ backgroundColor: "#A5A5A5" }}></span> HR </div> </td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
              <td>$105.55</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Dashboard;