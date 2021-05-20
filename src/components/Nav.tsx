import { useState } from "react";
import clsx from "clsx";
import { Link } from "gatsby";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  Divider,
  Backdrop,
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails,
  IconButton,
  Grid,
} from "@material-ui/core";
import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, ExpandMore as ExpandMoreIcon, Settings as SettingIcon } from "@material-ui/icons";

const drawerWidth = 210;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "@global": {
      "::-webkit-scrollbar": {
        width: theme.spacing(0.5),
        height: 0,
      },
    },
    marginTop: "2.5rem",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(1),
    "&:hover": {
      color: theme.palette.grey[900],
    },
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    borderRight: 0,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer - 1,
    background: "rgb(0 0 0 / 84%)",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    justifyContent: "flex-end",
  },
  link: {
    userSelect: "none",
    "&:hover": {
      backgroundColor: theme.palette.action.selected,
    },
  },
  focus: {
    "& a": {
      "& h6": {
        color: theme.palette.grey[300],
      },
    },
    backgroundColor: theme.palette.primary.dark,
    userSelect: "none",
    pointerEvents: "none",
  },
  settingsFooter: {
    marginTop: "auto",
    marginLeft: "auto",
  },
}));

const Accordion = withStyles((theme) => ({
  root: {
    boxShadow: "none",
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      borderBottom: `2px solid ${theme.palette.primary.dark}`,
      margin: 0,
    },
  },
  expanded: {},
}))(MuiAccordion);

const AccordionSummary = withStyles((theme) => ({
  root: {
    padding: 0,
    color: theme.palette.primary.main,
    minHeight: 8,
    "&$expanded": {
      minHeight: 8,
    },
  },
  content: {
    "&$expanded": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.grey[300],
      margin: 0,
    },
    display: "inline-block",
    margin: 0,
  },
  expanded: {
    margin: 0,
  },
  expandIcon: {
    position: "absolute",
    right: 0,
    color: theme.palette.primary.main,
    "&$expanded": {
      color: theme.palette.grey[300],
    },
    margin: 0,
  },
}))(MuiAccordionSummary);

const LinkGroup = ({ focusArray, children, title, focus }) => {
  const classes = useStyles();
  return (
    <>
      {focus !== null && (
        <Accordion defaultExpanded={focusArray.some((ele) => ele === focus)}>
          <AccordionSummary className={classes.link} expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" align="center">
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ display: "block", padding: "0" }}>{children}</AccordionDetails>
        </Accordion>
      )}
      <Divider />
    </>
  );
};

const SideLink = ({ to, linkName }) => {
  const classes = useStyles();
  return (
    <>
      <Link to={to} className={classes.link} activeClassName={clsx(classes.link, classes.focus)} style={{ textDecoration: "none" }}>
        <Typography align="center" variant="h6" color="primary">
          {linkName}
        </Typography>
      </Link>
      <Divider />
    </>
  );
};

export default function Nav() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar variant="dense">
          <IconButton color="inherit" onClick={handleDrawerOpen} edge="start" className={clsx(classes.menuButton, open && classes.hide)}>
            <MenuIcon />
          </IconButton>
          <Grid container justify="space-between" direction="row">
            <Grid item xs>
              <Typography variant="h6" noWrap>
                {window.location.pathname === "/"
                  ? "🏡 Home"
                  : window.location.pathname
                      .split("/")[1]
                      .split("-")
                      .map((word) => word[0].toUpperCase() + word.substring(1))
                      .join(" ")}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <SideLink to="/" linkName="🏡 Home" />
        <SideLink to="/test-markdown" linkName="Test" />
        <div className={classes.settingsFooter}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item>
              <IconButton>
                <SettingIcon />
              </IconButton>
            </Grid>
          </Grid>
        </div>
      </Drawer>
      <Backdrop className={classes.backdrop} open={open} onClick={handleDrawerClose} />
    </div>
  );
}
