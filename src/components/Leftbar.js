    
import React from 'react'

export default function Leftbar() {
  return (
    <div className="left side-menu">
<div className="sidebar-inner slimscrollleft">
    <div id="sidebar-menu">
    <ul>
        <li className="menu-title">Menu</li>
        <li>
            <a href="index.html" className="waves-effect"><i className="mdi mdi-home"></i><span> Dashboard <span className="badge badge-pill badge-primary float-right">1</span></span></a>
        </li>

        <li className="has_sub">
            <a href="/" className="waves-effect"><i className="mdi mdi-album"></i> <span> UI Elements </span> <span className="float-right"><i className="mdi mdi-plus"></i></span></a>
            <ul className="list-unstyled">
                <li><a href="ui-components.html">Components</a></li>
                <li><a href="ui-buttons.html">Buttons</a></li>
                <li><a href="ui-cards.html">Cards</a></li>
                <li><a href="ui-tabs-accordions.html">Tabs &amp; Accordions</a></li>
                <li><a href="ui-modals.html">Modals</a></li>
                <li><a href="ui-progressbars.html">Progress Bars</a></li>
                <li><a href="ui-alerts.html">Alerts</a></li>
                <li><a href="ui-sweet-alert.html">Sweet-Alert</a></li>
                <li><a href="ui-grid.html">Grid</a></li>
            </ul>
        </li>

        <li className="has_sub">
            <a href="/" className="waves-effect"><i className="mdi mdi-layers"></i><span> Forms </span><span className="float-right"><i className="mdi mdi-plus"></i></span></a>
            <ul className="list-unstyled">
                <li><a href="form-elements.html">General Elements</a></li>
                <li><a href="form-validation.html">Form Validation</a></li>
                <li><a href="form-advanced.html">Advanced Form</a></li>
                <li><a href="form-wysiwyg.html">WYSIWYG Editor</a></li>
                <li><a href="form-uploads.html">Multiple File Upload</a></li>
            </ul>
        </li>

        <li>
            <a href="typography.html" className="waves-effect"><i className="mdi mdi-diamond"></i><span> Typography <span className="badge badge-primary badge-pill float-right">4</span></span></a>
        </li>

        <li className="has_sub">
            <a href="/" className="waves-effect"><i className="mdi mdi-table"></i><span> Tables </span><span className="float-right"><i className="mdi mdi-plus"></i></span></a>
            <ul className="list-unstyled">
                <li><a href="tables-basic.html">Basic Tables</a></li>
                <li><a href="tables-datatable.html">Data Table</a></li>
                <li><a href="tables-responsive.html">Responsive Table</a></li>
                <li><a href="tables-editable.html">Editable Table</a></li>
            </ul>
        </li>

        <li className="has_sub">
            <a href="/" className="waves-effect"><i className="mdi mdi-chart-pie"></i><span> Charts </span><span className="float-right"><i className="mdi mdi-plus"></i></span></a>
            <ul className="list-unstyled">
                <li><a href="charts-morris.html">Morris Chart</a></li>
                <li><a href="charts-chartjs.html">Chartjs</a></li>
                <li><a href="charts-flot.html">Flot Chart</a></li>
                <li><a href="charts-other.html">Other Chart</a></li>
            </ul>
        </li>

        <li className="has_sub">
            <a href="/" className="waves-effect"><i className="mdi mdi-opacity"></i> <span> Icons </span> <span className="float-right"><i className="mdi mdi-plus"></i></span></a>
            <ul className="list-unstyled">
                <li><a href="icons-material.html">Material Design</a></li>
                <li><a href="icons-ion.html">Ion Icons</a></li>
                <li><a href="icons-fontawesome.html">Font awesome</a></li>
                <li><a href="icons-themify.html">Themify Icons</a></li>
            </ul>
        </li>

        <li className="menu-title">Features</li>

        <li className="has_sub">
            <a href="/" className="waves-effect"><i className="mdi mdi-map"></i><span> Maps </span><span className="float-right"><i className="mdi mdi-plus"></i></span></a>
            <ul className="list-unstyled">
                <li><a href="maps-google.html"> Google Map</a></li>
                <li><a href="maps-vector.html"> Vector Map</a></li>
            </ul>
        </li>

        <li>
            <a href="calendar.html" className="waves-effect"><i className="mdi mdi-calendar"></i><span> Calendar <span className="badge badge-primary badge-pill float-right">NEW</span></span></a>
        </li>

        <li className="has_sub">
            <a href="/" className="waves-effect"><i className="mdi mdi-assistant"></i><span> Layouts </span><span className="float-right"><i className="mdi mdi-plus"></i></span></a>
            <ul className="list-unstyled">
                <li><a href="layouts-collapse.html">Menu Collapse</a></li>
                <li><a href="layouts-smallmenu.html">Menu Small</a></li>
                <li><a href="layouts-menu2.html">Menu Style 2</a></li>
            </ul>
        </li>

        <li className="has_sub">
            <a href="/" className="waves-effect"><i className="mdi mdi-google-pages"></i><span> Pages </span><span className="float-right"><i className="mdi mdi-plus"></i></span></a>
            <ul className="list-unstyled">
                <li><a href="pages-login.html">Login</a></li>
                <li><a href="pages-register.html">Register</a></li>
                <li><a href="pages-recoverpw.html">Recover Password</a></li>
                <li><a href="pages-lock-screen.html">Lock Screen</a></li>
                <li><a href="pages-blank.html">Blank Page</a></li>
                <li><a href="pages-404.html">Error 404</a></li>
                <li><a href="pages-500.html">Error 500</a></li>
                <li><a href="pages-timeline.html">Timeline</a></li>
                <li><a href="pages-invoice.html">Invoice</a></li>
                <li><a href="pages-directory.html">Directory</a></li>
            </ul>
        </li>

        <li className="has_sub">
            <a href="/" className="waves-effect"><i className="mdi mdi-share-variant"></i><span>Multi Menu </span><span className="float-right"><i className="mdi mdi-plus"></i></span></a>
            <ul>
                <li className="has_sub">
                    <a href="/" className="waves-effect"><span>Menu Item 1.1</span> <span className="float-right"><i className="mdi mdi-plus"></i></span></a>
                    <ul>
                        <li><a href="/"><span>Menu Item 2.1</span></a></li>
                        <li><a href="/"><span>Menu Item 2.2</span></a></li>
                    </ul>
                </li>
                <li>
                    <a href="/"><span>Menu Item 1.2</span></a>
                </li>
            </ul>
        </li>
    </ul>
</div>
<div className="clearfix"></div>
</div> 
</div>
  )
}


   
    
