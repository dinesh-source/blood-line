import { isUserLoggedIn } from "../api/firebaseAuth";
import { reducerCases } from "../utils/Constants";
import { useStateProvider } from "../utils/StateProvider.jsx";

const AuthChangesProvider = async () => {
  const [{ isLoggedIn, isValidate }, dispatch] = useStateProvider();
  console.log(isLoggedIn);
};
