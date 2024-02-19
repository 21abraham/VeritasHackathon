import React, { useEffect,useRef,useState } from 'react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell ,Sector} from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { gsap } from 'gsap/all';

    const data2 = [
  { name: 'Compute', value: 400 },
  { name: 'Data center', value: 300 },
  { name: 'Networking', value: 300 },
  { name: 'Storage', value: 200 },
  { name: 'IT Labor', value: 100 },
];
    const data3 = [
  { name: 'Compute', value: 100 },
  { name: 'Data center', value: 400 },
  { name: 'Networking', value: 500 },
  { name: 'Storage', value: 200 },
  { name: 'IT Labor', value: 400 },
];
    const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Premises ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};
const renderActiveShape2 = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Azure ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};
export default function Dashboard() {

const data = [
  {
    name: '0',
    Microsoft_Azure_Cost: 40000,
    On_premises_Cost: 24000,
    amt: 24000,
  },
  {
    name: '1 Year',
    Microsoft_Azure_Cost: 30000,
    On_premises_Cost: 13980,
    amt: 22100,
  },
  {
    name: '2 Year',
    Microsoft_Azure_Cost: 20000,
    On_premises_Cost: 98000,
    amt: 22900,
  },
  {
    name: '3 Year',
    Microsoft_Azure_Cost: 27800,
    On_premises_Cost: 39080,
    amt: 20000,
  },
  {
    name: '4 Year',
    Microsoft_Azure_Cost: 18900,
    On_premises_Cost: 48000,
    amt: 21810,
  },
  {
    name: '5 Year',
    Microsoft_Azure_Cost: 23900,
    On_premises_Cost: 38000,
    amt: 25000,
  },
];


  useEffect(() => {
      var tl=gsap.timeline();
      tl.from('.centerlayer', { opacity: 0, duration: 3 },"start");
tl.from('.leftlayer', { opacity: 0, duration: 3, x: -100 },"start");
tl.from('.rtcontainer', { opacity: 0, duration: 3, x: 100 },"start");
tl.from('.bcontainer', { opacity: 0, duration: 3, y: 100 },"start");
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const [activeIndex2, setActiveIndex2] = useState(0);

  const onPieEnter2 = (_, index2) => {
    setActiveIndex2(index2);
  };
    return (
        <div className="flex flex-col h-screen">
            <div className="grid grid-cols-3 w-full h-20">
                <div className="w-full h-full pl-8 flex items-center">
                    <Link>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                    </Link>
                </div>
                <div className="w-full h-full flex items-center justify-center relative">
                    <form className="relative">
                        <input
                            className="py-2 pl-4 w-96 h-12 rounded-3xl border-solid border-2 border-gray-400 focus:outline-none bg-transparent"
                            type="text"
                            placeholder="Search"
                        />
                        <button
                            className="bg-teal-400 duration-1000 hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-500/50 absolute right-1 top-1 h-10 rounded-full w-16 flex items-center justify-center"
                            type="submit"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>

                        </button>
                    </form>
                </div>
                <div className="w-full h-full flex items-center justify-end pr-8">
                    <select
                        className="h-12 px-4 border-solid border-white rounded-3xl bg-transparent w-32 border-0 focus:outline-none"
                        name="year"
                        id="year"
                    >
                        <option value="2022">AZURE</option>
                        <option value="2023">AWS</option>
                        <option value="2024">GCP</option>
                    </select>
                </div>
            </div>
            <div className="flex-1 w-full px-4 py-4">
                <div className="grid gap-4 grid-cols-3 w-full h-full rounded-3xl px-4 py-4">
                    <div className="leftlayer col-span-1 grid grid-rows-7 bg-white backdrop-blur-md bg-blur-md bg-opacity-30 border-solid border-white border-t-2 border-l-2 w-full h-full rounded-3xl">
                        <div className="row-span-1 w-full h-full rounded-3xl flex items-center justify-center">
                            <h className="text-xl tracking-widest bg-black text-white px-4 rounded-xl h-8">Total Cost of Ownership</h>
                        </div>
                        <div className="row-span-6 w-full h-full rounded-3xl">
                            <form className="grid grid-rows-6 w-full h-full rounded-b-3xl">
                                <div className="grid grid-cols-2 w-full h-full row-span-5">
                                    <div className="grid grid-rows-3 w-full h-full">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <select
                                                className="py-2 pl-4 w-56 h-12 rounded-3xl border-solid border-2 border-gray-400 focus:outline-none bg-transparent"
                                                name="Property Type"
                                                id="Type"
                                            >
                                                <option value="2022">Instance Memory</option>
                                                <option value="2023">1 GB</option>
                                                <option value="2024">1 TB</option>
                                            </select>
                                        </div>
                                        <div className="w-full h-full flex items-center justify-center">
                                            <select
                                                className="py-2 pl-4 w-56 h-12 rounded-3xl border-solid border-2 border-gray-400 focus:outline-none bg-transparent"
                                                name="Property Type"
                                                id="Type"
                                            >
                                                <option value="2022">vCPUs</option>
                                                <option value="2023">2</option>
                                                <option value="2024">6</option>
                                            </select>
                                        </div>
                                        <div className="w-full h-full flex items-center justify-center">
                                            <select
                                                className="py-2 pl-4 w-56 h-12 rounded-3xl border-solid border-2 border-gray-400 focus:outline-none bg-transparent"
                                                name="Property Type"
                                                id="Type"
                                            >
                                                <option value="2022">Operating System</option>
                                                <option value="2023">Linux</option>
                                                <option value="2024">Windows</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="grid grid-rows-3 w-full h-full">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <select
                                                className="py-2 pl-4 w-56 h-12 rounded-3xl border-solid border-2 border-gray-400 focus:outline-none bg-transparent"
                                                name="Property Type"
                                                id="Type"
                                            >
                                                <option value="2022">Region</option>
                                                <option value="2023">Central US</option>
                                                <option value="2024">East Asia</option>
                                            </select>
                                        </div>
                                        <div className="w-full h-full flex items-center justify-center">
                                            <select
                                                className="py-2 pl-4 w-56 h-12 rounded-3xl border-solid border-2 border-gray-400 focus:outline-none bg-transparent"
                                                name="Property Type"
                                                id="Type"
                                            >
                                                <option value="2022">Instance Storage</option>
                                                <option value="2023">HDD</option>
                                                <option value="2024">SDD</option>
                                            </select>
                                        </div>
                                        <div className="w-full h-full flex items-center justify-center">
                                            <select
                                                className="py-2 pl-4 w-56 h-12 rounded-3xl border-solid border-2 border-gray-400 focus:outline-none bg-transparent"
                                                name="Property Type"
                                                id="Type"
                                            >
                                                <option value="2022">Database</option>
                                                <option value="2023">MySQL</option>
                                                <option value="2024">Oracle</option>
                                            </select>
                                        </div>
                                    </div>
                            </div>
                            <div className="w-full h-full bg-transparent row-span-1 rounded-b-3xl flex justify-end">
                                    <button type="submit" className="hover:shadow-lg hover:shadow-lime-500/50 hover:bg-lime-300 duration-1000 w-32 flex items-center justify-center h-18 rounded-br-3xl">Calculate<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
</svg>

</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-span-2 grid gap-4 grid-rows-2 w-full h-full rounded-3xl">
                        <div className="grid gap-4 grid-cols-2 w-full h-full rounded-3xl">
                            <div className="centerlayer bg-white backdrop-blur-md bg-blur-md bg-opacity-30 border-solid border-white border-t-2 border-l-2 w-full h-full rounded-3xl grid grid-rows-5">
                                <div className="w-full h-full row-span-1 rounded-3xl flex justify-center items-center"><h className="text-xl tracking-widest bg-black text-white px-4 rounded-xl h-8">Total on-premises over 5 year(s)</h></div>
                                <div className="w-full h-full row-span-4 rounded-3xl flex justify-center items-center">
                                    <ResponsiveContainer width="100%" height="100%">
                                    <PieChart width={400} height={400}>
                                      <Pie
                                        activeIndex={activeIndex}
                                        activeShape={renderActiveShape}
                                        data={data2}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                        onMouseEnter={onPieEnter}
                                      />
                                    </PieChart>
                                  </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="rtcontainer bg-white backdrop-blur-md bg-blur-md bg-opacity-30 border-solid border-white border-t-2 border-l-2 w-full h-full rounded-3xl grid grid-rows-5">
                                <div className="w-full h-full row-span-1 rounded-3xl flex justify-center items-center"><h className="text-xl tracking-widest bg-black text-white px-4 rounded-xl h-8">Total Azure cost over 5 year(s)</h></div>
                                <div className="w-full h-full row-span-4 rounded-3xl flex justify-center items-center">
                                    <ResponsiveContainer width="100%" height="100%">
                                    <PieChart width={400} height={400}>
                                      <Pie
                                        activeIndex={activeIndex2}
                                        activeShape={renderActiveShape2}
                                        data={data3}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#82ca9d"
                                        dataKey="value"
                                        onMouseEnter={onPieEnter2}
                                      />
                                    </PieChart>
                                  </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                        <div className="bcontainer grid grid-rows-5 bg-white backdrop-blur-md bg-blur-md bg-opacity-30 border-solid border-white border-t-2 border-l-2 w-full h-full rounded-3xl">
                            <div className="row-span-1 w-full h-full rounded-3xl flex items-center justify-center">
                                <h className="text-xl tracking-widest bg-black text-white px-4 rounded-xl h-8">Total on-premises vs. Azure cost over time</h>
                            </div>
                            <div className="row-span-4 w-full h-full px-4 rounded-b-3xl">
                                <div className="w-full h-52 rounded-b-3xl overflow-y-auto">
                                    <LineChart width={900} height={200} data={data}
                                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                      <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis dataKey="name" />
                                      <YAxis />
                                      <Tooltip />
                                      <Legend />
                                      <Line type="monotone" dataKey="On_premises_Cost" stroke="#8884d8" />
                                      <Line type="monotone" dataKey="Microsoft_Azure_Cost" stroke="#82ca9d" />
                                    </LineChart>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blob w-[800px] h-[800px] rounded-full absolute bottom-0 right-0 -z-10 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 blur-2xl bg-opacity-50"></div>
            <div className="blob w-[1000px] h-[1000px] rounded-full absolute bottom-0 left-0 -z-10 bg-gradient-to-r from-red-200 via-gray-100 to-blue-100 blur-2xl bg-opacity-50"></div>
            <div className="blob w-[600px] h-[600px] rounded-full absolute bottom-0 left-0 -z-10 bg-gradient-to-r from-slate-100 via-teal-100 to-blue-100 blur-2xl bg-opacity-50"></div>
            <div className="blob w-[300px] h-[300px] rounded-full absolute bottom-0 left-0 -z-10 bg-gradient-to-r from-green-200 via-cyan-200 to-Fuchsia-300 blur-2xl bg-opacity-50"></div>
        </div>
    );
}