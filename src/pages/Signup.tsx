import Quote from "../components/Quote";
import SignupForm from "../components/UserForm";

export default function Signup() {
  return (
    <div className="grid grid-cols-2">
      <SignupForm formType="signup" />
      <div className="invisible lg:visible">
        <Quote />
      </div>
    </div>
  );
}
