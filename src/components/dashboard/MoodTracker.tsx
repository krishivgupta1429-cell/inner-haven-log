import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Smile, Zap, AlertTriangle } from "lucide-react";

const MoodTracker = () => {
  const [mood, setMood] = useState("😐");
  const [stress, setStress] = useState([5]);
  const [energy, setEnergy] = useState([5]);

  const moods = ["😫", "😔", "😐", "😊", "😄"];
  
  const handleSave = () => {
    // This would integrate with your backend once Supabase is connected
    console.log({ mood, stress: stress[0], energy: energy[0] });
  };

  return (
    <Card className="bg-gradient-wellness shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Smile className="w-5 h-5 text-wellness-mood" />
          <span>How are you feeling today?</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Mood Selector */}
        <div>
          <label className="text-sm font-medium text-foreground mb-3 block">
            Select your mood
          </label>
          <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
            {moods.map((emojiMood, index) => (
              <button
                key={index}
                onClick={() => setMood(emojiMood)}
                className={`text-2xl p-2 rounded-lg transition-all duration-200 ${
                  mood === emojiMood 
                    ? 'bg-primary scale-110 shadow-medium' 
                    : 'hover:scale-105 hover:bg-muted'
                }`}
              >
                {emojiMood}
              </button>
            ))}
          </div>
        </div>

        {/* Stress Level */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-foreground flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-wellness-stress" />
              <span>Stress Level</span>
            </label>
            <span className="text-sm font-medium text-wellness-stress">{stress[0]}/10</span>
          </div>
          <Slider
            value={stress}
            onValueChange={setStress}
            max={10}
            min={1}
            step={1}
            className="w-full"
          />
        </div>

        {/* Energy Level */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-foreground flex items-center space-x-2">
              <Zap className="w-4 h-4 text-wellness-energy" />
              <span>Energy Level</span>
            </label>
            <span className="text-sm font-medium text-wellness-energy">{energy[0]}/10</span>
          </div>
          <Slider
            value={energy}
            onValueChange={setEnergy}
            max={10}
            min={1}
            step={1}
            className="w-full"
          />
        </div>

        <Button 
          onClick={handleSave}
          variant="wellness" 
          className="w-full"
        >
          Save Today's Mood
        </Button>
      </CardContent>
    </Card>
  );
};

export default MoodTracker;