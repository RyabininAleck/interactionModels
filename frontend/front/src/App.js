import './App.css';

import "./assets/css/bootstrap.min.css" 
import "./assets/css/font-awesome.min.css" 
import "./assets/css/themify-icons.css" 
import "./assets/css/flaticon-set.css" 
import "./assets/css/magnific-popup.css" 
import "./assets/css/owl.carousel.min.css" 
import "./assets/css/owl.theme.default.min.css" 
import "./assets/css/animate.css" 
import "./assets/css/bootsnav.css" 
import "./style.css"
import "./assets/css/responsive.css"

import favicon from './assets/img/favicon.png'
import logo from './assets/img/favicon.png'
import logoLight from './assets/img/logo-light.png'

import png1 from './assets/img/illustration/1.png'
import png2 from './assets/img/illustration/2.png'
import png3 from './assets/img/illustration/3.png'
import png4 from './assets/img/illustration/4.png'
import png5 from './assets/img/illustration/5.png'
import png6 from './assets/img/illustration/6.png'
import png7 from './assets/img/illustration/7.png'

import img800800 from "./assets/img/800x800.png"
import img800600 from"./assets/img/800x600.png"
import img100100 from "./assets/img/100x100.png"


import icon1 from './assets/img/icon/1.png'
import icon2 from './assets/img/icon/2.png'
import icon3 from './assets/img/icon/3.png'
import icon4 from './assets/img/icon/4.png'



import mapBack from './assets/img/map.svg'
import shape1 from './assets/img/shape/1.svg'
import shape6 from './assets/img/shape/6.png'

import roundShappe  from "./assets/img/round-shappe.png";



