import React, { useEffect } from "react";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { logoutUser } from "../store/slices/loginSlice";
import { RoutesList } from "../utils/routes";
import { useAppDispatch } from "../store/hooks";
import { colorPrimaryMain } from "../styles/TemaPrincipal";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import MuiDrawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Avatar,
  Box,
  CSSObject,
  Divider,
  IconButton,
  // Divider,
  // Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Theme,
  Toolbar,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import {
  AppBar,
  Drawer,
  DrawerHeader,
  drawerWidth,
} from "../components/AsideDashboard/StylesAsideDashboard";

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })<AppBarProps>(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  console.log(location.pathname);
  useEffect(() => {
    if (
      location.pathname === "/dashboard" ||
      location.pathname === "/dashboard/"
    ) {
      navigate(RoutesList.routeToDashboard);
    }
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Karso administrador
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#000",
          },
        }}
      >
        <DrawerHeader>
          <Box
            sx={{
              width: "100%",
              padding: "20px 10px",
              display: open ? "flex" : "none",
              flexFlow: "column",
              alignItems: "center",
              justifyContent: "center",
              // opacity: open ? 1 : 0,
              // transition: "all 0.5s",
            }}
          >
            <Avatar
              src="/broken-image.jpg"
              sx={{
                width: 80,
                height: 80,
                bgcolor: colorPrimaryMain,
                // outline: "3px solid #00ff0428",
                outlineOffset: "4px",
              }}
            />

            <Typography mt={1.5}>
              <strong>Administrador</strong>
            </Typography>
          </Box>
          <IconButton
            onClick={handleDrawerClose}
            sx={{
              position: "absolute",
              top: 5,
              right: 5,
            }}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        {open && <Divider />}
        <List>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => {
                navigate(`${RoutesList.dashboardProductsRoute}`);
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText
                primary="Ver productos"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => {
                navigate(`${RoutesList.dashboardOrdersRoute}`);
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <ReceiptLongIcon />
              </ListItemIcon>
              <ListItemText
                primary="Ver pedidos"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => {
                localStorage.removeItem("sesion");
                dispatch(logoutUser());
                navigate(RoutesList.routeToLogin);
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <ExitToAppIcon color="error" />
              </ListItemIcon>
              <ListItemText
                sx={{ color: "#f44336", opacity: open ? 1 : 0 }}
                primary="Cerrar sesión"
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
