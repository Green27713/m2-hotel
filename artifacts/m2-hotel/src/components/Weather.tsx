import { useEffect, useState } from "react";
import { Cloud, CloudDrizzle, CloudFog, CloudLightning, CloudRain, CloudSnow, CloudSun, Sun, Wind, Droplets } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface WeatherData {
  current: {
    temperature_2m: number;
    weather_code: number;
    wind_speed_10m: number;
    relative_humidity_2m: number;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
  };
}

export function WeatherWidget() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=7.8956&longitude=98.2978&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=Asia/Bangkok"
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Failed to fetch weather", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  const getWeatherInfo = (code: number) => {
    if (code === 0) return { label: "Clear Sky", icon: Sun };
    if (code <= 3) return { label: "Partly Cloudy", icon: CloudSun };
    if (code <= 48) return { label: "Foggy", icon: CloudFog };
    if (code <= 55) return { label: "Drizzle", icon: CloudDrizzle };
    if (code <= 65) return { label: "Rain", icon: CloudRain };
    if (code <= 77) return { label: "Snow", icon: CloudSnow };
    if (code <= 82) return { label: "Heavy Rain", icon: CloudRain };
    if (code <= 99) return { label: "Thunderstorm", icon: CloudLightning };
    return { label: "Cloudy", icon: Cloud };
  };

  if (loading || !data) {
    return (
      <Card className="w-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm animate-pulse">
        <CardContent className="p-6">
          <div className="h-32 bg-muted/50 rounded" />
        </CardContent>
      </Card>
    );
  }

  const currentInfo = getWeatherInfo(data.current.weather_code);
  const CurrentIcon = currentInfo.icon;

  return (
    <Card className="w-full overflow-hidden border-border/50 bg-card shadow-sm">
      <div className="bg-primary/5 p-6 border-b border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <CurrentIcon size={64} className="text-secondary" strokeWidth={1.5} />
          <div>
            <h3 className="text-sm font-medium tracking-wider text-muted-foreground uppercase mb-1">Current Weather</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-light tracking-tighter">{Math.round(data.current.temperature_2m)}°</span>
              <span className="text-lg text-foreground/80">{currentInfo.label}</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-8 text-sm">
          <div className="flex flex-col items-center gap-2">
            <Wind size={20} className="text-muted-foreground" />
            <span className="font-medium">{Math.round(data.current.wind_speed_10m)} km/h</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Droplets size={20} className="text-muted-foreground" />
            <span className="font-medium">{Math.round(data.current.relative_humidity_2m)}%</span>
          </div>
        </div>
      </div>
      
      <CardContent className="p-0">
        <div className="grid grid-cols-3 divide-x divide-border/50">
          {data.daily.time.slice(1, 4).map((time, idx) => {
            const index = idx + 1;
            const info = getWeatherInfo(data.daily.weather_code[index]);
            const Icon = info.icon;
            const date = new Date(time);
            
            return (
              <div key={time} className="p-4 flex flex-col items-center text-center gap-3">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {date.toLocaleDateString("en-US", { weekday: "short" })}
                </span>
                <Icon size={28} className="text-foreground/70" strokeWidth={1.5} />
                <div className="flex gap-2 text-sm">
                  <span className="font-medium">{Math.round(data.daily.temperature_2m_max[index])}°</span>
                  <span className="text-muted-foreground">{Math.round(data.daily.temperature_2m_min[index])}°</span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
