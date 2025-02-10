import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

const chartData = [
  { date: '2024-04-01', ontime: 222, late: 150 },
  { date: '2024-04-02', ontime: 97, late: 180 },
  { date: '2024-04-03', ontime: 167, late: 120 },
  { date: '2024-04-04', ontime: 242, late: 260 },
  { date: '2024-04-05', ontime: 373, late: 290 },
  { date: '2024-04-06', ontime: 301, late: 340 },
  { date: '2024-04-07', ontime: 245, late: 180 },
  { date: '2024-04-08', ontime: 409, late: 320 },
  { date: '2024-04-09', ontime: 59, late: 110 },
  { date: '2024-04-10', ontime: 261, late: 190 },
  { date: '2024-04-11', ontime: 327, late: 350 },
  { date: '2024-04-12', ontime: 292, late: 210 },
  { date: '2024-04-13', ontime: 342, late: 380 },
  { date: '2024-04-14', ontime: 137, late: 220 },
  { date: '2024-04-15', ontime: 120, late: 170 },
  { date: '2024-04-16', ontime: 138, late: 190 },
  { date: '2024-04-17', ontime: 446, late: 360 },
  { date: '2024-04-18', ontime: 364, late: 410 },
  { date: '2024-04-19', ontime: 243, late: 180 },
  { date: '2024-04-20', ontime: 89, late: 150 },
  { date: '2024-04-21', ontime: 137, late: 200 },
  { date: '2024-04-22', ontime: 224, late: 170 },
  { date: '2024-04-23', ontime: 138, late: 230 },
  { date: '2024-04-24', ontime: 387, late: 290 },
  { date: '2024-04-25', ontime: 215, late: 250 },
  { date: '2024-04-26', ontime: 75, late: 130 },
  { date: '2024-04-27', ontime: 383, late: 420 },
  { date: '2024-04-28', ontime: 122, late: 180 },
  { date: '2024-04-29', ontime: 315, late: 240 },
  { date: '2024-04-30', ontime: 454, late: 380 },
  { date: '2024-05-01', ontime: 165, late: 220 },
  { date: '2024-05-02', ontime: 293, late: 310 },
  { date: '2024-05-03', ontime: 247, late: 190 },
  { date: '2024-05-04', ontime: 385, late: 420 },
  { date: '2024-05-05', ontime: 481, late: 390 },
  { date: '2024-05-06', ontime: 498, late: 520 },
  { date: '2024-05-07', ontime: 388, late: 300 },
  { date: '2024-05-08', ontime: 149, late: 210 },
  { date: '2024-05-09', ontime: 227, late: 180 },
  { date: '2024-05-10', ontime: 293, late: 330 },
  { date: '2024-05-11', ontime: 335, late: 270 },
  { date: '2024-05-12', ontime: 197, late: 240 },
  { date: '2024-05-13', ontime: 197, late: 160 },
  { date: '2024-05-14', ontime: 448, late: 490 },
  { date: '2024-05-15', ontime: 473, late: 380 },
  { date: '2024-05-16', ontime: 338, late: 400 },
  { date: '2024-05-17', ontime: 499, late: 420 },
  { date: '2024-05-18', ontime: 315, late: 350 },
  { date: '2024-05-19', ontime: 235, late: 180 },
  { date: '2024-05-20', ontime: 177, late: 230 },
  { date: '2024-05-21', ontime: 82, late: 140 },
  { date: '2024-05-22', ontime: 81, late: 120 },
  { date: '2024-05-23', ontime: 252, late: 290 },
  { date: '2024-05-24', ontime: 294, late: 220 },
  { date: '2024-05-25', ontime: 201, late: 250 },
  { date: '2024-05-26', ontime: 213, late: 170 },
  { date: '2024-05-27', ontime: 420, late: 460 },
  { date: '2024-05-28', ontime: 233, late: 190 },
  { date: '2024-05-29', ontime: 78, late: 130 },
  { date: '2024-05-30', ontime: 340, late: 280 },
  { date: '2024-05-31', ontime: 178, late: 230 },
  { date: '2024-06-01', ontime: 178, late: 200 },
  { date: '2024-06-02', ontime: 470, late: 410 },
  { date: '2024-06-03', ontime: 103, late: 160 },
  { date: '2024-06-04', ontime: 439, late: 380 },
  { date: '2024-06-05', ontime: 88, late: 140 },
  { date: '2024-06-06', ontime: 294, late: 250 },
  { date: '2024-06-07', ontime: 323, late: 370 },
  { date: '2024-06-08', ontime: 385, late: 320 },
  { date: '2024-06-09', ontime: 438, late: 480 },
  { date: '2024-06-10', ontime: 155, late: 200 },
  { date: '2024-06-11', ontime: 92, late: 150 },
  { date: '2024-06-12', ontime: 492, late: 420 },
  { date: '2024-06-13', ontime: 81, late: 130 },
  { date: '2024-06-14', ontime: 426, late: 380 },
  { date: '2024-06-15', ontime: 307, late: 350 },
  { date: '2024-06-16', ontime: 371, late: 310 },
  { date: '2024-06-17', ontime: 475, late: 520 },
  { date: '2024-06-18', ontime: 107, late: 170 },
  { date: '2024-06-19', ontime: 341, late: 290 },
  { date: '2024-06-20', ontime: 408, late: 450 },
  { date: '2024-06-21', ontime: 169, late: 210 },
  { date: '2024-06-22', ontime: 317, late: 270 },
  { date: '2024-06-23', ontime: 480, late: 530 },
  { date: '2024-06-24', ontime: 132, late: 180 },
  { date: '2024-06-25', ontime: 141, late: 190 },
  { date: '2024-06-26', ontime: 434, late: 380 },
  { date: '2024-06-27', ontime: 448, late: 490 },
  { date: '2024-06-28', ontime: 149, late: 200 },
  { date: '2024-06-29', ontime: 103, late: 160 },
  { date: '2024-06-30', ontime: 446, late: 400 },
];

const chartConfig = {
  ontime: {
    label: 'ontime',
    color: 'hsl(var(--chart-1))',
    icon: TrendingDown,
  },
  late: {
    label: 'late',
    color: 'hsl(var(--chart-2))',
    icon: TrendingUp,
  },
} satisfies ChartConfig;

const AbsensiChart = () => {
  const [timeRange, setTimeRange] = useState('30d');
  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date('2024-06-30');
    let daysToSubtract = 90;
    if (timeRange === '30d') {
      daysToSubtract = 30;
    } else if (timeRange === '7d') {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });
  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Grafik kehadiran karyawan</CardTitle>
          <CardDescription>Data diperbarui setiap 1 hari</CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[300px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillontime" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-ontime)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-ontime)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="filllate" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-late)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-late)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="late"
              type="natural"
              fill="url(#filllate)"
              stroke="var(--color-late)"
              stackId="a"
            />
            <Area
              dataKey="ontime"
              type="natural"
              fill="url(#fillontime)"
              stroke="var(--color-ontime)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default AbsensiChart;
