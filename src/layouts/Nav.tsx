import { useState } from "react";
import clsx from "clsx";
import { Link } from "gatsby";
import { Location } from "@reach/router";
import { makeStyles, withStyles } from "@material-ui/core/styles";
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
import directory from "./directory.json";

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
    color: theme.palette.text.secondary,
  },
  appBarShift: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(1),
    color: theme.palette.background.paper,
    "&:hover": {
      color: theme.palette.background.default,
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
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.action.selected,
      textDecoration: `underline ${theme.palette.primary.main}`,
      borderRadius: theme.spacing(0.5),
    },
    textDecoration: "none",
    paddingLeft: theme.spacing(2),
    width: "100%",
  },
  focus: {
    color: theme.palette.background.default,
    backgroundColor: theme.palette.primary.light,
    pointerEvents: "none",
  },
  settingsFooter: {
    marginTop: "auto",
    marginLeft: "auto",
  },
  title: {
    color: theme.palette.secondary.main,
  },
}));

const Accordion = withStyles((theme) => ({
  root: {
    boxShadow: "none",
    "&:before": {
      display: "none",
    },
    "&$expanded": {
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
    "&:hover": {
      textDecoration: "none",
    },
  },
  content: {
    "&$expanded": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.default,
      margin: 0,
    },
    display: "flex",
    flexWrap: "wrap",
    margin: 0,
    paddingLeft: theme.spacing(2),
  },
  expanded: {
    margin: 0,
  },
  expandIcon: {
    position: "absolute",
    right: 0,
    color: theme.palette.primary.main,
    "&$expanded": {
      color: theme.palette.background.default,
    },
    margin: 0,
  },
}))(MuiAccordionSummary);

const LinkGroup = ({ children, title, location }) => {
  const classes = useStyles();

  const explodedPath = location.pathname.split("/");

  const isDefaultExpanded = explodedPath.slice(0, explodedPath.length - 1).includes(title);

  return (
    <Accordion defaultExpanded={isDefaultExpanded}>
      <AccordionSummary className={classes.link} expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">{title[0].toUpperCase() + title.substring(1)}</Typography>
      </AccordionSummary>
      <AccordionDetails style={{ padding: 0, margin: 0 }}>
        {children.map((entry) => (
          <SideLink to={"/" + title + entry.to} linkName={entry.linkName} key={"nav-link-entry-to-" + title + entry.to} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

const SideLink = ({ to, linkName }) => {
  const classes = useStyles();
  return (
    <Link to={to} className={classes.link} activeClassName={clsx(classes.link, classes.focus)}>
      <Typography variant="h6">{linkName}</Typography>
    </Link>
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

  const currentLocation = (location) => {
    const path = location.pathname.split("/")[location.pathname.split("/").length - 1];
    // Might change this to directly match file name, idk
    const currentLocation = path
      .replace(/-/g, " ")
      .replace(/%20/g, " ")
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.substring(1))
      .join(" ");

    return currentLocation;
  };

  return (
    <Location>
      {({ location }) => (
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
                  <Typography variant="h6" className={classes.title} noWrap>
                    {currentLocation(location)}
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
              <IconButton onClick={handleDrawerClose} color="primary">
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            {directory.map((entry) => {
              if (entry.hasOwnProperty("title") && entry.hasOwnProperty("pages")) {
                return (
                  <LinkGroup title={entry.title} key={entry.title} location={location}>
                    {entry.pages}
                  </LinkGroup>
                );
              } else {
                return <SideLink to={entry.to} linkName={entry.linkName} key={"nav-link-entry-to-" + entry.to} />;
              }
            })}
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
      )}
    </Location>
  );
}
