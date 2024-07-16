import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export function SignIn() {
  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission

    try {
      await signIn("google"); // Perform sign-in action
    } catch (error) {
      console.error("Sign-in failed:", error);
      // Handle error as needed (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <Button type="submit">Sign in with Google</Button>
    </form>
  );
}
