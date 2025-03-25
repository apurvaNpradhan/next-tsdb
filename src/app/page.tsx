import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"


export default async function HomePage() {
	const user = await (await createClient()).auth.getUser()

	if (user.error) {
		redirect("/login")
	}
	return (
		<div>
			<p>
				{user.data.user.email}
			</p>

			<form action="/auth/signout" method="POST">
				<Button type="submit"> Sign Out</Button>
			</form>
		</div>)
}
