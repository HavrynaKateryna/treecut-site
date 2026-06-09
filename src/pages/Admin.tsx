import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/admin.css";

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
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL as string;

  /* =========================
     AUTH CHECK
  ========================= */
  useEffect(() => {
    const raw = localStorage.getItem("admin_auth");

    if (!raw) {
      navigate("/admin-login");
      return;
    }

    try {
      const session = JSON.parse(raw);

      if (!session.auth || Date.now() > session.expires) {
        localStorage.removeItem("admin_auth");
        navigate("/admin-login");
      }
    } catch {
      localStorage.removeItem("admin_auth");
      navigate("/admin-login");
    }
  }, []);

  /* =========================
     LOAD LEADS
  ========================= */
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await fetch(`${API}/api/lead`);
        const data = await res.json();
        setLeads(data.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  /* =========================
     LOGOUT
  ========================= */
  const logout = () => {
    localStorage.removeItem("admin_auth");
    navigate("/admin-login");
  };

  /* =========================
     DELETE
  ========================= */
  const deleteLead = async (id: string) => {
    setActionLoading(id);

    await fetch(`${API}/api/lead/${id}`, {
      method: "DELETE",
    });

    setLeads((prev) => prev.filter((l) => l._id !== id));
    setActionLoading(null);
  };

  /* =========================
     STATUS
  ========================= */
  const updateStatus = async (id: string, status: string) => {
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

    setActionLoading(null);
  };

  /* =========================
     UI
  ========================= */
  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Admin Panel</h1>
        <p>Leads management system</p>

        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>

      {leads.length === 0 ? (
        <div className="empty">No leads yet</div>
      ) : (
        <div className="table-wrapper">
          <table className="admin-table">
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
                  <td className="message">{lead.message}</td>

                  <td>
                    <span className={`status ${lead.status}`}>
                      {lead.status}
                    </span>
                  </td>

                  <td>
                    <div className="actions">
                      <button
                        disabled={actionLoading === lead._id}
                        onClick={() => updateStatus(lead._id, "new")}
                      >
                        New
                      </button>

                      <button
                        disabled={actionLoading === lead._id}
                        onClick={() =>
                          updateStatus(lead._id, "in_progress")
                        }
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
                        className="delete"
                        disabled={actionLoading === lead._id}
                        onClick={() => deleteLead(lead._id)}
                      >
                        {actionLoading === lead._id ? "..." : "Delete"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}