import SubpageLayout from "@/components/SubpageLayout";
import CareerTimeline from "@/components/CareerTimeline";
import { careerEvents } from "./careerEvents";

export default function CareerPage() {
  return (
    <SubpageLayout
      title="Career"
      subtitle="Experience, education, milestones."
    >
      <CareerTimeline events={careerEvents} />
    </SubpageLayout>
  );
}
