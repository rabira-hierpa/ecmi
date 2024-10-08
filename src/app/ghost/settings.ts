import api from "./api";
export async function getNavbar() {
  const settings = await api.settings.browse();
  return settings.navigation;
}
