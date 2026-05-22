import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Competition from "./pages/Competition";
import Login from "./pages/Login";
import Seminar from "./pages/Seminar";
import Workshop from "./pages/Workshop";
import Talkshow from "./pages/Talkshow";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Register from "./pages/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./route/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import CategoryIndex from "./pages/dashboard/kategori/CategoryIndex";
import PembicaraIndex from "./pages/dashboard/pembicara/PembicaraIndex";
import EventIndex from "./pages/dashboard/event/EventIndex";
import CategoryCreate from "./pages/dashboard/kategori/CategoryCreate";
import EventCreate from "./pages/dashboard/event/EventCreate";
import PembicaraCreate from "./pages/dashboard/pembicara/PembicaraCreate";
import CategoryEdit from "./pages/dashboard/kategori/CategoryEdit";
import PembicaraEdit from "./pages/dashboard/pembicara/PembicaraEdit";
import EventEdit from "./pages/dashboard/event/EventEdit";
import Biodata from "./pages/dashboard/biodata/Biodata";

  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Beranda />} />
            <Route path="/competition" element={<Competition />} />
            <Route path="/seminar" element={<Seminar />} />
            <Route path="/workshop" element={<Workshop />} />
            <Route path="/talkshow" element={<Talkshow />} />
          </Route>

          <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* route yang dilindungi, hanya bisa diakses jika sudah login */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />} >
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/dashboard/category" element={<CategoryIndex />} />
            <Route path="/dashboard/category/create"
              element={<CategoryCreate />} />
            <Route path="/dashboard/category/edit/:id" element={<CategoryEdit />} />

            <Route path="/dashboard/event" element={<EventIndex />} />
            <Route path="/dashboard/event/create" element={<EventCreate/>} />
            <Route path="/dashboard/event/edit/:id" element={<EventEdit />} />
            
            <Route path="/dashboard/pembicara" element={<PembicaraIndex />} />
            <Route path="/dashboard/pembicara/create" element={<PembicaraCreate />} />
            <Route path="/dashboard/pembicara/edit/:id" element={<PembicaraEdit />} />

            <Route path="/dashboard/biodata" element={<Biodata />} />

          </Route>
          </Route>
        
        </Routes>
      </BrowserRouter>
    );
  }

export default App;
