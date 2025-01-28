import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { format } from "date-fns";

interface BookingSummaryProps {
  product: string;
  state: string;
  accountManager: string;
  bdm: string;
  date?: Date;
  time: string | null;
}

const BookingSummary = ({
  product,
  state,
  accountManager,
  bdm,
  date,
  time,
}: BookingSummaryProps) => {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">Booking Summary</h3>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="text-sm text-muted-foreground">Product Demo</p>
            <p className="font-medium">{product || "Not selected"}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">State</p>
            <p className="font-medium">{state || "Not selected"}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Account Manager</p>
            <p className="font-medium">{accountManager || "Not selected"}</p>
          </div>
          {bdm && (
            <div>
              <p className="text-sm text-muted-foreground">BDM</p>
              <p className="font-medium">{bdm}</p>
            </div>
          )}
          {date && time && (
            <>
              <div>
                <p className="text-sm text-muted-foreground">Date</p>
                <p className="font-medium">{format(date, "MMMM d, yyyy")}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Time</p>
                <p className="font-medium">{time}</p>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingSummary;