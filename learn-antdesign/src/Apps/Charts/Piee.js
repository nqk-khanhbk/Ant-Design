import {
    useEffect,
    useState
} from "react";
import {
    Pie
} from "@ant-design/plots";

function Circle() {
    const [pieChart, setPieChart] = useState([]);
    useEffect(() => {
        const fetchApi = () => {
            fetch('http://localhost:4000/pie')
                .then(res => res.json())
                .then(data => {
                    setPieChart(data);
                })
        }
        fetchApi();
    }, []);
    console.log(pieChart);
    const config = {
        data: pieChart,
        angleField: "value",
        colorField: "type",
        radius: 0.8,
        legend: {
            color: {
                title: false,
                position: 'right',
                rowPadding: 5,
                layout: {
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                },
            },
        },
    }
    return ( <
        >
        <
        h2 > Charts Circle < /h2> <
        Pie {
            ...config
        }
        /> < /
        >
    )
}
export default Circle;