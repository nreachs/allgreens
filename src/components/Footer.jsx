import { Linkedin,Instagram,Twitter} from "lucide-react"
const Footer = () => {
  return (
    <footer className="md:px-20 px-5">
      <div className="flex flex-col lg:flex-row justify-between items-center topBorder py-4">
        <div className="flex space-x-3 mb-2 ">
          <a
            href="https://www.instagram.com/allgreens__rw/"
            target="blank"
            aria-label="Visit our facebook page"
          >< Instagram size={20}/></a>
          <a
            href="https://www.instagram.com/allgreens__rw/"
            target="blank"
            aria-label="Visit our facebook page"
          >< Twitter size={20}/></a>
          <a
            href="https://www.instagram.com/allgreens__rw/"
            target="blank"
            aria-label="Visit our facebook page"
          ><Linkedin size={20}/></a>
          
        </div>
        <p className="text-sm">&copy;2025 Allgreens. developed by edmond_nikoh</p>
      </div>
    </footer>
  );
};

export default Footer;
