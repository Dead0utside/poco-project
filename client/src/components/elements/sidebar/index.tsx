import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupAction,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarTrigger,
	useSidebar,
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/utilities/modeToggle";
import { Training } from "@/components/utilities/types";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Plus } from "lucide-react";
import { useEffect, useState } from "react";

const GET_URL = "http://localhost:8080/api/v1/training/get";

export function AppSidebar() {
	const { isMobile } = useSidebar();

	const [trainings, setTrainings] = useState(new Array<Training>());

	useEffect(() => {
		const fetchTrainings = async () => {
			const fetchResult = await fetch(`${GET_URL}`);
			const fetchResultJson =
				(await fetchResult.json()) as Array<Training>;

			setTrainings(fetchResultJson);
		};

		fetchTrainings();
	}, [trainings]);

	return (
		<Sidebar>
			<SidebarHeader className="flex-rowls">
				<ModeToggle />
				<h1 className="mx-auto"> Gym app </h1>
				{isMobile && <SidebarTrigger />}
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Trainings</SidebarGroupLabel>
					<SidebarGroupAction title="Add Training">
						<Plus /> <span className="sr-only"> Add Training</span>
					</SidebarGroupAction>
					<SidebarGroupContent>
						<SidebarMenu>
							{trainings.map((training) => (
								<SidebarMenuItem
									key={`training-${training.id}`}
								>
									<SidebarMenuButton asChild>
										<span>{training.name}</span>
									</SidebarMenuButton>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<SidebarMenuAction>
												<MoreHorizontal />
											</SidebarMenuAction>
										</DropdownMenuTrigger>
										<DropdownMenuContent
											side="right"
											align="start"
										>
											<DropdownMenuItem>
												<span>Rename</span>
											</DropdownMenuItem>
											<DropdownMenuItem>
												<span>Delete</span>
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	);
}
