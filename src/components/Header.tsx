import avatar from "../images/avatar.jpg";

function Avatar() {
  return (
    <div>
      <img src={avatar} alt="Victor Ndaba" className="h-20 w-20 rounded-full" />
    </div>
  );
}

export default function Header() {
  return (
    <div className="mt-3 h-14 p-2 flex items-center justify-between text-zinc-800 dark:text-zinc-100">
      <Avatar />
      <div className="flex items-center">
        <span className="mr-2">Home</span>
        <span className="mr-2">About</span>
        <span className="mr-2">Contact</span>
      </div>
      <div className="flex items-center">
        <button>Toggle</button>
        <button>Github</button>
      </div>
    </div>
  );
}
