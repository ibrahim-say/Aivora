import axios from "axios";

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);

    this.name = "ApiError";
    this.status = status;

    Object.setPrototypeOf(
      this,
      ApiError.prototype
    );
  }
}

export function handleApiError(error: unknown): never {
  if (axios.isAxiosError(error)) {
    const message =
      error.response?.data?.message ||
      "حدث خطأ أثناء الاتصال بالخادم، حاول مرة أخرى لاحقًا.";

    const status =
      error.response?.status || 500;

    throw new ApiError(message, status);
  }

  throw error;
}