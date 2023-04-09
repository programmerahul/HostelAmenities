import http from "./httpServices";
export async function getHostels() {
  const { data } = await http.get("/hostels");
  return data;
}
export async function getHostel(id) {
  const { data } = await http.get(`/hostels/${id}`);
  return data;
}
export async function deleteHostel(id) {
  const { data } = await http.delete(`/hostels/${id}`);
  return data;
}
export async function newHostel(hostel) {
  const { data } = await http.post(`/hostels/`, hostel);
  return data;
}
export async function updateHostel(id, hostel) {
  const { data } = await http.put(`/hostels/${id}`, hostel);
  return data;
}
