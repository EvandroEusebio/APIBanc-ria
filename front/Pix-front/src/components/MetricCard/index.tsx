import { Card } from '../ui/card';

export default function MetricCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <Card className="w-full rounded-2xl shadow-none">
      <div className="p-6">
        <div className="flex gap-5 items-start pb-3 mb-3 bitem-b-[1px]">
          <div className="p-5 rounded-2xl bg-cerulean-blue-950 shadow-md">
            {icon}
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-semibold">{value}</p>
            <p className="text-sm text-muted-foreground">{label}</p>
          </div>
        </div>
        <div>
          <div className="flex items-center text-muted-foreground text-sm">
            <p>Compare to yesterday</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
