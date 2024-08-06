function Rsvp() {
  return (
    <div
      id="rsvp"
      className="flex h-full flex-col items-center justify-center gap-2 bg-[rgba(255,212,191,0.4)] p-3 text-stone-800 backdrop-blur-[2px]"
    >
      <div className="w-3/5 space-y-4">
        <p className="font-playwrite text-2xl">Welcome to our wedding!</p>
        <p className="text-lg">
          我們誠摯邀請您來參加我們的婚禮，無論您能不能來，都期待您能回覆表單給我們一些祝福。
        </p>
        <p className="text-end">Ivy & Johnny</p>
      </div>
    </div>
  );
}

export default Rsvp;
