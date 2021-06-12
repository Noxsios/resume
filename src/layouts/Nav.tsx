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
  ButtonBase,
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
    marginTop: "3rem",
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
    textAlign: "left",
  },
  focus: {
    color: theme.palette.background.default,
    backgroundColor: theme.palette.primary.main,
    pointerEvents: "none",
    borderRadius: theme.spacing(0.5),
  },
  settingsFooter: {
    marginTop: "auto",
    marginLeft: "auto",
  },
  title: {
    color: theme.palette.secondary.main,
  },
  accordionDetails: {
    padding: 0,
    "& button": {
      "& a": {
        paddingLeft: theme.spacing(3),
      },
    },
    display: "block",
    margin: 0,
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
    margin: 0,
  },
}))(MuiAccordionSummary);

const LinkGroup = ({ children, title, location }) => {
  const classes = useStyles();

  const explodedPath = location.pathname.split("/");

  const isDefaultExpanded = explodedPath.slice(0, explodedPath.length - 1).includes(title);

  return (
    <Accordion defaultExpanded={isDefaultExpanded} TransitionProps={{ timeout: 500 }}>
      <AccordionSummary className={classes.link} expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
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
    <>
      <ButtonBase style={{ width: "100%", cursor: "auto" }}>
        <Link to={to} className={classes.link} activeClassName={clsx(classes.link, classes.focus)}>
          <Typography variant="h6">{linkName}</Typography>
        </Link>
      </ButtonBase>
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
            <Divider />
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
