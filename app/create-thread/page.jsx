"use client";

const Page = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="mt-10 flex flex-col justify-start gap-10"
      onSubmit={handleSubmit}
    >
      <div className="flex w-full flex-col gap-3">
        <label
          htmlFor="content"
          className="text-base font-semibold text-[#EFEFEF]"
        ></label>

        <textarea
          name="content"
          className="border border-[#1F1F22] bg-[#101012] px-4 py-2 text-white"
          id="content"
          rows={15}
        ></textarea>
      </div>

      <button
        type="submit"
        className="h-10 bg-[#877EFF] px-4 py-2 capitalize text-slate-50 hover:bg-[#877EFF]/90"
      >
        post thread
      </button>
    </form>
  );
};

export default Page;
