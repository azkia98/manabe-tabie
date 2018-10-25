$(document).ready(function () {
    // let RegisterUser = document.getElementById('register-user');
    // let Comments = $('#comments');
    // let ShopUser = $('#shop-user');
    // let Users = $('#users');
    // let OnlineUsers = $('#online-users');


    // let data = {
    //     labels: ['', '', '', '', '', ''],
    //     datasets: [
    //         {
    //             data: [100, 500, 600, 700, 400, 800],
    //             backgroundColor: 'transparent',
    //             borderColor: '#fff',
    //             borderWidth: 2,
    //             pointBackgroundColor: '#fff'
    //         }
    //     ]
    // };


    // let RegisterUserChart = new Chart(RegisterUser, {
    //     type: 'line',
    //     data,
    //     options: {
    //         layout: {
    //             padding: {
    //                 left: 5,
    //                 right: 5
    //             }
    //         },
    //         scales: {
    //             yAxes: [
    //                 {
    //                     display: false
    //                 }
    //             ],
    //             xAxes: [
    //                 {
    //                     display: false
    //                 }
    //             ]
    //         },
    //         legend: {
    //             display: false
    //         }
    //     }
    // });
    // let ShopUserChart = new Chart(ShopUser, {
    //     type: 'line',
    //     data: {
    //         labels: ['', '', '', '', '', ''],
    //         datasets: [
    //             {
    //                 data: [100, 500, 600, 700, 400, 800],
    //                 backgroundColor: 'transparent',
    //                 borderColor: '#fff',
    //                 borderWidth: 2,
    //                 pointBackgroundColor: '#fff'
    //             }
    //         ]
    //     },
    //     options: {
    //         layout: {
    //             padding: {
    //                 left: 5,
    //                 right: 5
    //             }
    //         },
    //         scales: {
    //             yAxes: [
    //                 {
    //                     display: false
    //                 }
    //             ],
    //             xAxes: [
    //                 {
    //                     display: false
    //                 }
    //             ]
    //         },
    //         legend: {
    //             display: false
    //         }
    //     }
    // });
    // let UsersChart = new Chart(Users, {
    //     type: 'bar',
    //     data: {
    //         labels: ['', '', '', '', '', ''],
    //         datasets: [
    //             {
    //                 data: [100, 500, 600, 700, 400, 800],
    //                 backgroundColor: '#fff',
    //                 borderColor: '#fff',
    //                 borderWidth: 2,
    //                 pointBackgroundColor: '#fff'
    //             }
    //         ]
    //     },
    //     options: {
    //         layout: {
    //             padding: {
    //                 left: 5,
    //                 right: 5
    //             }
    //         },
    //         scales: {
    //             yAxes: [
    //                 {
    //                     display: false
    //                 }
    //             ],
    //             xAxes: [
    //                 {
    //                     display: false
    //                 }
    //             ]
    //         },
    //         legend: {
    //             display: false
    //         }
    //     }
    // });
    // let CommentsChart = new Chart(Comments, {
    //     type: 'bar',
    //     data: {
    //         labels: ['', '', '', '', '', ''],
    //         datasets: [
    //             {
    //                 data: [100, 500, 600, 700, 400, 800],
    //                 backgroundColor: '#fff',
    //                 borderColor: '#fff',
    //                 borderWidth: 2,
    //                 pointBackgroundColor: '#fff'
    //             }
    //         ]
    //     },
    //     options: {
    //         layout: {
    //             padding: {
    //                 left: 5,
    //                 right: 5
    //             }
    //         },
    //         scales: {
    //             yAxes: [
    //                 {
    //                     display: false
    //                 }
    //             ],
    //             xAxes: [
    //                 {
    //                     display: false
    //                 }
    //             ]
    //         },
    //         legend: {
    //             display: false
    //         }
    //     }
    // });
    // let OnlineUsersChart = new Chart(OnlineUsers, {
    //     type: 'line',
    //     data: {
    //         labels: ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
    //         datasets: [
    //             {
    //                 data: [100, 500, 600, 700, 400, 800],
    //                 backgroundColor: 'rgba(0,0,0,.4)',
    //                 borderColor: '#555',
    //                 borderWidth: 2,
    //                 pointBackgroundColor: '#333'
    //             }
    //         ]
    //     },
    //     options: {
    //         layout: {
    //             padding: {
    //                 left: 5,
    //                 right: 5
    //             }
    //         },
    //         scales: {
    //             yAxes: [
    //                 {
    //                     display: false
    //                 }
    //             ],
    //             xAxes: [
    //                 {
    //                     display: false
    //                 }
    //             ]
    //         },
    //         legend: {
    //             display: false
    //         }
    //     }
    // });

    $(window).resize(() => {
        resizeTemplate();
    })

    function resizeTemplate() {
        if ($(window).width() <= 768) {
            $('#sidebar').collapse('hide');
        } else {
            $('#sidebar').collapse('show');
        }
    }
    resizeTemplate();

    $('#sidebar').on('hide.bs.collapse', function (e) {
        console.log('hide');
        if (e.target == this)
            $('#main').removeClass(['col-lg-10', 'col-md-9']);
    })
    $('#sidebar').on('show.bs.collapse', function (e) {
        console.log('show');
        if (e.target == this)
            $('#main').addClass(['col-lg-10', 'col-md-9']);
    })
});