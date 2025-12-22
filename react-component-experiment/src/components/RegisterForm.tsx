import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

/* =========================
   TYPES
========================= */

type Role = "student" | "intern" | "developer" | "";

interface RegisterFormData {
  name: string;
  email: string;
  age: number | "";
  role: Role;
  agree: boolean;
}

interface ApiError {
  message: string;
}

/* =========================
   COMPONENT
========================= */

const RegisterForm = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    age: "",
    role: "",
    agree: false,
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  /* =========================
     HANDLERS
  ========================= */

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: checkbox.checked,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) || "" : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.age ||
      !formData.role ||
      !formData.agree
    ) {
      setError("Semua field wajib diisi");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await axios.post(
        "http://localhost:5000/api/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setSuccess("Data berhasil dikirim 🎉");
      setFormData({
        name: "",
        email: "",
        age: "",
        role: "",
        agree: false,
      });
    } catch (err: unknown) {
      if (axios.isAxiosError<ApiError>(err)) {
        setError(
          err.response?.data?.message || "Gagal mengirim data"
        );
      } else {
        setError("Unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  /* =========================
     RENDER
  ========================= */

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-slate-800">
          Register Account
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 text-green-700 p-3 rounded">
            {success}
          </div>
        )}

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="you@email.com"
          />
        </div>

        {/* Age */}
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Age
          </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="22"
          />
        </div>

        {/* Role */}
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Role
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select role</option>
            <option value="student">Student</option>
            <option value="intern">Intern</option>
            <option value="developer">Developer</option>
          </select>
        </div>

        {/* Agreement */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600"
          />
          <span className="text-sm text-slate-600">
            I agree to the terms & conditions
          </span>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
