import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/redux/Store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const queryClient = new QueryClient();

	return (
		<html lang="en">
			{/* <Provider store={store}> */}
			{/* <QueryClientProvider client={queryClient}> */}
			<body className={inter.className}>{children}</body>
			{/* </QueryClientProvider> */}
			{/* </Provider> */}
		</html>
	);
}
