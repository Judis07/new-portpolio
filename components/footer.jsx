import Container from "./container";

const Footer = () => {
  return (
    <footer
      id="connect-section"
      className="bg-[#EAECF9] text-black my-5 py-7 h-2/5"
    >
      <Container>
        <section className="flex flex-col justify-between h-full">
          <div className="flex justify-between mt-8">
            <h3 className="text-4xl font-bold basis-1/2">
              Interested in connecting?
            </h3>

            <p className="basis-1/2 text-base">
              If you are seeking a modern and dynamic website for your business,
              startup or personal use? I am available for work. Feel free to
              reach out to me directly via{" "}
              <a className="font-bold " href="mailto:arvind.nexus06@gmail.com">
                email
              </a>
              . I'm looking forward to connecting with you .
            </p>
          </div>

          <div>© All right reserved – Arvind M</div>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
