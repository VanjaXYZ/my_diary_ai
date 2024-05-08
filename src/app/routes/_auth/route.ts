"use server";

export const loginUser = async (formData: FormData) => {
  try {
    const username = formData.get("username");
    const password = formData.get("password");
    if (username !== "" && password !== "") {
      console.log("Login success!", username, password);
    } else console.log("Login failed!");
  } catch (error) {
    console.error(error);
  }
};

export const registerUser = async (formData: FormData) => {
  try {
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    if (username !== "" && password !== "") {
      console.log("Login success!", username, password);
    } else console.log("Login failed!");
  } catch (error) {
    console.error(error);
  }
};
