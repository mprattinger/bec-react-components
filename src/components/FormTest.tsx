import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { BecFormInput } from "bec-react-components";

const testFormSchema = z
  .object({
    email: z.string().email("Email is required"),
    password: z.string().min(1, "Password is required"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

type TestFormSchema = z.infer<typeof testFormSchema>;

const TestForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TestFormSchema>({ resolver: zodResolver(testFormSchema) });

  const onSubmit = async (data: TestFormSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
  };

  return (
    <>
      <form
        className="flex flex-col gap-y-2 w-1/2 m-auto py-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <BecFormInput<TestFormSchema>
          id="email"
          type="text"
          name="email"
          register={register}
          placeHolder="Email"
          errors={errors}
        />
        <BecFormInput<TestFormSchema>
          id="password"
          type="password"
          name="password"
          register={register}
          placeHolder="Password"
          errors={errors}
        />
        <BecFormInput<TestFormSchema>
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          register={register}
          placeHolder="Confirm Password"
          errors={errors}
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 disabled:bg-gray-500 py-2 rounded"
        >
          Submit
        </button>
      </form>
      {/* <div>{JSON.stringify(formData)}</div> */}
    </>
  );
};

export { TestForm };
