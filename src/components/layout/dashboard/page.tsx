import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Avatar, Button, Card, Dropdown, Layout, Menu, Space, Typography } from "antd";
import { useState } from "react";
import {
  AiOutlineUser,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineLogout,
  AiOutlineDown,
} from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { useAuth } from "../../guard/AuthContext"; // Adjust the path accordingly
import { useQueryClient } from "@tanstack/react-query";

const { Header, Content, Sider } = Layout;

const KeyRouteMap: Record<string, string> = {
  DASHBOARD: "/dashboard",
  CONTACT: "/dashboard/contact",
};

const profileItems = [
  {
    label: "Logout",
    key: "LOGOUT",
    icon: <AiOutlineLogout />,
  },
];

const items = [
  {
    label: "Dashboard",
    key: "DASHBOARD",
    icon: <MdOutlineSpaceDashboard />,
  },
  {
    label: "Contact",
    key: "CONTACT",
    icon: <IoSettingsOutline />,
  },
];

export const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();
  const [collapsed, setCollapsed] = useState(false);

  const { logout } = useAuth(); // Correctly use the logout method

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleClick = (info: any) => {
    if (info.key === "LOGOUT") {
      logout(); // Log out the user
      queryClient.clear(); // Clear the cache
      navigate("/login"); // Redirect to login page on logout
    }
  };

  const getSelectedKeys = () => {
    for (const key in KeyRouteMap) {
      if (location.pathname === KeyRouteMap[key]) {
        return [key];
      }
    }
    return [];
  };

  const handleSelect = (info: any) => {
    navigate(KeyRouteMap[info.key]);
  };

  return (
    <Layout className="min-h-screen">
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className="h-screen"
        width={230}
      >
        <div className="w-full border-r-[1px] border-black border-opacity-[0.06]">
          <div className="w-full px-8 h-28 flex items-center justify-center">
            <h1 className="text-2xl font-bold text-gray-500">Nexus</h1>
          </div>
        </div>
        <Menu
          theme="light"
          selectedKeys={getSelectedKeys()}
          mode="inline"
          items={items}
          onSelect={handleSelect}
        />
      </Sider>
      <Layout className="h-screen overflow-y-auto">
        <Header className="bg-white p-0 ml-[1px] px-6 sticky top-0 z-50 flex justify-between items-center">
          <Button
            size="middle"
            type="primary"
            onClick={toggleCollapsed}
            icon={collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
          />

          <div className="flex items-center gap-4">
            <Typography.Text>Hi, Fireayehu Zekarias</Typography.Text>

            <Dropdown
              menu={{ items: profileItems, onClick: handleClick }}
              arrow
            >
              <Space align="center">
                <Avatar icon={<AiOutlineUser />} size={30} />
                <AiOutlineDown />
              </Space>
            </Dropdown>
          </div>
        </Header>
        <Content className="p-4 min-h-max">
          <Card className="h-full">
            <Outlet />
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};
