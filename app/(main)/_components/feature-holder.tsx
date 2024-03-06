import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureHolderProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureHolder = ({ Icon, title, description }: FeatureHolderProps) => {
  return (
    <Card className="flex flex-col items-center space-y-4 px-4 py-6 border-border">
      <CardContent className="flex flex-col items-center space-y-4">
        <Icon size="48" className="text-secondary-foreground font-light" />
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-center text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureHolder;
