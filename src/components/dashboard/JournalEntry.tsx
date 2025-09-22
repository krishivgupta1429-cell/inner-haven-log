import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Edit, Save, X } from "lucide-react";
import { useState } from "react";

interface JournalEntryProps {
  id: string;
  date: string;
  time: string;
  content: string;
  mood: string;
  stress: number;
  energy: number;
  isEditing?: boolean;
}

const JournalEntry = ({ 
  id, 
  date, 
  time, 
  content, 
  mood, 
  stress, 
  energy, 
  isEditing = false 
}: JournalEntryProps) => {
  const [editing, setEditing] = useState(isEditing);
  const [entryContent, setEntryContent] = useState(content);

  const getMoodColor = (mood: string) => {
    const moodColors: { [key: string]: string } = {
      "😊": "bg-wellness-energy",
      "😔": "bg-wellness-stress", 
      "😐": "bg-muted",
      "😄": "bg-success",
      "😰": "bg-warning"
    };
    return moodColors[mood] || "bg-muted";
  };

  const getStressColor = (level: number) => {
    if (level <= 3) return "bg-success";
    if (level <= 6) return "bg-warning";
    return "bg-destructive";
  };

  const getEnergyColor = (level: number) => {
    if (level <= 3) return "bg-muted";
    if (level <= 6) return "bg-wellness-energy";
    return "bg-success";
  };

  return (
    <Card className="hover:shadow-medium transition-all duration-300 bg-gradient-card">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{time}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {!editing ? (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setEditing(true)}
              >
                <Edit className="w-4 h-4" />
              </Button>
            ) : (
              <div className="flex space-x-1">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setEditing(false)}
                >
                  <Save className="w-4 h-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => {
                    setEditing(false);
                    setEntryContent(content);
                  }}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Wellness indicators */}
        <div className="flex items-center space-x-4 mt-3">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Mood:</span>
            <Badge className={`${getMoodColor(mood)} text-foreground border-0`}>
              {mood}
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Stress:</span>
            <Badge className={`${getStressColor(stress)} text-white border-0`}>
              {stress}/10
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Energy:</span>
            <Badge className={`${getEnergyColor(energy)} text-white border-0`}>
              {energy}/10
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {editing ? (
          <Textarea
            value={entryContent}
            onChange={(e) => setEntryContent(e.target.value)}
            className="min-h-[100px] resize-none border-border focus:border-primary transition-smooth"
            placeholder="Share your thoughts and feelings..."
          />
        ) : (
          <p className="text-foreground leading-relaxed whitespace-pre-wrap">
            {entryContent}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default JournalEntry;