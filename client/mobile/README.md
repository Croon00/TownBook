<<<<<<< HEAD:client/mobile/README.md
Ctrl + Shift + F 누르면 전체검색

.main-panel 이 배경

.content로 카드 위치 변경가능

모바일 크기로 줄이면 사진 밑에 페이지이름 나오ㄱ




유저 프로필 qr 임시보관
<Col md="4">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  {/* <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" /> */}
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/qrcode.png")} />
                      
                    <h5 className="title">이영재</h5>
                  </a>
                  <p className="description">Front-end</p>
                </div>
                <div className="card-description">
                  .
                </div>
              </CardBody>
              {/* <CardFooter>
                <div className="button-container">
                  <Button className="btn-icon btn-round" color="facebook">
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button className="btn-icon btn-round" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button className="btn-icon btn-round" color="google">
                    <i className="fab fa-google-plus" />
                  </Button>
                </div>
              </CardFooter> */}
            </Card>
          </Col>





import { useState, useEffect } from 'react';

// const DUMMY_DATA = [
//     {
//       id: 'm1',
//       title: 'This is a first meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//       id: 'm2',
//       title: 'This is a second meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//   ];
//jsx에서는 jsx 배열로 렌더링가능 {[]}
//key={}해야 경고사라짐
//이 부분 조금 어렵다 화살표함수
function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    //화면에 표시되지 않는 부수효과들을 정의할때도 사용됨
    useEffect(() => {
      setIsLoading(true); //여기선뭐 안해도됨 useeffect가 실행될때 true로 초기화
      fetch(
        'http://192.168.140.1/servo1/90',
        {}
      ).then(response => {
        return response.json();
      }).then(data => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
          id: key,
          ...data[key]
        };
          meetups.push(meetup);
        };



        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  
    }, []);

    
    if (isLoading) {
      <section>
        <p>Loading...</p>
      </section>
    }


    return <div>
        <h1>All AllMeetups Page</h1>
        {/* {[<li>Item1</li>,<li>Item2</li>]} */}
        {/* 이것들은 MeetupList.js 에서 만들어서 주기로 */}
        {/* {DUMMY_DATA.map((meetup) => {
            return <li key={meetup.id}>{meetup.title}</li>
        })} */}
        <button onClick={loadedMeetups

        }>
          신호
        </button>
     
        </div>
        
}
export default AllMeetupsPage;






// const notices = [];
        // console.log(response)
        // for (const key in response.data) {
        //   const notice = {
        //   id: key,
        //   ...response.data[key]
        // };
        //   notices.push(notice);
        // };
        // if(response=="true"){
        // alert("회원가입에 성공하였습니다.");
        // history.replace("/");
        // }
        // else{

        //   alert("회원가입에 실패하였습니다.");
        // }
        // setIsLoading(false);
        // setLoadedMeetups(notices);
        // console.log(notices)
        // console.log(res.data);
        // const base64ImageString = Buffer.from(res.data, 'binary').toString('base64')

 // console.log(`data:${res.headers["content-type"]};base64,${base64}`);
        // return `data:${res.headers["content-type"]};base64,${base64}`;
        // var imgurl = `data:${res.headers["content-type"]};base64,${base64}`;
        // test = `data:${res.headers["content-type"]};base64,${base64}`;
        // console.log(test)
        // console.log(base64ImageString)
        // let srcValue = "data:image/png;base64,"+base64ImageString

  // let imgurl;
  // const toggleSidebar = () => {
  //   document.documentElement.classList.toggle("nav-open");
  //   setsidebarOpened(!sidebarOpened);
  // };
  // React.useEffect(() => {
  //   window.addEventListener("resize", updateColor);
  //   // Specify how to clean up after this effect:
  //   return function cleanup() {
  //     window.removeEventListener("resize", updateColor);
  //   };
  // });
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)

  //네브바 반응형 색깔 변경!! //collapse는 화면 줄인다음 오른쪽 ... 클릭하면 나오는거
  // const updateColor = () => {
  //   if (window.innerWidth < 993 && collapseOpen) {
  //     setcolor("bg-white");
  //   } else {
  //     setcolor("navbar-transparent");
  //   }
  // };
  // const hiddenPicture = () => {
  //   if (window.innerWidth < 993) {
  //     sethiddenpic(false);
  //   }
  // };

  //화면 크기 테스트

  // const ResizedComponent = () => {
  //   const [windowSize, setWindowSize] = useState({
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   });
  //   const handleResize = () => {
  //     console.log(
  //       `브라우저 화면 사이즈 x: ${window.innerWidth}, y: ${window.innerHeight}`
  //     );
  //     setWindowSize({
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //     });
  //   };
  //   React.useEffect(() => {
  //     window.addEventListener("resize", handleResize);
  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);
  //   return (
  //     <div>
  //       브라우저 화면 사이즈 x:{window.innerWidth}, y:{window.innerHeight}
  //     </div>
  //   );
  // };

  // const verify2 = () => {
  //   if (window.innerWidth < 993) {
  //     console.log(window.innerWidth);
  //   }
  // };
  //네브바 로고 설정

    {/* <Col md="4">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/anime3.png")}
                    />

                    <h5 className="title">이영재</h5>
                  </a>
                  <p className="description">Ceo/Co-Founder</p>
                </div>
                <div className="card-description">
                  Do not be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </div>
              </CardBody>
              <CardFooter>
                <div className="button-container">
                  <Button className="btn-icon btn-round" color="facebook">
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button className="btn-icon btn-round" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button className="btn-icon btn-round" color="google">
                    <i className="fab fa-google-plus" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col> */}
