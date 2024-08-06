import CustomizedDotLineChart from '@/components/chart-widgets/customized-dot-line-chart';
import CustomShapeBarChart from '@/components/chart-widgets/custom-shape-bar-chart';
import CustomizedMixChart from '@/components/chart-widgets/customized-mix-chart';
import StackedAreaChart from '@/components/chart-widgets/stacked-area-chart';
import SimpleRadarChart from '@/components/chart-widgets/simple-radar-chart';
import SimpleLineChart from '@/components/chart-widgets/simple-line-chart';
import SimpleAreaChart from '@/components/chart-widgets/simple-area-chart';
import SimpleBarChart from '@/components/chart-widgets/simple-bar-chart';
import RadialBarChart from '@/components/chart-widgets/radial-bar-chart';
import BrushBarChart from '@/components/chart-widgets/brush-bar-chart';
import MixBarChart from '@/components/chart-widgets/mix-bar-chart';

export default function ChartWidgets() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 3xl:gap-8">
      <SimpleLineChart />
      <CustomizedDotLineChart />
      <SimpleBarChart />
      <MixBarChart />
      <CustomShapeBarChart />
      <BrushBarChart />
      <SimpleAreaChart />
      <StackedAreaChart />
      <SimpleRadarChart />
      <RadialBarChart />
      <CustomizedMixChart className="lg:col-span-2" />
    </div>
  );
}
