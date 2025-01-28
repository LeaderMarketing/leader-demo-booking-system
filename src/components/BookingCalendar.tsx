import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TechnicalExpert {
  name: string;
  phone: string;
  imageUrl: string;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

const mockTimeSlots: TimeSlot[] = [
  { time: "9:00 AM", available: true },
  { time: "10:00 AM", available: true },
  { time: "11:00 AM", available: false },
  { time: "2:00 PM", available: true },
  { time: "3:00 PM", available: true },
];

const mockExpert: TechnicalExpert = {
  name: "John D.",
  phone: "0400 123 456",
  imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
};

interface BookingCalendarProps {
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
  selectedTime: string | null;
  onSelectTime: (time: string) => void;
}

const BookingCalendar = ({
  selectedDate,
  onSelectDate,
  selectedTime,
  onSelectTime,
}: BookingCalendarProps) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={onSelectDate}
            className="rounded-md border"
          />
        </div>
        
        {selectedDate && (
          <div className="flex-1 space-y-4">
            <h3 className="text-lg font-semibold">Available Times</h3>
            <div className="grid grid-cols-2 gap-2">
              {mockTimeSlots.map((slot) => (
                <Button
                  key={slot.time}
                  variant={selectedTime === slot.time ? "default" : "outline"}
                  disabled={!slot.available}
                  onClick={() => onSelectTime(slot.time)}
                  className="w-full"
                >
                  {slot.time}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>

      {selectedDate && selectedTime && (
        <Card className="mt-6">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <img
                src={mockExpert.imageUrl}
                alt={mockExpert.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">Your Local Technical Expert</h3>
                <p className="text-muted-foreground">{mockExpert.name}</p>
                <p className="text-muted-foreground">{mockExpert.phone}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BookingCalendar;