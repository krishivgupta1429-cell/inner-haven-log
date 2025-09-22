import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import JournalEntry from "./JournalEntry";
import MoodTracker from "./MoodTracker";
import AIChat from "./AIChat";
import WellnessChart from "./WellnessChart";
import { Plus, Calendar, TrendingUp, MessageCircle, BookOpen } from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [isNewEntry, setIsNewEntry] = useState(false);
  const [newEntryContent, setNewEntryContent] = useState("");

  // Mock data - would be fetched from your database once Supabase is connected
  const journalEntries = [
    {
      id: '1',
      date: 'Today',
      time: '2:30 PM',
      content: 'Had a really productive morning! Started with meditation and then tackled some work projects. Feeling grateful for the sunny weather and looking forward to a walk later.',
      mood: '😊',
      stress: 3,
      energy: 8
    },
    {
      id: '2',
      date: 'Yesterday',
      time: '6:45 PM',
      content: 'Work was overwhelming today with back-to-back meetings. Need to remember to take breaks and breathe. Grateful for my evening tea ritual - it helps me unwind.',
      mood: '😔',
      stress: 7,
      energy: 4
    },
    {
      id: '3',
      date: '2 days ago',
      time: '10:15 AM',
      content: 'Weekend vibes! Spent time in nature and felt so recharged. There\'s something magical about being surrounded by trees and fresh air.',
      mood: '😄',
      stress: 2,
      energy: 9
    }
  ];

  const handleSaveEntry = () => {
    if (newEntryContent.trim()) {
      // This would save to your database once Supabase is connected
      console.log('Saving new entry:', newEntryContent);
      setNewEntryContent("");
      setIsNewEntry(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary-soft/10">
      {/* Header */}
      <div className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Welcome back!</h1>
              <p className="text-muted-foreground">How are you feeling today?</p>
            </div>
            <Button 
              variant="hero" 
              onClick={() => setIsNewEntry(true)}
            >
              <Plus className="w-4 h-4" />
              New Entry
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Journal & Analytics */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-wellness-calm/20 border-wellness-calm/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Journal Streak</p>
                      <p className="text-2xl font-bold text-foreground">7 days</p>
                    </div>
                    <BookOpen className="w-8 h-8 text-wellness-calm" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-wellness-energy/20 border-wellness-energy/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Avg Energy</p>
                      <p className="text-2xl font-bold text-foreground">7.2/10</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-wellness-energy" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-wellness-mood/20 border-wellness-mood/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Mood Trend</p>
                      <p className="text-2xl font-bold text-foreground">↗️ Improving</p>
                    </div>
                    <MessageCircle className="w-8 h-8 text-wellness-mood" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Wellness Chart */}
            <WellnessChart />

            {/* Journal Entries */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">Your Journal</h2>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>This week</span>
                </div>
              </div>

              <div className="space-y-6">
                {/* New Entry Form */}
                {isNewEntry && (
                  <Card className="border-primary/50 shadow-glow">
                    <CardHeader>
                      <CardTitle className="text-foreground">New Journal Entry</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Textarea
                        value={newEntryContent}
                        onChange={(e) => setNewEntryContent(e.target.value)}
                        placeholder="What's on your mind today? Share your thoughts, feelings, and experiences..."
                        className="min-h-[120px] resize-none border-primary/30 focus:border-primary"
                      />
                      <div className="flex justify-end space-x-2">
                        <Button 
                          variant="ghost" 
                          onClick={() => {
                            setIsNewEntry(false);
                            setNewEntryContent("");
                          }}
                        >
                          Cancel
                        </Button>
                        <Button variant="hero" onClick={handleSaveEntry}>
                          Save Entry
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Existing Entries */}
                {journalEntries.map((entry) => (
                  <JournalEntry key={entry.id} {...entry} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Mood Tracker & AI Chat */}
          <div className="space-y-8">
            <MoodTracker />
            <AIChat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
