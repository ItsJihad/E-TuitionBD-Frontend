import { Menu } from "lucide-react";
function MobileNav() {
  return (
    <div>
      <nav className="shadow-sm p-5 flex items-center md:hidden">
        <div>
          <div>
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <Menu></Menu>
            </label>
          </div>
        </div>
        <div className=" mx-auto flex items-center justify-center font-[ubuntu] gap-2 ">
          <img className="w-8 h-8" src={"/assets/favicon.png"} />
          <h3>e-TuitionBD</h3>
        </div>
      </nav>
    </div>
  );
}

export default MobileNav;
