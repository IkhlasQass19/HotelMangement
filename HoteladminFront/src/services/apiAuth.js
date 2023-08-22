import supabase, { supabaseUrl } from "./supabase";

export const signup = async ({ fullName, email, password }) => {
	const { data, error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			data: {
				fullName,
				avatar: "",
			},
		},
	});

	// Error Handling
	if (error) throw new Error(error.message);

	// Returning user session & token
	return data;
};

export const login = async ({ email, password }) => {
	// Logging in user with form credentials
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	// Error Handling
	if (error) throw new Error(error.message);

	// Returning user session & token
	return data;
};

export const getCurrentUser = async () => {
	// Get currently logged in user's session & info from localstorage
	const { data: session } = await supabase.auth.getSession();

	// No user currently logged in
	if (!session.session) return null;

	// Re-fetch user info when session exists
	const { data, error } = await supabase.auth.getUser();

	// Error Handling
	if (error) throw new Error(error.message);

	return data?.user;
};

export const updateCurrentUser = async ({ fullName, password, avatar }) => {
	// 1. Update username/password
	let updated;
	if (password) updated = { password };
	if (fullName) updated = { data: { fullName } };

	const { data, error } = await supabase.auth.updateUser(updated);

	// Error Handling
	if (error) throw new Error(error.message);
	if (!avatar) return data;

	// 2. Upload Avatar img
	const imageName = `avatar-${data.user.id}-${Math.random()}`;
	const { error: imgErr } = await supabase.storage
		.from("avatars")
		.upload(imageName, avatar);

	// Error Handling
	if (imgErr) throw new Error(imgErr.message);

	// 3. Update avatar
	const { data: updatedUser, error: error2 } = await supabase.auth.updateUser(
		{
			data: {
				avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${imageName}`,
			},
		}
	);

	// Error Handling
	if (error2) throw new Error(error2.message);
	return updatedUser;
};

export const logout = async () => {
	const { error } = await supabase.auth.signOut();

	// Error Handling
	if (error) throw new Error(error.message);
};
