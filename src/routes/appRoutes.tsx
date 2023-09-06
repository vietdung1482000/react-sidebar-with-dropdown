import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import ChangelogPage from "../pages/changelog/ChangelogPage";

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import InstallationPage from "../pages/installation/InstallationPage";
import CalendarPage from "../pages/calendar/CalendarPage";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <CalendarPage />,
    state: "home"
  },
  {
    path: "/installation",
    element: <InstallationPage />,
    state: "installation",
    sidebarProps: {
      displayText: "Installation",
      icon: <FileDownloadOutlinedIcon />
    }
  },
  {
    path: "/dashboard",
    element: <DashboardPageLayout />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />
    },
  },
  {
    path: "/Home",
    element: <CalendarPage />,
    state: "CalendarPage",
    sidebarProps: {
      displayText: "Calendar",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    path: "/changelog",
    element: <ChangelogPage />,
    state: "changelog",
    sidebarProps: {
      displayText: "Changelog",
      icon: <FormatListBulletedOutlinedIcon />
    }
  }
];

export default appRoutes;