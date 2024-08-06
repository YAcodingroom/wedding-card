import { useState } from "react";

const initialState = {
  name: "",
  phone: "",
  member: "",
  message: "",
};

function Form() {
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 串接表單服務

    setFormData(initialState);
  };

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prevdata) => ({ ...prevdata, [name]: value }));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-lg p-6"
      autoComplete="off"
    >
      <div className="mb-4">
        <label className="mb-2 block text-sm font-bold" htmlFor="name">
          請問您的姓名？
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
          required
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block text-sm font-bold" htmlFor="phone">
          您的聯絡電話？
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]*"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
          required
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block text-sm font-bold" htmlFor="member">
          出席人數（包含自己）有幾位？
        </label>
        <select
          name="member"
          id="member"
          className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
          value={formData.member}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            請選取出席人數（包含自己）
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="0">不會出席，給予誠摯祝福！</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="mb-2 block text-sm font-bold" htmlFor="message">
          想給我們的祝福：
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
        ></textarea>
      </div>

      <button
        type="submit"
        className="rounded-lg bg-rose-300 px-4 py-2 text-white focus:outline-none"
      >
        送出祝福
      </button>
    </form>
  );
}

export default Form;
