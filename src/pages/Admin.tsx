import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Lead = {
  _id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  status: string;
};

export default function Admin() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL as string;

  /* =========================
     PROTECT ADMIN ROUTE
  ========================= */
  useEffect(() => {
    const auth = localStorage.getItem("admin_auth");

    if (!auth) {
      navigate("/admin-login");
    }
  }, []);

  /* =========================
     LOAD LEADS
  ========================= */
  const fetchLeads = async () => {
    try {
      const res = await fetch(`${API}/api/lead`);
      const data = await res.json();

      setLeads(data.data || []);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  /* =========================
     DELETE LEAD
  ========================= */
  const deleteLead = async (id: string) => {
    try {
      setActionLoading(id);

      await fetch(`${API}/api/lead/${id}`, {
        method: "DELETE",
      });

      setLeads((prev) => prev.filter((l) => l._id !== id));
    } catch (err) {
      console.error(err);
    } finally {
      setActionLoading(null);
    }
  };

  /* =========================
     UPDATE STATUS
  ========================= */
  const updateStatus = async (id: string, status: string) => {
    try {
      setActionLoading(id);

      const res = await fetch(`${API}/api/lead/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      const data = await res.json();

      setLeads((prev) =>
        prev.map((l) =>
          l._id === id ? { ...l, status: data.data.status } : l
        )
      );
    } catch (err) {
      console.error(err);
    } finally {
      setActionLoading(null);
    }
  };

  /* =========================
     UI
  ========================= */
  if (loading) {
    return <h2 style={{ padding: 20 }}>Loading leads...</h2>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>🪵 Admin Panel - Leads</h1>

      {leads.length === 0 ? (
        <p>No leads yet</p>
      ) : (
        <table
          border={1}
          cellPadding={10}
          style={{ width: "100%", marginTop: 20 }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Service</th>
              <th>Message</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead) => (
              <tr key={lead._id}>
                <td>{lead.name}</td>
                <td>{lead.phone}</td>
                <td>{lead.email}</td>
                <td>{lead.service}</td>
                <td>{lead.message}</td>
                <td>
                  <b>{lead.status}</b>
                </td>

                <td style={{ display: "flex", gap: 5 }}>
                  <button
                    disabled={actionLoading === lead._id}
                    onClick={() => updateStatus(lead._id, "new")}
                  >
                    New
                  </button>

                  <button
                    disabled={actionLoading === lead._id}
                    onClick={() => updateStatus(lead._id, "in_progress")}
                  >
                    Work
                  </button>

                  <button
                    disabled={actionLoading === lead._id}
                    onClick={() => updateStatus(lead._id, "done")}
                  >
                    Done
                  </button>

                  <button
                    disabled={actionLoading === lead._id}
                    onClick={() => deleteLead(lead._id)}
                    style={{ color: "red" }}
                  >
                    {actionLoading === lead._id ? "..." : "Delete"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}