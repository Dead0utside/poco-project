import { Button } from "@/components/ui/button";
import { ThemeProvider } from "./components/utilities/themeProvider";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/elements/sidebar/appSidebar";

Button;

function App() {
	return (
		<ThemeProvider>
			<SidebarProvider>
				<AppSidebar />
				<main>
					<SidebarTrigger />
				</main>
			</SidebarProvider>
		</ThemeProvider>
	);
}

export default App;
