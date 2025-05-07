"use client";
import { Provider } from "react-redux";
import store from "@/store/store";
import { Toaster } from 'react-hot-toast';
const ReduxProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Provider store={store}>
    <Toaster position="top-right" reverseOrder={false} />
    {children}
    </Provider>;
};

export default ReduxProvider;
