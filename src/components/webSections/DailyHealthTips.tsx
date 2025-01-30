import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const DailyHealthTips = () => {
  const healthTips = [
    {
      id: 1,
      title: "Morning Movement:",
      description:
        "Start your day with 10-15 minutes of light movement like yoga, stretching, or brisk walking.",
      more: " Explore the benefits of regular morning exercise for boosting energy, improving mood, and enhancing cognitive function. Discuss different types of movement suitable for various fitness levels and preferences.",
    },
    {
      id: 2,
      title: "Mindful Snacking",
      description:
        "Choose whole, unprocessed snacks rich in nutrients and fiber, such as fruits, vegetables, nuts, and yogurt.",
      more: " Discuss the importance of mindful eating, emphasizing mindful snacking for better digestion, avoiding overeating, and maintaining healthy blood sugar levels. Share snack ideas and planning strategies for busy schedules.",
    },
    {
      id: 3,
      title: "Digital Detox",
      description:
        "Schedule intentional breaks from screens and technology throughout the day, focusing on mindful activities like nature walks, journaling, or face-to-face interactions.",
      more: "Explore the negative effects of screen overuse on sleep, stress, and mental health. Discuss strategies for digital detox, including setting device limits, creating screen-free zones, and utilizing alternative activities for relaxation and de-stressing.",
    },

    // Add more health tips as needed
  ];

  return (
    <div className="w-full h-[25rem] container mt-10">
      <div className="health-tips-slider flex flex-col" id="health_tips">
        <div className="sm:pl-10 ml-5">
          Daily<div className=" text-2xl font-bold">Health Tips </div>
        </div>

        <Carousel className="shadow-md sm:p-10 mx-5 flex justify-center align-middle">
          <CarouselContent className="p-1 flex justify-center align-middle items-center">
            {healthTips.map((tip) => (
              <CarouselItem key={tip.id}>
                <h2 className="text-2xl">{tip.title}</h2>
                <p>{tip.description}</p>
                <p>{tip.more}</p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default DailyHealthTips;
