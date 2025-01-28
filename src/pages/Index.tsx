import { useState } from "react";
import { Card } from "@/components/ui/card";
import ProductSelector from "@/components/ProductSelector";
import LocationSelector from "@/components/LocationSelector";
import TeamSelector from "@/components/TeamSelector";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [step, setStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedAM, setSelectedAM] = useState("");
  const [selectedBDM, setSelectedBDM] = useState("");
  const { toast } = useToast();

  const handleNext = () => {
    if (step === 1 && !selectedProduct) {
      toast({
        title: "Please select a product",
        variant: "destructive",
      });
      return;
    }
    if (step === 2 && !selectedState) {
      toast({
        title: "Please select a state",
        variant: "destructive",
      });
      return;
    }
    if (step === 3 && !selectedAM) {
      toast({
        title: "Please select an Account Manager",
        variant: "destructive",
      });
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto p-6 md:p-8">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-primary mb-2">
                Book Your Product Demo
              </h1>
              <p className="text-muted-foreground">
                Experience our solutions firsthand at our Experience Centers
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      i === step
                        ? "bg-primary text-white"
                        : i < step
                        ? "bg-accent text-primary"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {i}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold mb-4">
                    What Product Demo Would You Like?
                  </h2>
                  <ProductSelector
                    selectedProduct={selectedProduct}
                    onSelect={setSelectedProduct}
                  />
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold mb-4">Select Your Location</h2>
                  <LocationSelector
                    selectedState={selectedState}
                    onStateSelect={setSelectedState}
                  />
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold mb-4">Select Your Team</h2>
                  <TeamSelector
                    selectedAM={selectedAM}
                    selectedBDM={selectedBDM}
                    onAMSelect={setSelectedAM}
                    onBDMSelect={setSelectedBDM}
                  />
                </div>
              )}

              <div className="flex justify-between pt-6">
                {step > 1 && (
                  <Button variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                )}
                {step < 3 ? (
                  <Button className="ml-auto" onClick={handleNext}>
                    Next
                  </Button>
                ) : (
                  <Button
                    className="ml-auto"
                    onClick={() => {
                      toast({
                        title: "Coming Soon!",
                        description: "Calendar integration will be available soon.",
                      });
                    }}
                  >
                    View Available Times
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;