# [Black Dashboard React](https://demos.creative-tim.com/black-dashboard-react/#/dashboard) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fblack-dashboard-react%2F%23%2Fadmin%2Fdashboard&text=Black%20Dashboard%20React%20by%20Creative%20Tim%20%7C%20Free%20React%20Admin%20Template&original_referer=https%3A%2F%2Fdemos.creative-tim.com%2Fblack-dashboard-react%2F&via=creativetim&hashtags=react%2Ccreativetim%2Cdark%2Cdashboard%2Cbootstrap%2Creactstrap%2Creactjs)

![version](https://img.shields.io/badge/version-1.2.1-blue.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/black-dashboard-react.svg?maxAge=2592000)]() [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/black-dashboard-react.svg?maxAge=2592000)]() [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)

![Product Gif](./github-assets/black-dashboard-react.gif)

Black Dashboard React is a beautiful [Bootstrap 4](http://getbootstrap.com/), [Reacstrap](https://reactstrap.github.io/) and [React](https://reactjs.org/) ([create-react-app](https://github.com/facebook/create-react-app)) Admin Dashboard with a huge number of components built to fit together and look amazing. If you are looking for a tool to manage and visualize data about your business, this dashboard is the thing for you. It combines colors that are easy on the eye, spacious cards, beautiful typography, and graphics.
Black Dashboard React comes packed with all plugins that you might need inside a project and documentation on how to get started. It is light and easy to use, and also very powerful.

Black Dashboard React features over 16 individual components, giving you the freedom of choosing and combining. This means that there are thousands of possible combinations. All components can take variations in color, that you can easily modify using SASS files. You will save a lot of time going from prototyping to full-functional code because all elements are implemented.
We thought about everything, so this dashboard comes with 2 versions, Dark Mode and Light Mode.

Special thanks go for the owners of these plugins:

- [Perfect Scrollbar](http://utatti.github.io/perfect-scrollbar/) for the nice scrollbars for windows.
- [React Chartjs](http://jerairrest.github.io/react-chartjs-2/) for the wonderful wrapper for charts.
- [Chartjs](https://www.chartjs.org/) for the wonderful charts.

We are very excited to share this dashboard with you and we look forward to hearing your feedback!

**Example Pages** We wanted to fully display the power of this dashboard, so the kit comes packed with examples showing you how to use the components.

## Table of Contents

- [Versions](#versions)
- [Demo](#demo)
- [Quick Start](#quick-start)
- [Documentation](#documentation)
- [File Structure](#file-structure)
- [Browser Support](#browser-support)
- [Resources](#resources)
- [Reporting Issues](#reporting-issues)
- [Technical Support or Questions](#technical-support-or-questions)
- [Licensing](#licensing)
- [Useful Links](#useful-links)

## Versions

[<img src="./github-assets/html.png" width="60" height="60" />](https://www.creative-tim.com/product/black-dashboard)
[<img src="./github-assets/react.svg" width="60" height="60" />](https://www.creative-tim.com/product/black-dashboard-react)[<img src="./github-assets/vuejs.png" width="60" height="60" />](https://www.creative-tim.com/product/vue-black-dashboard)

| HTML                                                                                                                                                                | React                                                                                                                                                                   | Vue                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Black Dashboard HTML](https://s3.amazonaws.com/creativetim_bucket/products/93/thumb/opt_bd_thumbnail.jpg)](https://www.creative-tim.com/product/black-dashboard) | [![Black Dashboard React](https://s3.amazonaws.com/creativetim_bucket/products/136/thumb/opt_bd_react.jpg)](https://www.creative-tim.com/product/black-dashboard-react) | [![Vue Black Dashboard](https://s3.amazonaws.com/creativetim_bucket/products/99/thumb/opt_bd_vue_thumbnail.jpg)](https://www.creative-tim.com/product/vue-black-dashboard) |

## Demo

| Dashboard                                                                                                             | User Profile                                                                                                            | Tables                                                                                                               | Maps                                                                                                       | Notification                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [![Start page](./github-assets/dashboard-page.png)](https://demos.creative-tim.com/black-dashboard-react/#/dashboard) | [![User profile page](./github-assets/user-page.png)](https://demos.creative-tim.com/black-dashboard-react/#/user-page) | [![Tables page ](./github-assets/table-page.png)](https://demos.creative-tim.com/black-dashboard-react/#/table-list) | [![Maps Page](./github-assets/maps-page.png)](https://demos.creative-tim.com/black-dashboard-react/#/maps) | [![Notification page](./github-assets/notifications-page.png)](https://demos.creative-tim.com/black-dashboard-react/#/notifications) |

[View More](https://demos.creative-tim.com/black-dashboard-react/#/dashboard).

## Quick start

Quick start options:

- Clone the repo: `git clone https://github.com/creativetimofficial/black-dashboard-react.git`.
- [Download from Github](https://github.com/creativetimofficial/black-dashboard-react/archive/master.zip).
- [Download from Creative Tim](https://www.creative-tim.com/product/black-dashboard-react).

## Documentation

The documentation for the Black Dashboard React is hosted at our [website](https://demos.creative-tim.com/black-dashboard-react/#/documentation/tutorial).

## File Structure

Within the download you'll find the following directories and files:

```
black-dashboard-react
.
├── package.json
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── Documentation
│   └── documentation.html
├── github-assets
│   └── react.svg
├── public
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo-white.svg
    ├── logo.svg
    ├── routes.js
    ├── assets
    │   ├── css
    │   ├── demo
    │   ├── fonts
    │   ├── img
    │   └── scss
    │       ├── black-dashboard
    │       │   ├── bootstrap
    │       │   │   ├── mixins
    │       │   │   └── utilities
    │       │   ├── custom
    │       │   │   ├── cards
    │       │   │   ├── mixins
    │       │   │   ├── utilities
    │       │   │   └── vendor
    │       └── black-dashboard.scss
    ├── components
    │   ├── FixedPlugin
    │   │   └── FixedPlugin.js
    │   ├── Footer
    │   │   └── Footer.js
    │   ├── Navbars
    │   │   ├── AdminNavbar.js
    │   │   └── RTLNavbar.js
    │   └── Sidebar
    │       └── Sidebar.js
    ├── layouts
    │   ├── Admin
    │   │   └── Admin.js
    │   └── RTL
    │       └── RTL.js
    ├── variables
    │   └── charts.js
    └── views
        ├── Dashboard.js
        ├── Icons.js
        ├── Map.js
        ├── Notifications.js
        ├── Rtl.js
        ├── TableList.js
        ├── Typography.js
        └── UserProfile.js
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">

## Resources

- Demo: https://demos.creative-tim.com/black-dashboard-react/#/dashboard
- Download Page: https://www.creative-tim.com/product/black-dashboard-react
- Documentation: https://demos.creative-tim.com/black-dashboard-react/#/documentation/tutorial
- License Agreement: https://www.creative-tim.com/license
- Support: https://www.creative-tim.com/contact-us
- Issues: [Github Issues Page](https://github.com/creativetimofficial/black-dashboard-react/issues)

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Black Dashboard React. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Black Dashboard React. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Technical Support or Questions

If you have questions or need help integrating the product please [contact us](https://www.creative-tim.com/contact-us) instead of opening an issue.

## Licensing

- Copyright 2022 Creative Tim (https://www.creative-tim.com)
- Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

## Useful Links

More products from Creative Tim: <https://www.creative-tim.com/products>

Tutorials: <https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w>

Freebies: <https://www.creative-tim.com/products>

Affiliate Program (earn money): <https://www.creative-tim.com/affiliates/new>

Social Media:

Twitter: <https://twitter.com/CreativeTim>

Facebook: <https://www.facebook.com/CreativeTim>

Dribbble: <https://dribbble.com/creativetim>

Google+: <https://plus.google.com/+CreativetimPage>

Instagram: <https://instagram.com/creativetimofficial>
=======
React 
>>>>>>> KI:client/black-dashboard-react-master/README.md