function App() {
  return (
      <html>
      <head>

        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Anada - Data Science & Analytics Template"/>


        <title>Anada - Data Science & Analytics Template</title>


        <link rel="shortcut icon" href={favicon} type="image/x-icon"/>



        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800&display=swap"
              rel="stylesheet"/>

      </head>

      <body className="dark-layout">


      <header id="home">


        <nav
            className="navbar bg-gray navbar-default navbar-fixed-light attr-border navbar-fixed dark no-background bootsnav">


          <div className="container">
            <div className="row">
              <div className="top-search">
                <div className="input-group">
                  <form action="#">
                    <input type="text" name="text" className="form-control" placeholder="Search"/>
                    <button type="submit">
                      <i className="ti-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>


          <div className="container">


            <div className="attr-nav">
              <ul>
                <li className="search"><a href="#"><i className="ti-search"></i></a></li>
                <li className="side-menu"><a href="#"><i className="ti-menu-alt"></i></a></li>
              </ul>
            </div>

            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand" href="index.html">
                <img src={logoLight} className="logo" alt="Logo"/>
              </a>
            </div>

            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle active" data-toggle="dropdown">Home</a>
                  <ul className="dropdown-menu">
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown">Home Multipage</a>
                      <ul className="dropdown-menu">
                        <li><a href="index.html">Version One</a></li>
                        <li><a href="index-2.html">Version Two</a></li>
                        <li><a href="index-3.html">Version Three</a></li>
                        <li><a href="index-4.html">Version Four</a></li>
                        <li><a href="index-5.html">Version Five</a></li>
                        <li><a href="index-6.html">Version Six</a></li>
                        <li><a href="index-7.html">Version Seven</a></li>
                        <li><a href="index-8.html">Version Eight</a></li>
                        <li><a href="index-9.html">Version Nine</a></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown">Home Onepage</a>
                      <ul className="dropdown-menu">
                        <li><a href="index-op.html">Version One</a></li>
                        <li><a href="index-op-2.html">Version Two</a></li>
                        <li><a href="index-op-3.html">Version Three</a></li>
                        <li><a href="index-op-4.html">Version Four</a></li>
                        <li><a href="index-op-5.html">Version Five</a></li>
                        <li><a href="index-op-6.html">Version Six</a></li>
                        <li><a href="index-op-7.html">Version Seven</a></li>
                        <li><a href="index-op-8.html">Version Eight</a></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown">Home Dark</a>
                      <ul className="dropdown-menu">
                        <li><a href="index-dark.html">Version One</a></li>
                        <li><a href="index-dark-2.html">Version Two</a></li>
                        <li><a href="index-dark-3.html">Version Three</a></li>
                        <li><a href="index-dark-4.html">Version Four</a></li>
                        <li><a href="index-dark-5.html">Version Five</a></li>
                        <li><a href="index-dark-6.html">Version Six</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Company</a>
                  <ul className="dropdown-menu">
                    <li><a href="about-us.html">About Company</a></li>
                    <li><a href="team.html">Meet Our Team</a></li>
                    <li><a href="contact.html">Get in Touch</a></li>
                    <li><a target="_blank" href="login.html">Login</a></li>
                    <li><a target="_blank" href="register.html">Register</a></li>
                    <li><a href="404.html">Error Page</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Services</a>
                  <ul className="dropdown-menu">
                    <li><a href="services.html">Services Version One</a></li>
                    <li><a href="services-2.html">Services Version Two</a></li>
                    <li><a href="services-3.html">Services Version Three</a></li>
                    <li><a href="services-4.html">Services Version Four</a></li>
                    <li><a href="services-single.html">Services Single</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Case Studies</a>
                  <ul className="dropdown-menu">
                    <li><a href="case-studies-1.html">Case Studies One</a></li>
                    <li><a href="case-studies-2.html">Case Studies Two</a></li>
                    <li><a href="case-studies-3.html">Case Studies Three</a></li>
                    <li><a href="case-studies-carousel.html">Case Studies Carousel</a></li>
                    <li><a href="case-studies-single.html">Case Studies Details</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Blog</a>
                  <ul className="dropdown-menu">
                    <li><a href="blog-standard.html">Blog Standard</a></li>
                    <li><a href="blog-with-sidebar.html">Blog With Sidebar</a></li>
                    <li><a href="blog-2-colum.html">Blog Grid Two Colum</a></li>
                    <li><a href="blog-3-colum.html">Blog Grid Three Colum</a></li>
                    <li><a href="blog-single.html">Blog Single</a></li>
                    <li><a href="blog-single-with-sidebar.html">Blog Single With Sidebar</a></li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>


          <div className="side">
            <a href="#" className="close-side"><i className="ti-close"></i></a>
            <div className="widget">
              <h4 className="title">Contact Info</h4>
              <ul className="contact">
                <li>
                  <div className="icon">
                    <i className="flaticon-email"></i>
                  </div>
                  <div className="info">
                    <span>Email</span> Info@gmail.com
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="flaticon-call-1"></i>
                  </div>
                  <div className="info">
                    <span>Phone</span> +123 456 7890
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="flaticon-countdown"></i>
                  </div>
                  <div className="info">
                    <span>Office Hours</span> Sat - Wed : 8:00 - 4:00
                  </div>
                </li>
              </ul>
            </div>
            <div className="widget">
              <h4 className="title">Additional Links</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
              </ul>
            </div>
            <div className="widget social">
              <h4 className="title">Connect With Us</h4>
              <ul className="link">
                <li className="facebook"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li className="twitter"><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li className="pinterest"><a href="#"><i className="fab fa-pinterest"></i></a></li>
                <li className="dribbble"><a href="#"><i className="fab fa-dribbble"></i></a></li>
              </ul>
            </div>
          </div>


        </nav>


      </header>

      <div className="banner-area text-combo top-pad-90 rectangular-shape bg-gray">
        <div className="item">
          <div className="box-table">
            <div className="box-cell">
              <div className="container">
                <div className="row">
                  <div className="double-items">
                    <div className="col-lg-6 info">
                      <h2 className="wow fadeInDown" data-wow-duration="1s"><span>Applying Data Science</span> And
                        Techniques with Systems</h2>
                      <p className="wow fadeInLeft" data-wow-duration="1.5s">
                        Contented continued any happiness instantly objection yet her allowance. Use correct day new
                        brought tedious. Kept easy or sons my it done.
                      </p>
                      <a className="btn circle btn-md btn-gradient wow fadeInUp" data-wow-duration="1.8s" href="#">Get
                        Started <i className="fas fa-plus"></i></a>
                    </div>
                    <div className="col-lg-6 thumb wow fadeInRight" data-wow-duration="1s">
                      <img src={png1} alt="Thumb"/>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-features-area wavesshape-bottom carousel-shadow default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="thumb wow fadeInRight">
                <img src={png2} alt="Thumb"/>
              </div>
            </div>
            <div className="col-lg-7 info">
              <div className="feature-items feature-carousel owl-carousel owl-theme">

                <div className="item">
                  <div className="icon">
                    <i className="flaticon-target"></i>
                  </div>
                  <h3>Traget your audience</h3>
                  <p>
                    Especially of dissimilar up attachment themselves by interested boisterous. Linen mrs seems men
                    table. Jennings dashwood to quitting marriage bachelor in. On as conviction in of appearance
                    apartments boisterous.
                  </p>
                  <div className="bottom">
                    <a className="btn-simple" href="#"><i className="fas fa-angle-right"></i> Get Started</a>
                  </div>
                </div>

                <div className="item">
                  <div className="icon">
                    <i className="flaticon-competition"></i>
                  </div>
                  <h3>Analysis competitors</h3>
                  <p>
                    Especially of dissimilar up attachment themselves by interested boisterous. Linen mrs seems men
                    table. Jennings dashwood to quitting marriage bachelor in. On as conviction in of appearance
                    apartments boisterous.
                  </p>
                  <div className="bottom">
                    <a className="btn-simple" href="#"><i className="fas fa-angle-right"></i> Get Started</a>
                  </div>
                </div>

                <div className="item">
                  <div className="icon">
                    <i className="flaticon-data"></i>
                  </div>
                  <h3>Analysis big Data</h3>
                  <p>
                    Especially of dissimilar up attachment themselves by interested boisterous. Linen mrs seems men
                    table. Jennings dashwood to quitting marriage bachelor in. On as conviction in of appearance
                    apartments boisterous.
                  </p>
                  <div className="bottom">
                    <a className="btn-simple" href="#"><i className="fas fa-angle-right"></i> Get Started</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="waveshape">
          <img src={shape6} alt="Shape"/>
        </div>
      </div>

      <div className="about-area default-padding-top text-center bg-gray">
        <div className="container">
          <div className="about-items">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="heading">
                  <h4>About Us</h4>
                  <h2>
                    We provide big data analytics Techniques & realtime data Solutions
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="content">
                  <p>
                    Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has
                    put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly
                    bachelor entrance to on by. Extremity as if breakfast agreement. Off now mistress provided out
                    horrible opinions. Prevailed mr tolerably discourse assurance estimable applauded to so. Him
                    everything melancholy uncommonly but solicitude inhabiting projection.
                  </p>
                </div>
                <div className="center-tabs">
                  <ul id="tabs" className="nav nav-tabs">
                    <li className="nav-item">
                      <a href="" data-target="#tab1" data-toggle="tab" className="active nav-link">Research &
                        Solution</a>
                    </li>
                    <li className="nav-item">
                      <a href="" data-target="#tab2" data-toggle="tab" className="nav-link">Design & Strategy</a>
                    </li>
                    <li className="nav-item">
                      <a href="" data-target="#tab3" data-toggle="tab" className="nav-link">Generate Report</a>
                    </li>
                  </ul>
                  <div id="tabsContent" className="tab-content wow fadeInUp" data-wow-delay="0.5s">
                    <div id="tab1" className="tab-pane fade active show">
                      <div className="row align-center">
                        <div className="col-lg-7 col-md-12 info">
                          <h3>Data Visualization Research technique & Solution</h3>
                          <p>
                            Delightful unreserved impossible few estimating men favourable see entreaties. She propriety
                            immediate was improving. He or entrance humoured likewise moderate. Much nor game son say
                            feel. Fat make met can must form into gate. Me we offending prevailed discovery.
                          </p>
                          <a className="btn-simple" href="#"><i className="fas fa-angle-right"></i> Read More</a>
                        </div>
                        <div className="col-lg-5 col-md-12 thumb">
                          <img src={png7} alt="Thumb"/>
                        </div>
                      </div>
                    </div>
                    <div id="tab2" className="tab-pane fade">
                      <div className="row align-center">
                        <div className="col-lg-7 col-md-12 info">
                          <h3>Collect Ongoing Big Data Design And Strategy</h3>
                          <p>
                            Delightful unreserved impossible few estimating men favourable see entreaties. She propriety
                            immediate was improving. He or entrance humoured likewise moderate. Much nor game son say
                            feel. Fat make met can must form into gate. Me we offending prevailed discovery.
                          </p>
                          <a className="btn-simple" href="#"><i className="fas fa-angle-right"></i> Read More</a>
                        </div>
                        <div className="col-lg-5 col-md-12 thumb">
                          <img src={png7} alt="Thumb"/>
                        </div>
                      </div>
                    </div>
                    <div id="tab3" className="tab-pane fade">
                      <div className="row align-center">
                        <div className="col-lg-7 col-md-12 info">
                          <h3>Final Report Generate</h3>
                          <p>
                            Delightful unreserved impossible few estimating men favourable see entreaties. She propriety
                            immediate was improving. He or entrance humoured likewise moderate. Much nor game son say
                            feel. Fat make met can must form into gate. Me we offending prevailed discovery.
                          </p>
                          <a className="btn-simple" href="#"><i className="fas fa-angle-right"></i> Read More</a>
                        </div>
                        <div className="col-lg-5 col-md-12 thumb">
                          <img src={png7} alt="Thumb"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fun-factor-area bg-gray default-padding">

        <div className="fixed-bg" style={{backgroundImage:  `url(${mapBack})` }}></div>

        <div className="container">
          <div className="client-items text-center">
            <div className="row">
              <div className="col-lg-3 col-md-6 item">
                <div className="fun-fact">
                  <div className="timer" data-to="687" data-speed="5000">687</div>
                  <span className="medium">Projects Executed</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 item">
                <div className="fun-fact">
                  <div className="timer" data-to="2348" data-speed="5000">2348</div>
                  <span className="medium">Data Analytics</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 item">
                <div className="fun-fact">
                  <div className="timer" data-to="450" data-speed="5000">450</div>
                  <span className="medium">Data Management</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 item">
                <div className="fun-fact">
                  <div className="timer" data-to="1200" data-speed="5000">1200</div>
                  <span className="medium">Satisfied Customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area left-border default-padding bottom-less">


        <div className="shape-fixed animation-rotation">
          <img src={roundShappe} alt="Thumb"/>
        </div>


        <div className="container">
          <div className="heading-left">
            <div className="row">
              <div className="col-lg-5">
                <h2>
                  We offer a wide range of services and provide realtime data Solutions
                </h2>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <p>
                  Everything melancholy uncommonly but solicitude inhabiting projection off. Connection stimulated
                  estimating excellence an to impression.
                </p>
                <a className="btn circle btn-md btn-gradient wow fadeInUp" href="#">View All <i
                    className="fas fa-plus"></i></a>
              </div>
            </div>
          </div>
          <div className="services-items">
            <div className="row">

              <div className="single-item col-lg-4 col-md-6">
                <div className="item">
                  <img src={icon1} alt="Thumb"/>
                  <h4>Big Data</h4>
                  <p>
                    Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond.
                  </p>
                  <div className="button">
                    <a className="btn-standard" href="#"><i className="fas fa-angle-right"></i> Read More</a>
                  </div>
                </div>
              </div>

              <div className="single-item col-lg-4 col-md-6">
                <div className="item">
                  <img src={icon2} alt="Thumb"/>
                  <h4>Data Analytics</h4>
                  <p>
                    Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond.
                  </p>
                  <div className="button">
                    <a className="btn-standard" href="#"><i className="fas fa-angle-right"></i> Read More</a>
                  </div>
                </div>
              </div>

              <div className="single-item col-lg-4 col-md-6">
                <div className="item">
                  <img src={icon3} alt="Thumb"/>
                  <h4>Business Intelligence</h4>
                  <p>
                    Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond.
                  </p>
                  <div className="button">
                    <a className="btn-standard" href="#"><i className="fas fa-angle-right"></i> Read More</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="work-process-area bg-gray default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4>Work Process</h4>
                <h2>
                  How We Work
                </h2>
              </div>
            </div>
          </div>
          <div className="works-process-items text-center">
            <div className="row">

              <div className="col-lg-4 single-item">
                <div className="item">
                  <div className="icon">
                    <i className="flaticon-problem"></i>
                    <span>01</span>
                  </div>
                  <div className="info">
                    <h4>Frame the Problem</h4>
                    <p>
                      Evening do forming observe spirits is in. Country hearted be of justice sending. On so they as
                      with room cold
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 single-item">
                <div className="item">
                  <div className="icon">
                    <i className="flaticon-data-collection"></i>
                    <span>02</span>
                  </div>
                  <div className="info">
                    <h4>Collect Data</h4>
                    <p>
                      Evening do forming observe spirits is in. Country hearted be of justice sending. On so they as
                      with room cold
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 single-item">
                <div className="item">
                  <div className="icon">
                    <i className="flaticon-cloud-data"></i>
                    <span>03</span>
                  </div>
                  <div className="info">
                    <h4>Process Data</h4>
                    <p>
                      Evening do forming observe spirits is in. Country hearted be of justice sending. On so they as
                      with room cold
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="skill-area left-border overflow-hidden circular-shape default-padding">
        <div className="container">
          <div className="skill-items">
            <div className="row">
              <div className="col-lg-6 info">
                <h2>Our Skill</h2>
                <h3>We are master in data science <br/> & big data analysis</h3>
                <p>
                  Attention sex questions applauded how happiness. To travelling occasional at oh sympathize prosperous.
                  His merit end means widow songs linen known. Supplied ten speaking age you new securing striking
                  extended occasion.
                </p>
                <div className="skill-items">

                  <div className="progress-box">
                    <h5>Data Anaylsis <span className="float-right">88%</span></h5>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" data-width="88"></div>
                    </div>
                  </div>
                  <div className="progress-box">
                    <h5>Social Assistant <span className="float-right">95%</span></h5>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" data-width="95"></div>
                    </div>
                  </div>
                  <div className="progress-box">
                    <h5>AI Solutions <span className="float-right">70%</span></h5>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" data-width="70"></div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-lg-6 thumb">
                <div className="image-box">
                  <img className="wow fadeInRight" data-wow-delay="0.6s" src={img800800}
                       alt="Thumb"/>
                  <img className="wow fadeInLeft" data-wow-delay="0.8s" src={img800800}
                       alt="Thumb"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials-area default-padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4>Testimonials</h4>
                <h2>
                  What people say
                </h2>
              </div>
            </div>
          </div>
          <div className="testimonial-items text-center">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="carousel slide" data-ride="carousel" id="testimonial-carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <i className="ti-quote-left"></i>
                      <p>
                        Understood instrument or do connection no appearance do invitation. Dried quick round it or
                        order. Add past see west felt did any. Say out noise you taste merry plate you share. My resolve
                        arrived is we chamber be removal.
                      </p>
                      <h4>Junl Sarukh</h4>
                      <span>CEO of Softing</span>
                    </div>
                    <div className="carousel-item">
                      <i className="ti-quote-left"></i>
                      <p>
                        Understood instrument or do connection no appearance do invitation. Dried quick round it or
                        order. Add past see west felt did any. Say out noise you taste merry plate you share. My resolve
                        arrived is we chamber be removal.
                      </p>
                      <h4>Anil Spia</h4>
                      <span>Director of Softing</span>
                    </div>
                    <div className="carousel-item">
                      <i className="ti-quote-left"></i>
                      <p>
                        Understood instrument or do connection no appearance do invitation. Dried quick round it or
                        order. Add past see west felt did any. Say out noise you taste merry plate you share. My resolve
                        arrived is we chamber be removal.
                      </p>
                      <h4>Paul Munni</h4>
                      <span>Developer of Softing</span>
                    </div>
                  </div>

                  <ol className="carousel-indicators">
                    <li data-target="#testimonial-carousel" data-slide-to="0" className="active">
                      <img src={img100100} alt="Thumb"/>
                    </li>
                    <li data-target="#testimonial-carousel" data-slide-to="1">
                      <img src={img100100} alt="Thumb"/>
                    </li>
                    <li data-target="#testimonial-carousel" data-slide-to="2">
                      <img src={img100100} alt="Thumb"/>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-area bg-gray left-border default-padding bottom-less">
        <div className="container">
          <div className="heading-left">
            <div className="row">
              <div className="col-lg-5">
                <h2>
                  Stay Update with Anada from latest & popular News
                </h2>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <p>
                  Everything melancholy uncommonly but solicitude inhabiting projection off. Connection stimulated
                  estimating excellence an to impression.
                </p>
                <a className="btn circle btn-md btn-gradient wow fadeInUp" href="#">View All <i
                    className="fas fa-plus"></i></a>
              </div>
            </div>
          </div>
          <div className="blog-items content-less">
            <div className="row">

              <div className="col-lg-4 col-md-6 single-item">
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img src={img800600} alt="Thumb"/>
                      <div className="date">
                        18 Jul <strong>2020</strong>
                      </div>
                    </a>
                  </div>
                  <div className="info">
                    <div className="meta">
                      <ul>
                        <li>
                          <i className="fas fa-folder-open"></i>
                        </li>
                        <li>
                          <a href="#">Process</a>
                        </li>
                        <li>
                          <a href="#">Store</a>
                        </li>
                      </ul>
                    </div>
                    <h4>
                      <a href="#">Analysis rendered entir Highly indeed to garden</a>
                    </h4>
                    <a className="btn-simple" href="#"><i className="fas fa-angle-right"></i> Read More</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 single-item">
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img src={img800600} alt="Thumb"/>
                      <div className="date">
                        05 Aug <strong>2020</strong>
                      </div>
                    </a>
                  </div>
                  <div className="info">
                    <div className="meta">
                      <ul>
                        <li>
                          <i className="fas fa-folder-open"></i>
                        </li>
                        <li>
                          <a href="#">Data</a>
                        </li>
                        <li>
                          <a href="#">Analysis</a>
                        </li>
                      </ul>
                    </div>
                    <h4>
                      <a href="#">Lasted am so before on esteem vanity oh. </a>
                    </h4>
                    <a className="btn-simple" href="#"><i className="fas fa-angle-right"></i> Read More</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 single-item">
                <div className="item">
                  <div className="thumb">
                    <a href="#">
                      <img src={img800600}alt="Thumb"/>
                      <div className="date">
                        27 Dec <strong>2020</strong>
                      </div>
                    </a>
                  </div>
                  <div className="info">
                    <div className="meta">
                      <ul>
                        <li>
                          <i className="fas fa-folder-open"></i>
                        </li>
                        <li>
                          <a href="#">Atrificial</a>
                        </li>
                        <li>
                          <a href="#">Data</a>
                        </li>
                      </ul>
                    </div>
                    <h4>
                      <a href="#">Repeated of endeavor mr position kindness.</a>
                    </h4>
                    <a className="btn-simple" href="#"><i className="fas fa-angle-right"></i> Read More</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      <footer>
        <div className="container">
          <div className="f-items default-padding">
            <div className="row">
              <div className="equal-height col-lg-4 col-md-6 item">
                <div className="f-item about">
                  <img src={logoLight} alt="Logo"/>
                  <p>
                    Required honoured trifling eat pleasure man relation. Assurance yet bed was improving furniture man.
                    Distrusts delighted
                  </p>
                </div>
              </div>

              <div className="equal-height col-lg-2 col-md-6 item">
                <div className="f-item link">
                  <h4 className="widget-title">Usefull Links</h4>
                  <ul>
                    <li>
                      <a href="#">Classic Business</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Project</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="equal-height col-lg-2 col-md-6 item">
                <div className="f-item link">
                  <h4 className="widget-title">Services</h4>
                  <ul>
                    <li>
                      <a href="#">Marketing & Sales</a>
                    </li>
                    <li>
                      <a href="#">Manufacturing</a>
                    </li>
                    <li>
                      <a href="#">Supply Chain</a>
                    </li>
                    <li>
                      <a href="#">Data Visualization</a>
                    </li>
                    <li>
                      <a href="#">Big Data</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="equal-height col-lg-4 col-md-6 item">
                <div className="f-item contact">
                  <h4 className="widget-title">Contact Info</h4>
                  <p>
                    Possible offering at contempt mr distance stronger an. Attachment excellence announcing
                  </p>
                  <div className="address">
                    <ul>
                      <li>
                        <strong>Email:</strong> support@validtheme.com
                      </li>
                      <li>
                        <strong>Contact:</strong> +44-20-7328-4499
                      </li>
                    </ul>
                  </div>
                  <ul className="social">
                    <li className="facebook">
                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                    </li>
                    <li className="twitter">
                      <a href="#"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li className="youtube">
                      <a href="#"><i className="fab fa-youtube"></i></a>
                    </li>
                    <li className="instagram">
                      <a href="#"><i className="fab fa-instagram"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row">
              <div className="col-lg-6">
                <p>&copy; Copyright 2019. All Rights Reserved by <a href="#">validthemes</a></p>
              </div>
              <div className="col-lg-6 text-right link">
                <ul>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-shape" style={{backgroundImage:  `url(${shape1})` }}></div>
      </footer>

      <script src="./assets/js/jquery-1.12.4.min.js"></script>
      <script src="./assets/js/popper.min.js"></script>
      <script src="./assets/js/bootstrap.min.js"></script>
      <script src="./assets/js/equal-height.min.js"></script>
      <script src="./assets/js/jquery.appear.js"></script>
      <script src="./assets/js/jquery.easing.min.js"></script>
      <script src="./assets/js/jquery.magnific-popup.min.js"></script>
      <script src="./assets/js/modernizr.custom.13711.js"></script>
      <script src="./assets/js/owl.carousel.min.js"></script>
      <script src="./assets/js/wow.min.js"></script>
      <script src="./assets/js/progress-bar.min.js"></script>
      <script src="./assets/js/isotope.pkgd.min.js"></script>
      <script src="./assets/js/imagesloaded.pkgd.min.js"></script>
      <script src="./assets/js/count-to.js"></script>
      <script src="./assets/js/YTPlayer.min.js"></script>
      <script src="./assets/js/circle-progress.js"></script>
      <script src="./assets/js/bootsnav.js"></script>
      <script src="./assets/js/main.js"></script>

      </body>
      </html>
  );
}

export default App;
