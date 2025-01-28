import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data - replace with real data
const teamMembers = {
  "Account Managers": [
    { id: "am1", name: "John D." },
    { id: "am2", name: "Sarah M." },
    { id: "am3", name: "Michael B." },
  ],
  "Business Development": [
    { id: "bdm1", name: "David R." },
    { id: "bdm2", name: "Emma S." },
    { id: "bdm3", name: "James P." },
  ],
};

interface TeamSelectorProps {
  selectedAM: string;
  selectedBDM: string;
  onAMSelect: (amId: string) => void;
  onBDMSelect: (bdmId: string) => void;
}

const TeamSelector = ({
  selectedAM,
  selectedBDM,
  onAMSelect,
  onBDMSelect,
}: TeamSelectorProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Account Manager
        </label>
        <Select value={selectedAM} onValueChange={onAMSelect}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Account Manager" />
          </SelectTrigger>
          <SelectContent>
            {teamMembers["Account Managers"].map((member) => (
              <SelectItem key={member.id} value={member.id}>
                {member.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Business Development Manager (Optional)
        </label>
        <Select value={selectedBDM} onValueChange={onBDMSelect}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select BDM (Optional)" />
          </SelectTrigger>
          <SelectContent>
            {teamMembers["Business Development"].map((member) => (
              <SelectItem key={member.id} value={member.id}>
                {member.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default TeamSelector;