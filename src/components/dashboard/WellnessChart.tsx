import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp, Calendar } from "lucide-react";

const WellnessChart = () => {
  // Mock data - would be fetched from your database once Supabase is connected
  const data = [
    { day: 'Mon', mood: 6, stress: 7, energy: 5 },
    { day: 'Tue', mood: 7, stress: 5, energy: 6 },
    { day: 'Wed', mood: 5, stress: 8, energy: 4 },
    { day: 'Thu', mood: 8, stress: 4, energy: 7 },
    { day: 'Fri', mood: 6, stress: 6, energy: 6 },
    { day: 'Sat', mood: 9, stress: 2, energy: 8 },
    { day: 'Sun', mood: 8, stress: 3, energy: 9 },
  ];

  return (
    <Card className="bg-gradient-card shadow-soft">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span>Wellness Trends</span>
          </CardTitle>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>This week</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="day" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                domain={[0, 10]}
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="mood"
                stroke="hsl(var(--wellness-mood))"
                strokeWidth={3}
                dot={{ fill: "hsl(var(--wellness-mood))", strokeWidth: 2, r: 4 }}
                name="Mood"
              />
              <Line
                type="monotone"
                dataKey="energy"
                stroke="hsl(var(--wellness-energy))"
                strokeWidth={3}
                dot={{ fill: "hsl(var(--wellness-energy))", strokeWidth: 2, r: 4 }}
                name="Energy"
              />
              <Line
                type="monotone"
                dataKey="stress"
                stroke="hsl(var(--wellness-stress))"
                strokeWidth={3}
                dot={{ fill: "hsl(var(--wellness-stress))", strokeWidth: 2, r: 4 }}
                name="Stress"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-wellness-mood/10 rounded-lg">
            <div className="text-lg font-semibold text-foreground">7.1</div>
            <div className="text-sm text-muted-foreground">Avg Mood</div>
          </div>
          <div className="text-center p-3 bg-wellness-energy/10 rounded-lg">
            <div className="text-lg font-semibold text-foreground">6.4</div>
            <div className="text-sm text-muted-foreground">Avg Energy</div>
          </div>
          <div className="text-center p-3 bg-wellness-stress/10 rounded-lg">
            <div className="text-lg font-semibold text-foreground">5.0</div>
            <div className="text-sm text-muted-foreground">Avg Stress</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WellnessChart;