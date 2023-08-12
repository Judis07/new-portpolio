import Container from "./container";
import Tabs from "./tabs";

const WorkSection = () => {
  return (
    <section id="work-section" className="py-16">
      <Container>
        <h3 className="text-4xl font-bold  text-center mb-8 basis-1/4">Work</h3>

        <Tabs />
      </Container>
    </section>
  );
};

export default WorkSection;
